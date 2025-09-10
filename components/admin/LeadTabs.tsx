"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Trash2 } from "lucide-react";
import { PaginationWrapper } from "@/components/ui/pagination";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { useLeads, useDeleteLead } from "@/lib/queries/leads";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 10;

type LeadRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  location: string;
  booking: string;
  interest: string;
  createdAt: string;
};

export default function LeadTabs() {
  const { data, isLoading, error } = useLeads();
  const deleteMutation = useDeleteLead();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [confirmingDeleteAll, setConfirmingDeleteAll] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      toast.success("Lead deleted", {
        description: "The lead has been successfully deleted.",
      });
    } catch {
      toast.error("Failed to delete lead", {
        description: "Please try again.",
      });
    }
  };

  const handleDeleteSelected = async () => {
    try {
      await Promise.all(
        selectedLeads.map((id) => deleteMutation.mutateAsync(id))
      );
      toast.success("Selected leads deleted successfully");
      setSelectedLeads([]);
    } catch {
      toast.error("Failed to delete selected leads");
    } finally {
      setConfirmingDeleteAll(false);
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading leads...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Error loading leads: {(error as Error).message}
      </div>
    );
  }

  const leads = (data?.leads ?? []) as LeadRow[];

  const filteredLeads = leads.filter((lead) => {
    if (searchTerm === "") return true;
    const term = searchTerm.toLowerCase();
    return (
      lead.name.toLowerCase().includes(term) ||
      lead.email.toLowerCase().includes(term) ||
      lead.phone.includes(term) ||
      lead.interest.toLowerCase().includes(term) ||
      lead.business.toLowerCase().includes(term) ||
      lead.location.toLowerCase().includes(term) ||
      lead.booking.toLowerCase().includes(term)
    );
  });

  const totalPages = Math.ceil(filteredLeads.length / ITEMS_PER_PAGE);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleExport = () => {
    const rows = [
      [
        "Name",
        "Email",
        "Phone",
        "Business",
        "Location",
        "Booking",
        "Interest",
        "Created At",
      ],
      ...filteredLeads.map((lead) => [
        lead.name,
        lead.email,
        lead.phone,
        lead.business,
        lead.location,
        lead.booking,
        lead.interest,
        new Date(lead.createdAt).toISOString(),
      ]),
    ];

    const csv = rows
      .map((row) =>
        row
          .map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Search + Actions */}
      <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {selectedLeads.length > 0 && (
            <Button
              variant="destructive"
              onClick={() => setConfirmingDeleteAll(true)}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete Selected ({selectedLeads.length})
            </Button>
          )}
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input
                  type="checkbox"
                  checked={
                    paginatedLeads.length > 0 &&
                    paginatedLeads.every((lead) =>
                      selectedLeads.includes(lead.id)
                    )
                  }
                  onChange={() => {
                    const allIds = paginatedLeads.map((lead) => lead.id);
                    const allSelected = allIds.every((id) =>
                      selectedLeads.includes(id)
                    );
                    setSelectedLeads((prev) =>
                      allSelected
                        ? prev.filter((id) => !allIds.includes(id))
                        : [
                            ...prev,
                            ...allIds.filter((id) => !prev.includes(id)),
                          ]
                    );
                  }}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Business</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Booking</TableHead>
              <TableHead>Interest</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(lead.id)}
                    onChange={() => toggleSelect(lead.id)}
                  />
                </TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.business}</TableCell>
                <TableCell>{lead.location}</TableCell>
                <TableCell>{lead.booking}</TableCell>
                <TableCell>{lead.interest}</TableCell>
                <TableCell>
                  {new Date(lead.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DeleteConfirmation
                    onDelete={() => handleDelete(lead.id)}
                    title="Delete Lead"
                    description="Are you sure you want to delete this lead? This action cannot be undone."
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4">
          <PaginationWrapper
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      {/* Delete confirmation modal */}
      {confirmingDeleteAll && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full space-y-4">
            <h2 className="text-lg font-semibold">Delete Selected Leads</h2>
            <p>
              Are you sure you want to delete the selected leads? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setConfirmingDeleteAll(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteSelected}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
