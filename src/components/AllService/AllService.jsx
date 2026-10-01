import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import AllServiceCard from "../serviceCard/AllServiceCard";

const AllService = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Helmet>
        <title>Fix Gadget | All Service</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <AllServiceCard key={service._id} service={service}></AllServiceCard>
        ))}
      </div>

      <div className="text-center my-2">
        <Link to="/">
          <button className="btn btn-outline">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default AllService;
