import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("product", () =>
    fetch(`http://localhost:5000/purchase?userEmail=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div className="px-8">
      <div className="overflow-x-auto mt-4">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Email</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{order?.userName}</td>
                  <td>{order?.productName}</td>
                  <td>${order?.price}</td>
                  <td>{order?.userEmail}</td>
                  <td>
                    <img src={order?.image} className="w-20" alt="" />
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

export default MyOrder;
