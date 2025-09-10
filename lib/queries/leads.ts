import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { LeadType } from "../types/leads";




// ✅ Fetch all leads
const fetchLeads = async (): Promise<{ leads: LeadType[] }> => {
  const response = await fetch("/api/leads");
  if (!response.ok) throw new Error("Failed to fetch leads");
  return response.json();
};

const createLead = async (
  data: Omit<LeadType, "id" | "createdAt">
): Promise<LeadType> => {
  // 1. Save to Supabase (your existing API)
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  
  if (!response.ok) throw new Error("Failed to create lead in Supabase");

  const savedLead = await response.json();

  // 2. Also send to Zoho Bigin
  try {
    await fetch("/api/zoho/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Zoho submission failed", error);
    // Optional: log this somewhere or notify admin
  }

  return savedLead;
};
// ✅ Delete lead by ID
const deleteLead = async (id: string): Promise<void> => {
  const response = await fetch(`/api/leads?id=${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete lead");
};

// ✅ React Query hooks
export function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });
}

export function useCreateLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}

export function useDeleteLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
