import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  const [listUsers, setListUsers] = useState(loadedUsers);
  console.log(listUsers.length);
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
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {listUsers.map((element) => (
              <tr key={element._id}>
                <th>1</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.creationTime}</td>
                <td>
                  <button className="btn btn-xs">E</button>{" "}
                  <button className="btn btn-xs">D</button>
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
