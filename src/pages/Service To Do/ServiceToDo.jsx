import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { STATUS_OPTIONS, getStatusMeta } from "../../utils/serviceStatus";
import {
  FaBoxOpen,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

const tabs = [{ value: "all", label: "All" }, ...STATUS_OPTIONS];

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`http://localhost:5000/bookings?providerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(Array.isArray(data) ? data : []))
      .catch(() => setBookings([]))
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleStatusChange = (id, serviceStatus) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ serviceStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.matchedCount > 0) {
          setBookings((prev) =>
            prev.map((booking) =>
              booking._id === id ? { ...booking, serviceStatus } : booking
            )
          );
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: `Marked as ${getStatusMeta(serviceStatus).label}`,
            showConfirmButton: false,
            timer: 1800,
          });
        }
      })
      .catch(() =>
        Swal.fire("Error", "Could not update the booking status.", "error")
      );
  };

  const countFor = (value) =>
    value === "all"
      ? bookings.length
      : bookings.filter((booking) => booking.serviceStatus === value).length;

  const visibleBookings =
    filter === "all"
      ? bookings
      : bookings.filter((booking) => booking.serviceStatus === filter);

  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>Fix Gadget | Service To Do</title>
      </Helmet>

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Service Requests</h1>
        <p className="text-sm text-base-content/60">
          Manage incoming repair bookings and update their status.
        </p>
      </div>

      <div role="tablist" className="tabs tabs-boxed mb-6 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            onClick={() => setFilter(tab.value)}
            className={`tab ${filter === tab.value ? "tab-active" : ""}`}
          >
            {tab.label}
            <span className="ml-1.5 rounded-full bg-base-300 px-2 py-0.5 text-xs">
              {countFor(tab.value)}
            </span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <span className="loading loading-spinner loading-lg text-[#FF3811]"></span>
        </div>
      ) : visibleBookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 py-16 text-center">
          <FaBoxOpen className="mb-3 text-4xl text-base-content/30" />
          <p className="font-semibold">No service requests here</p>
          <p className="text-sm text-base-content/60">
            New bookings for your services will appear in this list.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {visibleBookings.map((booking) => {
            const status = getStatusMeta(booking.serviceStatus);
            return (
              <div
                key={booking._id}
                className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={booking.serviceImage}
                      alt={booking.serviceName}
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <div>
                      <h2 className="font-bold">{booking.serviceName}</h2>
                      <span
                        className={`badge badge-sm mt-1 border-none ${status.badge}`}
                      >
                        {status.label}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-base-content/60">Price</p>
                    <p className="text-xl font-bold text-[#FF3811]">
                      ${booking.price}
                    </p>
                  </div>
                </div>

                <div className="divider my-3"></div>

                <div className="grid grid-cols-1 gap-3 text-sm text-base-content/70 sm:grid-cols-2 lg:grid-cols-4">
                  <p className="flex items-center gap-2">
                    <FaUser className="text-[#FF3811]" />
                    <span className="truncate">
                      {booking.userName || "Customer"}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-[#FF3811]" />
                    <span className="truncate">{booking.userEmail}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FF3811]" />
                    {booking.serviceTakingDate || "Not selected"}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#FF3811]" />
                    <span className="truncate">
                      {booking.area || "Not specified"}
                    </span>
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <Link to={`/serviceDetails/${booking.serviceId}`}>
                    <button className="btn btn-sm btn-outline">
                      View Service
                    </button>
                  </Link>

                  <label className="flex items-center gap-2">
                    <span className="text-sm text-base-content/60">
                      Update status
                    </span>
                    <select
                      className="select select-bordered select-sm w-44"
                      value={booking.serviceStatus || "pending"}
                      onChange={(e) =>
                        handleStatusChange(booking._id, e.target.value)
                      }
                    >
                      {STATUS_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;
