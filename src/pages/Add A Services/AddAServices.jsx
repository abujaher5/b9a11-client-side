import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { getAvatarUrl } from "../../utils/avatar";
import Avatar from "../../components/Avatar/Avatar";
import {
  FaCogs,
  FaDollarSign,
  FaImage,
  FaInfoCircle,
  FaListAlt,
  FaMapMarkerAlt,
  FaPlus,
  FaTag,
  FaTools,
  FaUser,
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

const AddAServices = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddAService = (e) => {
    e.preventDefault();
    const form = e.target;

    const formDetails = {
      serviceName: form.serviceName.value,
      category: form.category.value,
      brand: form.brand.value,
      price: form.price.value,
      estimatedTime: form.estimatedTime.value,
      warranty: form.warranty.value,
      area: form.area.value,
      description: form.description.value,
      serviceImage: form.serviceImage.value,
      providerName: form.providerName.value || user?.displayName,
      providerEmail: user?.email,
      providerImage: getAvatarUrl(user),
      createdAt: new Date(),
    };

    fetch(`${import.meta.env.VITE_API_URL}/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Service Added",
            text: "Your repair service is now live.",
            confirmButtonColor: "#FF3811",
          }).then(() => navigate("/allService"));
        }
      })
      .catch(() =>
        Swal.fire("Error", "Could not add the service. Try again.", "error")
      );
  };

  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>Fix Gadget | Add A Service</title>
      </Helmet>

      <div className="mb-6">
        <h1 className="text-2xl font-bold">Add A Repair Service</h1>
        <p className="text-sm text-base-content/60">
          Describe the repairs you offer so customers can find and book you.
        </p>
      </div>

      <form onSubmit={handleAddAService}>
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
                      defaultValue="Mobile Phone"
                    >
                      {CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="url"
                  name="serviceImage"
                  placeholder="https://example.com/repair.jpg"
                  className={inputClass}
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-base-content/50">
                    Paste a hosted image link for now.
                  </span>
                </label>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="mb-4 flex items-center gap-2 font-semibold">
                <FaUser className="text-[#FF3811]" /> Provider
              </h2>

              <div className="mb-4 flex items-center gap-3 rounded-xl bg-base-200/70 p-3">
                <Avatar user={user} sizeClass="h-12 w-12" textClass="text-lg" />
                <div className="min-w-0">
                  <p className="truncate font-semibold">{user?.displayName}</p>
                  <p className="truncate text-xs text-base-content/60">
                    {user?.email}
                  </p>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Display Name</span>
                </label>
                <input
                  type="text"
                  name="providerName"
                  defaultValue={user?.displayName}
                  className={inputClass}
                />
              </div>

              <div className="mt-4 rounded-xl bg-base-200/60 p-3 text-xs text-base-content/60">
                <p className="flex items-start gap-2">
                  <FaInfoCircle className="mt-0.5 shrink-0 text-[#FF3811]" />
                  You can edit pricing and details later from Manage Service.
                </p>
              </div>

              <button
                type="submit"
                className="btn mt-6 w-full border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]"
              >
                <FaPlus /> Publish Service
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAServices;
