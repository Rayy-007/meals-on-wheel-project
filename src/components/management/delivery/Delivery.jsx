import "../delivery/delivery.css";

const Delivery = () => {
  const data = [
    {
      deliID: "001",
      memberName: "Kyaw Kyaw",
      memberAdresss: "87*88 100Street Mandalay",
      deliveryTime: "10:00AM",
      riderName: "Oo Ko",
      riderID: "007",
    },
    {
      deliID: "001",
      memberName: "Kyaw Kyaw",
      memberAdresss: "87*88 100Street Mandalay",
      deliveryTime: "10:00AM",
      riderName: "Oo Ko",
      riderID: "007",
    },
    {
      deliID: "001",
      memberName: "Kyaw Kyaw",
      memberAdresss: "87*88 100Street Mandalay",
      deliveryTime: "10:00AM",
      riderName: "Oo Ko",
      riderID: "007",
    },
    {
      deliID: "001",
      memberName: "Kyaw Kyaw",
      memberAdresss: "87*88 100Street Mandalay",
      deliveryTime: "10:00AM",
      riderName: "Oo Ko",
      riderID: "007",
    },
    {
      deliID: "001",
      memberName: "Kyaw Kyaw",
      memberAdresss: "87*88 100Street Mandalay",
      deliveryTime: "10:00AM",
      riderName: "Oo Ko",
      riderID: "007",
    },
    {
      deliID: "001",
      memberName: "Kyaw Kyaw",
      memberAdresss: "87*88 100Street Mandalay",
      deliveryTime: "10:00AM",
      riderName: "Oo Ko",
      riderID: "007",
    },
  ];
  return (
    <div className="container">
      <div className="">
        <h3 style={{ color: "#f8590af6" }}>
          Food Order & Delivery Management For partner
        </h3>
        <br />

        <table>
          <thead>
            <tr>
              <th>Member ID</th>
              <th>Member Name</th>
              <th>Member Address</th>
              <th>Delivery Time</th>
              <th>Rider Name</th>
              <th>Rider ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="memberID"
                  placeholder="Member ID.."
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="memberName"
                  placeholder="Member name.."
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Member Address.."
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="deliveryTime"
                  placeholder="Delivery Time.."
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="riderName"
                  placeholder="Rider Name.."
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="riderID"
                  placeholder="Rider ID.."
                  required
                />
              </td>
              <td>
                <input
                  type="submit"
                  className="btn green btn-custom"
                  value="Submit"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="">
        <h3 style={{ color: "#f8590af6" }}>Scheduled lists to Delivery</h3>
        <br />

        <table className="table-schedule">
          <tr>
            <th>Delivery ID</th>
            <th>Member Name</th>
            <th>Member Address</th>
            <th>Delivery Time</th>
            <th>Rider Name</th>
            <th>Rider ID</th>
            <th></th>
            <th></th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.deliID}</td>
                <td>{val.memberName}</td>
                <td>{val.memberAdresss}</td>
                <td>{val.deliveryTime}</td>
                <td>{val.riderName}</td>
                <td>{val.riderID}</td>
                <td>
                  <input
                    type="submit"
                    className="btn primary btn-custom"
                    value="Edit"
                  />
                </td>
                <td>
                  <input
                    type="submit"
                    className="btn red btn-custom"
                    value="Delete"
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Delivery;
