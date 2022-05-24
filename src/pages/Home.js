import React from "react";
import Banner from "../components/Banner";
import Branding from "../components/Branding";
import HomeProducts from "../components/HomeProducts";
import Summary from "../components/Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 container my-10 mx-auto gap-10">
          <Branding
            image="https://wpbingosite.com/wordpress/vitic/wp-content/webp-express/webp-images/uploads/2020/10/banner-11.jpg.webp"
            title="HAND SAW"
            desc="Get 20% off your 
                    order only $10.00"
            logo="https://businesscity.com.bd/1220-home_default/hand-saw-16-inch.jpg"
          />
          <Branding
            title="Paintbrush"
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-paintbrushes-1636127275.jpg"
            desc="Get 50% Discount 
          On Power Tool Kits"
            logo="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODEwdU1uUHhTV0wuX0FDX1NMMTUwMF8uanBn.jpg"
          />
        </div>
        <div className="text-center my-10">
          <h2 className="text-2xl text-accent font-semibold">
            STORE BY CATEGORY
          </h2>
          <p className="text-sm text-slate-400 mt-3 ">
            You contribute over half of your life operating. Let us help you
            find the right fit for you or your corporation.
          </p>
        </div>
      </div>
      <div>
        <HomeProducts />
      </div>
      <Summary />
    </div>
  );
};

export default Home;
