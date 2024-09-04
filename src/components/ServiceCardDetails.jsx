// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const ServiceCardDetails = () => {
  const singleService = useLoaderData();

  const {
    _id,
    serviceName,
    serviceImage,
    description,

    providerName,

    area,
    price,
  } = singleService;

  return (
    <div className="card card-compact mx-auto w-3/4 bg-base-100 shadow-xl">
      <Helmet>
        <title>Fix Gadget | Service Details</title>
      </Helmet>
      <figure>
        <img className="w-1/2 h-1/3" src={serviceImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p>Service Provider : {providerName}</p>
              <p>Service price : ${price}</p>
              <p>Service Area : {area} </p>
            </div>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>

          <Link to={`/bookService/${_id}`}>
            <button className="btn w-full btn-primary">Book Now</button>
          </Link>

          {/* <Link to={"/bookService"}>
            <button className="btn w-full btn-primary">Book Now</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDetails;
