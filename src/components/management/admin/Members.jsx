import React from "react";

export default function Members() {
  const data = [
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
  ];

  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Deliver Time</th>
              <th>Rider Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((memebersInfo) => {
              return (
                <tr>
                  <td>{memebersInfo.Name}</td>
                  <td>{memebersInfo.Email}</td>
                  <td>{memebersInfo.Address}</td>
                  <td>{memebersInfo.DeliverTime}</td>
                  <td>{memebersInfo.Rider}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
