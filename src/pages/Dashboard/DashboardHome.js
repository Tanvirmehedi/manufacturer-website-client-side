import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
const DashboardHome = () => {
  const { data: images, isLoading } = useQuery("images", () =>
    fetch("https://boiling-eyrie-02929.herokuapp.com/products").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="carousel rounded-box mx-6 my-5">
        {images.map((image) => {
          return (
            <div className="carousel-item" key={image._id}>
              <img src={image.imageUrl} alt={image.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardHome;
