import { useLoaderData } from "react-router-dom";

const BookedService = () => {
  const bookedServices = useLoaderData();
  return (
    <div className="container p-2 mx-auto  sm:p-4 text-black">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="border border-gray-500">
            <tr className="text-left">
              <th className="p-3">Service Id</th>
              <th className="p-3">Service Name</th>
              <th className="p-3">Service Taking Date</th>
              <th className="p-3">Provider Name</th>
              <th className="p-3 text-right">Price</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookedServices.map((bService) => (
              <tr
                key={bService._id}
                className="border border-opacity-75 border-gray-700 "
              >
                <td className="p-3">
                  <p>{bService._id}</p>
                </td>
                <td className="p-3">
                  <p>{bService.serviceName}</p>
                </td>
                <td className="p-3">
                  <p>{bService.ServiceTakingDate}</p>
                </td>
                <td className="p-3">
                  <p>{bService.providerName}</p>
                </td>
                <td className="p-3 text-right">
                  <p>${bService.price}</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <span>{bService.serviceStatus}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedService;
