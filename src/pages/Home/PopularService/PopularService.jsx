import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const PopularService = ({ pService }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    description,
    // providerImage,
    providerName,
    // providerEmail,
    // area,
    price,
    // serviceTakingDate,
    // currentUserName,
    // currentUserEmail,
    // specialInstruction,
  } = pService;
  // console.log(pService);
  return (
    <div className="gird grid-cols-3">
      <Helmet>
        <title>Fix Gadget | Popular Service</title>
      </Helmet>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={serviceImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p>Service Provider:{providerName}</p>
                <p>Service price ${price}</p>
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
    </div>
  );
};

export default PopularService;
