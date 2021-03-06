import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://boiling-eyrie-02929.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.upsertedCount > 0) {
            toast.success("Data Added on DataBase");
            const accessToken = data.token;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
          } else {
            toast("Already an user");
            const accessToken = data.token;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
          }
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
