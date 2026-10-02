import { useEffect, useState } from "react";
import { getInitials } from "../../utils/avatar";

const Avatar = ({ user, sizeClass = "h-10 w-10", textClass = "text-sm" }) => {
  const [imgError, setImgError] = useState(false);

  const photoURL = user?.photoURL;
  const name = user?.displayName || user?.email || "User";
  const initials = getInitials(name);

  useEffect(() => {
    setImgError(false);
  }, [photoURL]);

  const showImage = Boolean(photoURL) && !imgError;

  return (
    <div
      className={`${sizeClass} shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary ring ring-primary ring-offset-2 ring-offset-base-100`}
      title={name}
    >
      {showImage ? (
        <img
          src={photoURL}
          alt={name}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          className={`${textClass} grid h-full w-full select-none place-items-center font-bold uppercase text-primary-content`}
        >
          {initials}
        </span>
      )}
    </div>
  );
};

export default Avatar;
