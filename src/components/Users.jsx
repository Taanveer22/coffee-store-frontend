import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  // console.log(loadedUsers);
  const [listUsers, setListUsers] = useState(loadedUsers);
  // console.log(listUsers.length);

  // ======================================================
  //   🧠 Final Flow (Now Perfect)
  // User clicks delete
  // ↓
  // SweetAlert confirm
  // ↓
  // DELETE request sent
  // ↓
  // Backend deletes from MongoDB
  // ↓
  // deletedCount > 0
  // ↓
  // Show success
  // ↓
  // Update UI
  // Now after reload → user will NOT come back 🎉
  // ======================================================

  const handleDeleteUser = (id) => {
    // console.log(id);
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
        fetch(`http://localhost:5000/deleteUsers/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
              // after confirm clicked
              const remainingListUsers = listUsers.filter(
                (element) => element._id !== id,
              );
              setListUsers(remainingListUsers);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Time </th>
              <th>Last Signin Time </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {listUsers.map((element, index) => (
              <tr key={element._id}>
                <th>{index + 1}</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.creationTime}</td>
                <td>{element.lastSignInTime}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(element._id)}
                    className="btn btn-xs btn-error"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
