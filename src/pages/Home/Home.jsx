import Banner from "./Banner/Banner";
import PopularService from "./PopularService/PopularService";

const Home = () => {
  return (
    <div>
      <h2 className="text-4xl text-violet-700 text-center">This is Home</h2>
      <Banner></Banner>
      <PopularService></PopularService>
    </div>
  );
};

export default Home;
