import { useLoaderData, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import {
  FaCogs,
  FaDollarSign,
  FaImage,
  FaInfoCircle,
  FaListAlt,
  FaMapMarkerAlt,
  FaSave,
  FaTag,
  FaTools,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";

const CATEGORIES = [
  "Mobile Phone",
  "Laptop",
  "Desktop / PC",
  "Tablet",
  "Smartwatch",
  "TV / Monitor",
  "Printer",
  "Camera",
  "Home Appliance",
  "Other",
];

const inputClass = "input input-bordered w-full";

const UpdateService = () => {
  const updateService = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    serviceName,
    category,
    brand,
    serviceImage,
    description,
    providerImage,
    providerName,
    providerEmail,
    estimatedTime,
    warranty,
    area,
    price,
  } = updateService;

  const handleUpdateAService = (e) => {
    e.preventDefault();
    const form = e.target;

    const updateDetails = {
      serviceName: form.serviceName.value,
      category: form.category.value,
      brand: form.brand.value,
      price: form.price.value,
      estimatedTime: form.estimatedTime.value,
      warranty: form.warranty.value,
      area: form.area.value,
      description: form.description.value,
      serviceImage: form.serviceImage.value,
    };

    fetch(`${import.meta.env.VITE_API_URL}/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0 || data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Service Updated",
            text: "The service details have been saved.",
            confirmButtonColor: "#FF3811",
          }).then(() => navigate("/manageService"));
        } else {
          Swal.fire("Error", "Could not update the service.", "error");
        }
      })
      .catch(() =>
        Swal.fire("Error", "Could not update the service. Try again.", "error")
      );
  };

  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>Fix Gadget | Update Service</title>
      </Helmet>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Update Repair Service</h1>
          <p className="text-sm text-base-content/60">
            Edit the details customers see when booking this service.
          </p>
        </div>
        <Link to="/manageService" className="btn btn-ghost gap-2">
          <FaArrowLeft /> Back
        </Link>
      </div>

      <form onSubmit={handleUpdateAService}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 font-semibold">
                <FaTools className="text-[#FF3811]" /> Service Information
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="form-control sm:col-span-2">
                  <label className="label">
                    <span className="label-text">Service Title</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaTag className="text-base-content/50" />
                    <input
                      type="text"
                      name="serviceName"
                      placeholder="e.g. Phone Screen Replacement"
                      defaultValue={serviceName}
                      className="w-full bg-transparent"
                      required
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Device Category</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaCogs className="text-base-content/50" />
                    <select
                      name="category"
                      className="w-full bg-transparent"
                      defaultValue={category || "Mobile Phone"}
                    >
                      {CATEGORIES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Supported Brands
                      <span className="ml-1 text-xs text-base-content/50">
                        (optional)
                      </span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="e.g. Apple, Samsung"
                    defaultValue={brand}
                    className={inputClass}
                  />
                </div>

                <div className="form-control sm:col-span-2">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="What the repair includes, common issues fixed, parts used..."
                    defaultValue={description}
                    className="textarea textarea-bordered h-28 w-full"
                    required
                  ></textarea>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 font-semibold">
                <FaListAlt className="text-[#FF3811]" /> Pricing & Coverage
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price ($)</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaDollarSign className="text-base-content/50" />
                    <input
                      type="number"
                      name="price"
                      min="0"
                      placeholder="0"
                      defaultValue={price}
                      className="w-full bg-transparent"
                      required
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Estimated Time</span>
                  </label>
                  <input
                    type="text"
                    name="estimatedTime"
                    placeholder="e.g. 1-2 days"
                    defaultValue={estimatedTime}
                    className={inputClass}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Warranty</span>
                  </label>
                  <input
                    type="text"
                    name="warranty"
                    placeholder="e.g. 90 days"
                    defaultValue={warranty}
                    className={inputClass}
                  />
                </div>

                <div className="form-control sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Service Area</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <FaMapMarkerAlt className="text-base-content/50" />
                    <input
                      type="text"
                      name="area"
                      placeholder="e.g. Dhaka, on-site & in-store"
                      defaultValue={area}
                      className="w-full bg-transparent"
                      required
                    />
                  </label>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 font-semibold">
                <FaImage className="text-[#FF3811]" /> Service Image
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="url"
                    name="serviceImage"
                    placeholder="https://example.com/repair.jpg"
                    defaultValue={serviceImage}
                    className={inputClass}
                    required
                  />
                </div>
                <img
                  src={serviceImage}
                  alt={serviceName}
                  className="hidden h-24 w-24 rounded-xl border border-base-300 object-cover sm:block"
                />
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="mb-4 flex items-center gap-2 font-semibold">
                <FaUser className="text-[#FF3811]" /> Provider
              </h2>

              <div className="mb-4 flex items-center gap-3 rounded-xl bg-base-200/70 p-3">
                <img
                  src={providerImage}
                  alt={providerName}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-semibold">{providerName}</p>
                  <p className="truncate text-xs text-base-content/60">
                    {providerEmail}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-base-200/60 p-3 text-xs text-base-content/60">
                <p className="flex items-start gap-2">
                  <FaInfoCircle className="mt-0.5 shrink-0 text-[#FF3811]" />
                  Provider details are locked and cannot be changed from here.
                </p>
              </div>

              <button
                type="submit"
                className="btn mt-6 w-full border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]"
              >
                <FaSave /> Update Service
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
