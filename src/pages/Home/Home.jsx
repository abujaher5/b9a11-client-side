import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import PopularService from "./PopularService/PopularService";

const Home = () => {
  const popularServiceData = useLoaderData();
  // console.log(popularServiceData);
  return (
    <div>
      <Banner></Banner>
      <div>
        <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {popularServiceData.map((pService) => (
            <PopularService
              key={pService._id}
              pService={pService}
            ></PopularService>
          ))}
        </div>
        <div className="text-center my-2">
          <Link to="/allService">
            <button className="btn btn-outline">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
