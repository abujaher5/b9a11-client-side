import { Link, useLoaderData } from "react-router-dom";
import AllServiceCard from "../serviceCard/AllServiceCard";

const AllService = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <div>
        {services.map((service) => (
          <AllServiceCard key={service.id} service={service}></AllServiceCard>
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
