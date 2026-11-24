import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getAllQueries, updateQueryStatus, deleteQuery } from "@/lib/storage";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const queries = getAllQueries();
  return NextResponse.json({
    success: true,
    data: queries,
    admin: session.username,
  });
}

export async function PATCH(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "Query ID and status are required." },
        { status: 400 }
      );
    }

    const updated = updateQueryStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json(
        { error: "Query not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error("Error updating query:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Query ID is required." },
        { status: 400 }
      );
    }

    const deleted = deleteQuery(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Query not found or already deleted." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Query deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting query:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
