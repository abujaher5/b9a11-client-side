import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const UpdateService = () => {
  const updateService = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    _id,
    serviceName,
    serviceImage,
    description,
    providerImage,
    providerName,
    providerEmail,
    area,
    price,
  } = updateService;
  const handleUpdateAService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const area = form.area.value;
    const description = form.description.value;
    const serviceImage = form.serviceImage.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const providerImage = form.providerImage.value;

    const updateDetails = {
      serviceName,
      price,
      area,
      description,
      serviceImage,
      providerName,
      providerEmail,
      providerImage,
    };

    //send data

    fetch(`https://assignment-11-server-chi-azure.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Spot Update Successfully",
            icon: "success",
          });
          navigate("/manageService");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Fix Gadget | Update Service</title>
      </Helmet>
      <form onSubmit={handleUpdateAService}>
        <div className="md:grid grid-cols-2 gap-6 bg-gray-200 rounded-xl p-16 ">
          <div className="form-control">
            <label className="label">Service Name</label>
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              defaultValue={serviceName}
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Enter Price"
              defaultValue={price}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Service Area</label>
            <input
              type="text"
              name="area"
              placeholder="Service Area"
              defaultValue={area}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={description}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Service Image URL</label>
            <input
              type="text"
              name="serviceImage"
              placeholder="Enter Image URL"
              defaultValue={serviceImage}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Provider Name</label>
            <input
              type="text"
              name="providerName"
              placeholder="providerName"
              defaultValue={providerName}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Provider Email</label>
            <input
              type="text"
              name="providerEmail"
              placeholder="Enter Provider Email"
              defaultValue={providerEmail}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Provider Image</label>
            <input
              type="text"
              name="providerImage"
              placeholder="Enter Provider Image"
              defaultValue={providerImage}
              className="input input-bordered w-full "
            />
          </div>
          <div className="col-span-2">
            <input
              className="w-full bg-orange-600 mt-5 text-white rounded-lg p-2 "
              type="submit"
              value="Update Service"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
