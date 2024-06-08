import { Link } from "react-router-dom";

const AllServiceCard = ({ service }) => {
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
    serviceTakingDate,
    currentUserName,
    currentUserEmail,
    specialInstruction,
  } = service;

  console.log(_id);
  return (
    <div className="card card-compact mx-auto w-3/4 bg-base-100 shadow-xl">
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
              <div className="w-24 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>

          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn w-full btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
