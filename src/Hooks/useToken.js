import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
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
          } else {
            toast.error("Already an user");
          }
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
