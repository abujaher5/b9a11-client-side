import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

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
    serviceTakingDate,
  } = service;
  console.log(service);

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
      serviceTakingDate,
      serviceStatus: "pending",
    };
    console.log(bookingDetails);

    fetch(
      "https://assignment-11-server-m3w8ynb3e-abu-jahers-projects.vercel.app/bookings",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Booking Successfully");
        }

        navigate("/bookedService");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Fix Gadget | Book Service</title>
      </Helmet>
      <form onSubmit={handleBookService}>
        <div className="md:grid grid-cols-2 gap-6 bg-gray-200 rounded-xl p-16 ">
          <div className="form-control">
            <label className="label">Service Name</label>
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              defaultValue={serviceName}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">Service Id</label>
            <input
              type="text"
              name="serviceId"
              defaultValue={_id}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>

          <div className="form-control">
            <label className="label"> Service Image</label>
            <input
              type="text"
              name="serviceImage"
              defaultValue={serviceImage}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>

          <div className="form-control">
            <label className="label"> Service Provider Email</label>
            <input
              type="email"
              name="providerEmail"
              defaultValue={providerEmail}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>
          <div className="form-control">
            <label className="label"> Service Provider Name</label>
            <input
              type="text"
              name="providerName"
              defaultValue={providerName}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">User Email</label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user?.email}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">User Name</label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">Service Taking Date</label>
            <div className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">Service Area</label>
            <input
              type="text"
              name="area"
              defaultValue={area}
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Enter Price"
              defaultValue={price}
              disabled
              className=" px-4 py-2 rounded-md bg-white text-gray-700 input-bordered  w-full"
            />
          </div>

          <div className="form-control col-span-2 flex justify-center items-center">
            {/* <Link
            to="/bookService"
            
          >
            <input type="submit" value=" Purchase Service" />
          </Link> */}
            <input
              type="submit"
              value=" Purchase Service"
              className=" mx-auto  bg-green-300 font-semibold text-black mt-5 rounded-lg p-2 "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookService;
