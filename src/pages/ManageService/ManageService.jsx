import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus, FaTools } from "react-icons/fa";
import Swal from "sweetalert2";

const FALLBACK_IMAGE =
  "https://img.daisyui.com/images/stock/photo-1560393464-5c69a73c5770.jpg";

const ManageService = () => {
  const loadedServices = useLoaderData();

  const [services, setServices] = useState(loadedServices);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF3811",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/services/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted Successfully");
              setServices((prev) =>
                prev.filter((service) => service._id !== _id)
              );
            }
          });
      }
    });
  };

  return (
    <div className="w-full px-4 py-8">
      <Helmet>
        <title>Fix Gadget | Manage Service</title>
      </Helmet>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Manage Services</h1>
          <p className="text-sm text-base-content/60">
            Edit or remove the repair services you offer.
          </p>
        </div>
        <Link to="/addAService">
          <button className="btn border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]">
            <FaPlus /> Add New Service
          </button>
        </Link>
      </div>

      {services.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 py-16 text-center">
          <FaTools className="mb-3 text-4xl text-base-content/30" />
          <p className="font-semibold">No services yet</p>
          <p className="mb-4 text-sm text-base-content/60">
            Add your first repair service to start receiving bookings.
          </p>
          <Link to="/addAService">
            <button className="btn border-none bg-[#FF3811] text-white hover:bg-[#e02f0d]">
              <FaPlus /> Add New Service
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          <table className="table">
            <thead>
              <tr className="text-sm">
                <th>Service</th>
                <th>Provider</th>
                <th>Area</th>
                <th className="text-right">Price</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id} className="hover:bg-base-200/60">
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={service.serviceImage || FALLBACK_IMAGE}
                        alt={service.serviceName}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div className="min-w-0">
                        <p className="line-clamp-1 font-semibold">
                          {service.serviceName}
                        </p>
                        <p className="line-clamp-1 text-xs text-base-content/60">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-sm">{service.providerName}</p>
                  </td>
                  <td>
                    <span className="badge badge-ghost">
                      {service.area || "N/A"}
                    </span>
                  </td>
                  <td className="text-right font-bold text-[#FF3811]">
                    ${service.price}
                  </td>
                  <td>
                    <div className="flex justify-center gap-2">
                      <Link to={`/updateService/${service._id}`}>
                        <button
                          className="btn btn-sm btn-square btn-outline btn-info"
                          title="Edit service"
                        >
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="btn btn-sm btn-square btn-outline btn-error"
                        title="Delete service"
                      >
                        <MdDelete className="text-base" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageService;
