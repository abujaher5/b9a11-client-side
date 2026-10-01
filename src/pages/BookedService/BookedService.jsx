import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getStatusMeta } from "../../utils/serviceStatus";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTools,
  FaUserCog,
} from "react-icons/fa";

const FALLBACK_IMAGE =
  "https://img.daisyui.com/images/stock/photo-1560393464-5c69a73c5770.jpg";

const BookedService = () => {
  const { user } = useContext(AuthContext);
  const loadedBookings = useLoaderData();

  const bookedServices = loadedBookings.filter(
    (booking) => booking.userEmail === user?.email
  );

  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>Fix Gadget | Booked Service</title>
      </Helmet>

      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Booked Services</h1>
          <p className="text-sm text-base-content/60">
            Track the repair status of your devices.
          </p>
        </div>
        <span className="badge badge-lg border-none bg-[#FF3811] text-white">
          {bookedServices.length} booking
          {bookedServices.length === 1 ? "" : "s"}
        </span>
      </div>

      {bookedServices.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 py-16 text-center">
          <FaTools className="mb-3 text-4xl text-base-content/30" />
          <p className="font-semibold">No bookings yet</p>
          <p className="mb-4 text-sm text-base-content/60">
            Book a repair and it will show up here.
          </p>
          <Link to="/allService">
            <button className="btn border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]">
              Browse Services
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {bookedServices.map((booking) => {
            const status = getStatusMeta(booking.serviceStatus);
            return (
              <div
                key={booking._id}
                className="flex gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition hover:shadow-lg"
              >
                <img
                  src={booking.serviceImage || FALLBACK_IMAGE}
                  alt={booking.serviceName}
                  className="h-28 w-28 shrink-0 rounded-xl object-cover"
                />

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="line-clamp-1 font-bold">
                      {booking.serviceName}
                    </h2>
                    <span
                      className={`badge shrink-0 border-none font-medium ${status.badge}`}
                    >
                      {status.label}
                    </span>
                  </div>

                  <div className="mt-2 space-y-1 text-sm text-base-content/70">
                    <p className="flex items-center gap-2">
                      <FaUserCog className="text-[#FF3811]" />
                      <span className="truncate">
                        {booking.providerName || "Expert Technician"}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#FF3811]" />
                      {booking.serviceTakingDate || "Date not selected"}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#FF3811]" />
                      <span className="truncate">
                        {booking.area || "Not specified"}
                      </span>
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-lg font-bold text-[#FF3811]">
                      ${booking.price}
                    </span>
                    <Link to={`/serviceDetails/${booking.serviceId}`}>
                      <button className="btn btn-sm btn-outline">
                        View Service
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookedService;
