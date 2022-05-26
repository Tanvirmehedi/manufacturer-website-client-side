import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import DisplayUser from "./DisplayUser";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://boiling-eyrie-02929.herokuapp.com/allusers", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto my-10">
        <table className="table table-zebra w-full ">
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
                <DisplayUser
                  refetch={refetch}
                  key={index}
                  index={index}
                  user={user}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
