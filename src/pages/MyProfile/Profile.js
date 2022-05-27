import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import DisplayProfile from "./DisplayProfile";

const Profile = () => {
  const [user] = useAuthState(auth);

  const { data: userInfo, isLoading } = useQuery("userInfo", () =>
    fetch(`https://boiling-eyrie-02929.herokuapp.com/info/${user?.email}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DisplayProfile user={userInfo[0]} />
    </div>
  );
};

export default Profile;
