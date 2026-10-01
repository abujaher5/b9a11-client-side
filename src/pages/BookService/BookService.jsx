import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

const FALLBACK_AVATAR =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

const BookService = () => {
  const [startDate, setStartDate] = useState(new Date());
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    serviceName,
    price,
    area,
    description,
    serviceImage,
    providerName,
    providerEmail,
    providerImage,
  } = service;

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceId = form.serviceId.value;
    const serviceImage = form.serviceImage.value;
    const providerEmail = form.providerEmail.value;
    const providerName = form.providerName.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const price = form.price.value;
    const area = form.area.value;

    const bookingDetails = {
      serviceName,
      price,
      area,
      description,
      serviceImage,
      providerName,
      providerEmail,
      providerImage,
      serviceId,
      userEmail,
      userName,
      serviceTakingDate: startDate.toLocaleDateString("en-US"),
      serviceStatus: "pending",
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booking Successfully");
        }
        navigate("/bookedService");
      });
  };

  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>Fix Gadget | Book Service</title>
      </Helmet>

      <h1 className="text-2xl font-bold">Book Your Repair</h1>
      <p className="mb-6 text-sm text-base-content/60">
        Confirm the details below and choose a convenient service date.
      </p>

      <form
        onSubmit={handleBookService}
        className="grid grid-cols-1 gap-8 lg:grid-cols-5"
      >
        <input type="hidden" name="serviceName" defaultValue={serviceName} />
        <input type="hidden" name="serviceId" defaultValue={_id} />
        <input type="hidden" name="serviceImage" defaultValue={serviceImage} />
        <input type="hidden" name="providerName" defaultValue={providerName} />
        <input type="hidden" name="providerEmail" defaultValue={providerEmail} />
        <input type="hidden" name="price" defaultValue={price} />

        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm lg:sticky lg:top-6">
            <img
              src={serviceImage}
              alt={serviceName}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-bold">{serviceName}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-base-content/70">
                {description}
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm text-base-content/70">
                <FaMapMarkerAlt className="text-[#FF3811]" />
                {area || "On-site & in-store repair"}
              </div>

              <div className="divider my-3"></div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-base-content/60">
                  Service charge
                </span>
                <span className="text-xl font-bold text-[#FF3811]">
                  ${price}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl bg-base-200/70 p-3">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-[#FF3811]/30 ring-offset-1">
                    <img
                      src={providerImage || FALLBACK_AVATAR}
                      alt={providerName}
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="flex items-center gap-1 text-sm font-semibold">
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

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <h2 className="mb-4 font-semibold">Booking details</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Area</span>
                </label>
                <input
                  type="text"
                  name="area"
                  defaultValue={area}
                  placeholder="Where should we pick up?"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Preferred Service Date</span>
                </label>
                <label className="input input-bordered flex w-full items-center gap-2">
                  <FaCalendarAlt className="text-base-content/50" />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    dateFormat="dd MMM yyyy"
                    className="w-full bg-transparent outline-none"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Booked By</span>
                </label>
                <label className="input input-bordered flex w-full items-center gap-2">
                  <FaUser className="text-base-content/50" />
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    disabled
                    className="w-full bg-transparent"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  disabled
                  className="input input-bordered w-full disabled:opacity-70"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-base-200/70 p-4">
              <span className="text-sm text-base-content/70">
                Total payable after inspection
              </span>
              <span className="text-xl font-bold text-[#FF3811]">${price}</span>
            </div>

            <button
              type="submit"
              className="btn mt-6 w-full border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookService;
