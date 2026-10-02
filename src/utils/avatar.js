export const getInitials = (name = "") => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "U";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
};

export const getAvatarUrl = (user) => {
  if (user?.photoURL) return user.photoURL;

  const name = (user?.displayName || user?.email || "User").toString();
  const initials = getInitials(name);

  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    initials
  )}&background=FF3811&color=fff&bold=true&length=2`;
};
