const ManageService = () => {
  const handleDelete = (_id) => {
    console.log(_id);
  };

  const handleUpdateService = (_id) => {
    console.log(_id);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Provider Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
              <button onClick={handleDelete} className="btn btn-outline">
                Delete Service
              </button>
            </td>
            <td>
              <button onClick={handleUpdateService} className="btn btn-outline">
                Update Service
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;
