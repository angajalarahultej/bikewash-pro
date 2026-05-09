"use client";

type StatusType = "pending" | "assigned" | "in-progress" | "completed" | "cancelled" | "active" | "inactive";

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
}

const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  const styles: Record<StatusType, string> = {
    pending: "bg-warning/10 text-warning border-warning/20",
    assigned: "bg-accent/10 text-blue-700 border-accent/20",
    "in-progress": "bg-accent/10 text-blue-700 border-accent/20 animate-pulse",
    completed: "bg-accent/10 text-blue-700 border-accent/20",
    cancelled: "bg-error/10 text-error border-error/20",
    active: "bg-success/10 text-success border-success/20",
    inactive: "bg-surface-muted text-muted border-border",
  };

  const defaultLabels: Record<StatusType, string> = {
    pending: "Pending",
    assigned: "Assigned",
    "in-progress": "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
    active: "Active",
    inactive: "Inactive",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[status]}`}>
      {label || defaultLabels[status]}
    </span>
  );
};

export default StatusBadge;
