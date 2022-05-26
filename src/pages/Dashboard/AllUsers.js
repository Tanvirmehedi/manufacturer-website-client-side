import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allusers")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);
  return (
    <div>
      <div class="overflow-x-auto my-10">
        <table class="table table-zebra w-full ">
          <thead>
            <tr>
              <th>SN</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user?.email}</td>
                  <td>
                    <Link
                      to={`/users/${user?._id}`}
                      className="btn btn-xs btn-secondary"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
