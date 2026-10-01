import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaShippingFast,
  FaStar,
  FaTools,
  FaWrench,
} from "react-icons/fa";

const FALLBACK_AVATAR =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

const highlights = [
  { icon: <FaWrench />, text: "Free diagnosis before repair" },
  { icon: <FaTools />, text: "Genuine / high-quality spare parts" },
  { icon: <FaShieldAlt />, text: "90-day repair warranty" },
  { icon: <FaShippingFast />, text: "Doorstep pickup & delivery" },
];

const ServiceCardDetails = () => {
  const singleService = useLoaderData();

  const {
    _id,
    serviceName,
    serviceImage,
    description,
    providerName,
    providerEmail,
    providerImage,
    area,
    price,
  } = singleService;

  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>Fix Gadget | {serviceName}</title>
      </Helmet>

      <div className="breadcrumbs mb-4 text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allService">Services</Link>
          </li>
          <li className="text-base-content/60">{serviceName}</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <figure className="overflow-hidden rounded-2xl border border-base-300 shadow-md">
            <img
              src={serviceImage}
              alt={serviceName}
              className="h-80 w-full object-cover"
            />
          </figure>

          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FF3811] px-3 py-1 text-xs font-semibold text-white">
              <FaTools className="text-[10px]" /> Gadget Repair
            </span>

            <h1 className="mt-3 text-3xl font-bold">{serviceName}</h1>

            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-base-content/70">
              <span className="flex items-center gap-1">
                <FaStar className="text-amber-400" /> Verified service
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-[#FF3811]" />
                {area || "On-site & in-store repair"}
              </span>
            </div>

            <div className="divider"></div>

            <h3 className="mb-2 font-semibold">Service Description</h3>
            <p className="leading-relaxed text-base-content/75">{description}</p>

            <h3 className="mb-3 mt-6 font-semibold">What&apos;s included</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl bg-base-200/70 px-4 py-3 text-sm"
                >
                  <span className="text-[#FF3811]">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-6 lg:sticky lg:top-6">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-md">
              <p className="text-sm text-base-content/60">Starting from</p>
              <p className="text-3xl font-extrabold text-[#FF3811]">${price}</p>
              <p className="mt-1 text-xs text-base-content/60">
                Final price may vary after inspection
              </p>

              <Link to={`/bookService/${_id}`}>
                <button className="btn mt-4 w-full border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]">
                  Book This Service
                </button>
              </Link>
              <Link to="/allService">
                <button className="btn btn-outline mt-2 w-full">
                  Browse More Services
                </button>
              </Link>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
              <p className="mb-3 text-xs font-semibold tracking-wide text-base-content/60">
                SERVICE PROVIDER
              </p>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-14 rounded-full ring ring-[#FF3811]/30 ring-offset-2">
                    <img
                      src={providerImage || FALLBACK_AVATAR}
                      alt={providerName}
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="flex items-center gap-1 font-semibold">
                    {providerName || "Expert Technician"}
                    <FaCheckCircle className="text-info" />
                  </p>
                  <p className="truncate text-xs text-base-content/60">
                    {providerEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;
