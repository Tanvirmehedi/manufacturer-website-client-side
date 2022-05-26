import React from "react";
import { toast } from "react-toastify";

const DisplayUser = ({ index, user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://boiling-eyrie-02929.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast("Successfully make an admin");
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        <button className="btn btn-xs btn-secondary mx-5">Remove User</button>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-xs btn-progress-primary"
          >
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default DisplayUser;
