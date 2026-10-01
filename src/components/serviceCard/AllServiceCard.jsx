import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStar,
  FaTools,
} from "react-icons/fa";

const FALLBACK_AVATAR =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

const AllServiceCard = ({ service }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    description,
    providerName,
    providerImage,
    area,
    price,
  } = service;

  return (
    <div className="card group mx-auto h-full w-full max-w-sm overflow-hidden border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <figure className="relative h-52 overflow-hidden">
        <img
          src={serviceImage}
          alt={serviceName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#FF3811] px-3 py-1 text-xs font-semibold text-white shadow">
          <FaTools className="text-[10px]" /> Gadget Repair
        </span>
        <span className="absolute bottom-3 right-3 rounded-lg bg-white/95 px-3 py-1 text-sm font-bold text-[#FF3811] shadow">
          ${price}
        </span>
      </figure>

      <div className="card-body gap-3 p-5">
        <h2 className="card-title line-clamp-1 text-lg font-bold">
          {serviceName}
        </h2>

        <p className="line-clamp-2 text-sm text-base-content/70">
          {description}
        </p>

        <div className="flex items-center gap-2 text-sm text-base-content/70">
          <FaMapMarkerAlt className="shrink-0 text-[#FF3811]" />
          <span className="line-clamp-1">
            {area || "On-site & in-store repair"}
          </span>
        </div>

        <div className="divider my-0"></div>

        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-[#FF3811]/30 ring-offset-1">
              <img src={providerImage || FALLBACK_AVATAR} alt={providerName} />
            </div>
          </div>
          <div className="leading-tight">
            <p className="flex items-center gap-1 text-sm font-semibold">
              {providerName || "Expert Technician"}
              <FaCheckCircle className="text-xs text-info" />
            </p>
            <p className="flex items-center gap-1 text-xs text-base-content/60">
              <FaStar className="text-amber-400" /> Verified repair service
            </p>
          </div>
        </div>

        <Link to={`/serviceDetails/${_id}`} className="mt-1">
          <button className="btn w-full border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllServiceCard;
