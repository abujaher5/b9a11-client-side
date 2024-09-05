import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageService = () => {
  const loadedServices = useLoaderData();

  const [services, setServices] = useState(loadedServices);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-chi-azure.vercel.app/services/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted Successfully");

              const remainServices = services.filter(
                (service) => service._id !== _id
              );
              setServices(remainServices);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Fix Gadget | Manage Service</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Provider Name</th>
            <th>Service Price</th>
            <th> Manage Service</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {services.map((s) => (
            <tr key={s._id} className="bg-base-200">
              <td>{s.serviceName}</td>
              <td>{s.providerName}</td>
              <td>$ {s.price}</td>
              <td>
                <button onClick={() => handleDelete(s._id)} className="btn ">
                  <MdDelete className="text-2xl"></MdDelete>
                </button>
                <Link to={`/updateService/${s._id}`}>
                  <button className="btn">
                    <FaEdit className="text-2xl"></FaEdit>
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;
