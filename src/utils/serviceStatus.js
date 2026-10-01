export const STATUS_OPTIONS = [
  {
    value: "pending",
    label: "Pending",
    badge: "bg-warning text-warning-content",
  },
  {
    value: "in-progress",
    label: "In Progress",
    badge: "bg-info text-info-content",
  },
  {
    value: "completed",
    label: "Completed",
    badge: "bg-success text-success-content",
  },
  {
    value: "cancelled",
    label: "Cancelled",
    badge: "bg-error text-error-content",
  },
];

export const getStatusMeta = (status) =>
  STATUS_OPTIONS.find((option) => option.value === status) || {
    value: status,
    label: status || "Unknown",
    badge: "bg-base-300 text-base-content",
  };
