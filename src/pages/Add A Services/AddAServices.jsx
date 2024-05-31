const AddAServices = () => {
  const handleAddAService = (e) => {
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

    const formDetails = {
      serviceName,
      price,
      area,
      description,
      serviceImage,
      providerName,
      providerEmail,
      providerImage,
    };
    console.log(formDetails);
  };
  return (
    <div>
      <form onSubmit={handleAddAService}>
        <div className="md:grid grid-cols-2 gap-6 bg-gray-200 rounded-xl p-16 ">
          <div className="form-control">
            <label className="label">Service Name</label>
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              className="input input-bordered "
            />
          </div>
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Enter Price"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Service Area</label>
            <input
              type="text"
              name="area"
              placeholder="Service Area"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label">Service Image URL</label>
            <input
              type="text"
              name="serviceImage"
              placeholder="Enter Image URL"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Provider Name</label>
            <input
              type="text"
              name="providerName"
              placeholder="Enter Amount"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Provider Email</label>
            <input
              type="text"
              name="providerEmail"
              placeholder="Enter Provider Email"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Provider Image</label>
            <input
              type="text"
              name="providerImage"
              placeholder="Enter Provider Image"
              className="input input-bordered w-full "
            />
          </div>
          <div className="col-span-2">
            <input
              className="w-full bg-orange-300 mt-5 rounded-lg p-2 "
              type="submit"
              value="Add Service"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAServices;
