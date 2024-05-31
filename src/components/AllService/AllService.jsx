import { Link } from "react-router-dom";

const AllService = () => {
  return (
    <div>
      <div className="card card-compact mx-auto w-3/4 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-1/2 h-1/3"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ac Servicing</h2>
          <p>
            If a dog chews shoes whose shoes does he choose?If a dog chews shoes
            whose shoes does he choose?If a dog chews shoes whose shoes does he
            choose?If a dog chews shoes whose shoes does he choose?If a dog
            chews shoes whose shoes does he choose?
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p>Service Provider Name</p>
                <p>Service price $ 100</p>
                <p>Service Area </p>
              </div>
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>

            <button className="btn w-full btn-primary">View Details</button>
          </div>
        </div>
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
