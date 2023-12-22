import { useEffect } from "react";

export const memberData = (data) => {
  console.log("this is from Fetch data", data);

  fetch("http://localhost:8080/user-api/member/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Member Register was Not ok");
      }
      return res.json();
    })
    .then((data) => {
      setLoginUser(data);
    })
    .catch((err) => {
      console.error("Error during fetch: ", err);
    });
};
