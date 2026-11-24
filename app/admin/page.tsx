"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ContactQuery } from "@/lib/storage";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [adminUser, setAdminUser] = useState<string>("Admin");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [sourceFilter, setSourceFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<ContactQuery | null>(null);
  const [leadNotes, setLeadNotes] = useState("");
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  // Fetch queries from API
  const fetchQueries = async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    try {
      const res = await fetch("/api/admin/queries");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (data.success) {
        setQueries(data.data || []);
        if (data.admin) setAdminUser(data.admin);
      }
    } catch (err) {
      console.error("Failed to load queries:", err);
    } finally {
      setIsLoading(false);
      if (isManual) setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  // Status update handler
  const handleStatusChange = async (
    id: string,
    newStatus: ContactQuery["status"],
    notes?: string
  ) => {
    try {
      const res = await fetch("/api/admin/queries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, notes }),
      });
      const data = await res.json();
      if (data.success) {
        setQueries((prev) =>
          prev.map((q) => (q.id === id ? { ...q, status: newStatus, notes: notes ?? q.notes } : q))
        );
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus, notes: notes ?? prev.notes } : null));
        }
        showTemporaryMessage("Status updated successfully.");
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  // Delete handler
  const handleDeleteQuery = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete the inquiry from "${name}"?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/queries?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setQueries((prev) => prev.filter((q) => q.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
        showTemporaryMessage("Inquiry deleted.");
      }
    } catch (err) {
      console.error("Failed to delete inquiry:", err);
    }
  };

  // Save notes handler
  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setIsSavingNotes(true);
    await handleStatusChange(selectedLead.id, selectedLead.status, leadNotes);
    setIsSavingNotes(false);
    showTemporaryMessage("Internal notes saved.");
  };

  const showTemporaryMessage = (msg: string) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(null), 3000);
  };

  // Filtered queries calculation
  const filteredQueries = useMemo(() => {
    return queries.filter((q) => {
      const matchesSearch =
        searchQuery === "" ||
        q.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.pod && q.pod.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (q.message && q.message.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus = statusFilter === "All" || q.status === statusFilter;
      const matchesSource = sourceFilter === "All" || q.source === sourceFilter;

      return matchesSearch && matchesStatus && matchesSource;
    });
  }, [queries, searchQuery, statusFilter, sourceFilter]);

  // Metrics
  const metrics = useMemo(() => {
    const total = queries.length;
    const newCount = queries.filter((q) => q.status === "New").length;
    const scheduledCount = queries.filter((q) => q.status === "Meeting Scheduled").length;
    const qualifiedCount = queries.filter((q) => q.status === "Qualified").length;
    return { total, newCount, scheduledCount, qualifiedCount };
  }, [queries]);

  // Export to CSV
  const handleExportCSV = () => {
    if (queries.length === 0) {
      alert("No data to export.");
      return;
    }
    const headers = [
      "ID",
      "Date",
      "Name",
      "Email",
      "Company",
      "Market",
      "Product / Pod",
      "Goal / Message",
      "Source",
      "Status",
      "Notes",
    ];

    const rows = queries.map((q) => [
      `"${q.id}"`,
      `"${new Date(q.createdAt).toLocaleString()}"`,
      `"${q.name.replace(/"/g, '""')}"`,
      `"${q.email.replace(/"/g, '""')}"`,
      `"${q.company.replace(/"/g, '""')}"`,
      `"${(q.market || "").replace(/"/g, '""')}"`,
      `"${(q.pod || q.team || "").replace(/"/g, '""')}"`,
      `"${(q.message || q.goal || "").replace(/"/g, '""')}"`,
      `"${q.source.replace(/"/g, '""')}"`,
      `"${q.status}"`,
      `"${(q.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `afa_technologies_leads_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadgeClass = (status: ContactQuery["status"]) => {
    switch (status) {
      case "New":
        return "status-tag--new";
      case "Contacted":
        return "status-tag--contacted";
      case "Meeting Scheduled":
        return "status-tag--scheduled";
      case "Qualified":
        return "status-tag--qualified";
      case "Closed":
        return "status-tag--closed";
      default:
        return "";
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="admin-portal-root">
      {/* Top Navigation Bar */}
      <header className="admin-header">
        <div className="admin-header-wrap">
          <div className="admin-brand-left">
            <Image
              src="/images/logo-icon.webp"
              alt="AFA Technologies Logo"
              width={34}
              height={34}
              className="admin-header-logo"
            />
            <div>
              <span className="admin-title">AFA Technologies</span>
              <span className="admin-subtitle">Inbound &amp; Outbound Leads Portal</span>
            </div>
          </div>

          <div className="admin-header-right">
            <div className="admin-live-badge">
              <span className="live-ping-dot" />
              <span>Admin: <b>{adminUser}</b></span>
            </div>

            <button
              onClick={() => fetchQueries(true)}
              className={`btn-admin-action ${isRefreshing ? "is-loading" : ""}`}
              title="Refresh leads data"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              <span>Refresh</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="btn-admin-action"
              title="Download CSV"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="btn-admin-logout"
              title="Log out"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Container */}
      <main className="admin-main-wrap">
        {actionMessage && (
          <div className="admin-toast-banner" role="status">
            <span>{actionMessage}</span>
          </div>
        )}

        {/* 4 Metric KPI Cards */}
        <section className="admin-kpi-grid">
          <div className="admin-kpi-card">
            <div className="kpi-icon kpi-icon--blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Total Inquiries</span>
              <strong className="kpi-val">{metrics.total}</strong>
            </div>
          </div>

          <div className="admin-kpi-card">
            <div className="kpi-icon kpi-icon--cyan">
              <span className="kpi-pulse-dot" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
            </div>
            <div className="kpi-info">
              <span className="kpi-label">New / Pending</span>
              <strong className="kpi-val">{metrics.newCount}</strong>
            </div>
          </div>

          <div className="admin-kpi-card">
            <div className="kpi-icon kpi-icon--purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Meetings Scheduled</span>
              <strong className="kpi-val">{metrics.scheduledCount}</strong>
            </div>
          </div>

          <div className="admin-kpi-card">
            <div className="kpi-icon kpi-icon--green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="kpi-info">
              <span className="kpi-label">Qualified Deals</span>
              <strong className="kpi-val">{metrics.qualifiedCount}</strong>
            </div>
          </div>
        </section>

        {/* Filter and Search Ribbon */}
        <div className="admin-toolbar">
          <div className="toolbar-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, company, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="btn-clear-search"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          <div className="toolbar-filters">
            {/* Status Pills */}
            <div className="status-pill-group">
              {["All", "New", "Contacted", "Meeting Scheduled", "Qualified", "Closed"].map(
                (status) => (
                  <button
                    key={status}
                    className={`status-filter-btn ${statusFilter === status ? "is-active" : ""}`}
                    onClick={() => setStatusFilter(status)}
                  >
                    <span>{status}</span>
                    <span className="filter-count">
                      {status === "All"
                        ? queries.length
                        : queries.filter((q) => q.status === status).length}
                    </span>
                  </button>
                )
              )}
            </div>

            {/* Source dropdown */}
            <select
              className="source-select"
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
            >
              <option value="All">All Sources</option>
              <option value="Hero Lead Form">Hero Lead Form</option>
              <option value="Contact Section">Contact Section</option>
            </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="admin-table-container">
          {isLoading ? (
            <div className="admin-loading-state">
              <div className="admin-spinner-large" />
              <p>Loading inquiries...</p>
            </div>
          ) : filteredQueries.length === 0 ? (
            <div className="admin-empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <h3>No Inquiries Found</h3>
              <p>
                {searchQuery || statusFilter !== "All" || sourceFilter !== "All"
                  ? "Try resetting your search or filter options."
                  : "All submitted contact forms will appear here in real-time."}
              </p>
            </div>
          ) : (
            <table className="admin-data-table">
              <thead>
                <tr>
                  <th>Date &amp; Time</th>
                  <th>Lead / Contact</th>
                  <th>Company &amp; Market</th>
                  <th>Requirement / Pod</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredQueries.map((q) => (
                  <tr key={q.id} className={q.status === "New" ? "row--unread" : ""}>
                    <td className="cell-date">
                      <span>{formatDate(q.createdAt)}</span>
                    </td>

                    <td className="cell-lead">
                      <div className="lead-name-row">
                        <strong className="lead-full-name">{q.name}</strong>
                      </div>
                      <a href={`mailto:${q.email}`} className="lead-email-link">
                        {q.email}
                      </a>
                    </td>

                    <td className="cell-company">
                      <strong className="company-title">{q.company}</strong>
                      <span className="market-tag">{q.market || "Global"}</span>
                    </td>

                    <td className="cell-pod">
                      <span className="pod-badge">
                        {q.pod || q.team || q.goal || "B2B Sales Pod"}
                      </span>
                    </td>

                    <td className="cell-source">
                      <span className="source-chip">{q.source}</span>
                    </td>

                    <td className="cell-status">
                      <select
                        value={q.status}
                        onChange={(e) =>
                          handleStatusChange(
                            q.id,
                            e.target.value as ContactQuery["status"]
                          )
                        }
                        className={`status-dropdown ${getStatusBadgeClass(q.status)}`}
                      >
                        <option value="New">● New</option>
                        <option value="Contacted">● Contacted</option>
                        <option value="Meeting Scheduled">● Meeting Scheduled</option>
                        <option value="Qualified">● Qualified</option>
                        <option value="Closed">● Closed</option>
                      </select>
                    </td>

                    <td className="cell-actions" style={{ textAlign: "right" }}>
                      <button
                        onClick={() => {
                          setSelectedLead(q);
                          setLeadNotes(q.notes || "");
                        }}
                        className="btn-view-details"
                        title="View details and notes"
                      >
                        View
                      </button>

                      <button
                        onClick={() => handleDeleteQuery(q.id, q.name)}
                        className="btn-delete-row"
                        title="Delete inquiry"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>

      {/* Detail Modal / Drawer */}
      {selectedLead && (
        <div className="modal-backdrop" onClick={() => setSelectedLead(null)}>
          <div
            className="admin-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-header">
              <div>
                <span className="modal-lead-source">{selectedLead.source}</span>
                <h2 className="modal-lead-name">{selectedLead.name}</h2>
                <span className="modal-lead-company">{selectedLead.company}</span>
              </div>
              <button
                className="btn-close-modal"
                onClick={() => setSelectedLead(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-grid-2">
                <div className="detail-item">
                  <span className="detail-label">Email Address</span>
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="detail-val-link"
                  >
                    {selectedLead.email} &rarr;
                  </a>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Submission Date</span>
                  <span className="detail-val">
                    {formatDate(selectedLead.createdAt)}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Target Market</span>
                  <span className="detail-val">
                    {selectedLead.market || "Unspecified"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Required Product / Service</span>
                  <span className="detail-val">
                    {selectedLead.pod || selectedLead.team || "Dedicated Pod"}
                  </span>
                </div>
              </div>

              {(selectedLead.message || selectedLead.goal) && (
                <div className="detail-item full-width">
                  <span className="detail-label">Submitted Message / Goal</span>
                  <div className="message-box">
                    <p>{selectedLead.message || selectedLead.goal}</p>
                  </div>
                </div>
              )}

              {/* Status Selector */}
              <div className="detail-item full-width">
                <span className="detail-label">Lead Status</span>
                <div className="status-selector-row">
                  {(["New", "Contacted", "Meeting Scheduled", "Qualified", "Closed"] as const).map(
                    (st) => (
                      <button
                        key={st}
                        className={`status-btn-choice ${
                          selectedLead.status === st ? "is-selected" : ""
                        }`}
                        onClick={() => handleStatusChange(selectedLead.id, st, leadNotes)}
                      >
                        {st}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Internal Notes */}
              <div className="detail-item full-width">
                <span className="detail-label">Internal Sales Notes</span>
                <textarea
                  className="lead-notes-area"
                  rows={4}
                  placeholder="Add notes about calls, discovery meetings, commercial requirements..."
                  value={leadNotes}
                  onChange={(e) => setLeadNotes(e.target.value)}
                />
                <button
                  onClick={handleSaveNotes}
                  disabled={isSavingNotes}
                  className="btn-save-notes"
                >
                  {isSavingNotes ? "Saving..." : "Save Notes"}
                </button>
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={`mailto:${selectedLead.email}?subject=AFA%20Technologies%20-%20Sales%20Pod%20Strategy%20Follow-up`}
                className="btn-email-lead"
              >
                Send Email to {selectedLead.name} &rarr;
              </a>
              <button
                onClick={() => setSelectedLead(null)}
                className="btn-close-footer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
