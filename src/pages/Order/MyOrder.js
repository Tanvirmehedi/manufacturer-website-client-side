import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);

  const { data, isLoading } = useQuery("product", () =>
    fetch(`http://localhost:5000/purchase?userEmail=${user.email}`).then(
      (res) => res.json()
    )
  );
  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="overflow-x-auto mt-4">
        <table class="table table-zebra w-full">
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
                <tr>
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
