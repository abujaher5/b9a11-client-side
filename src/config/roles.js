export const ROLES = {
  CONSUMER: "consumer",
  PROVIDER: "provider",
  ADMIN: "admin",
};

export const ROLE_META = {
  [ROLES.CONSUMER]: {
    label: "Customer",
    badge: "badge-info",
    description: "Book repairs for your devices",
  },
  [ROLES.PROVIDER]: {
    label: "Service Provider",
    badge: "badge-success",
    description: "Offer and manage repair services",
  },
  [ROLES.ADMIN]: {
    label: "Admin",
    badge: "badge-error",
    description: "Full access to everything",
  },
};

// Comma separated list of admin emails. Set VITE_ADMIN_EMAILS in .env
// e.g. VITE_ADMIN_EMAILS="you@gmail.com,other@gmail.com"
export const ADMIN_EMAILS = (
  import.meta.env.VITE_ADMIN_EMAILS || "admin@fixedgadget.com"
)
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export const isAdminEmail = (email = "") =>
  ADMIN_EMAILS.includes(email.toLowerCase());
