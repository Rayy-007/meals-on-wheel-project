import "./rider.css";

const Rider = () => {
  // Example of a data array that
// you might receive from an API
const data = [
  { deliID: "001", memberName: "Kyaw Kyaw", memberAdresss: "87*88 100Street Mandalay", deliveryTime: "10:00AM", riderName: "Oo Ko", riderID: "007"  },
  { deliID: "001", memberName: "Kyaw Kyaw", memberAdresss: "87*88 100Street Mandalay", deliveryTime: "10:00AM", riderName: "Oo Ko", riderID: "007"  },
  { deliID: "001", memberName: "Kyaw Kyaw", memberAdresss: "87*88 100Street Mandalay", deliveryTime: "10:00AM", riderName: "Oo Ko", riderID: "007"  },
  { deliID: "001", memberName: "Kyaw Kyaw", memberAdresss: "87*88 100Street Mandalay", deliveryTime: "10:00AM", riderName: "Oo Ko", riderID: "007"  },
  { deliID: "001", memberName: "Kyaw Kyaw", memberAdresss: "87*88 100Street Mandalay", deliveryTime: "10:00AM", riderName: "Oo Ko", riderID: "007"  },
  { deliID: "001", memberName: "Kyaw Kyaw", memberAdresss: "87*88 100Street Mandalay", deliveryTime: "10:00AM", riderName: "Oo Ko", riderID: "007"  },
]
  return (
  <div className="container">
    <section className="flex">

      <div className="">
        <h3 style={{color: "#f8590af6"}}>Delivery Schedule lists</h3><br/>
        
            <table className="table-schedule">
                <tr>
                    <th className="th-shcedule">Delivery ID</th>
                    <th className="th-shcedule">Member Name</th>
                    <th className="th-shcedule">Member Address</th>
                    <th className="th-shcedule">Delivery Time</th>
                    <th className="th-shcedule">Rider Name</th>
                    <th className="th-shcedule">Rider ID</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className="td-schedule">{val.deliID}</td>
                            <td className="td-schedule">{val.memberName}</td>
                            <td className="td-schedule">{val.memberAdresss}</td>
                            <td className="td-schedule">{val.deliveryTime}</td>
                            <td className="td-schedule">{val.riderName}</td>
                            <td className="td-schedule">{val.riderID}</td>
                        </tr>
                    )
                })}
            </table>
        
      </div>
      <div className="vl"></div>
      <div className="">
        <h3 style={{color:"Black"}}>Order Delivered Lists</h3><br/>
        
            <table className="recently-Delivered-lists">
                <tr>
                    <th className="th-shcedule">Delivery ID</th>
                    <th className="th-shcedule">Member Name</th>
                    <th className="th-shcedule">Rider Name</th>
                    <th className="th-shcedule">Deliveried Time</th>
                    <th className="th-shcedule">Status</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className="td-schedule">{val.deliID}</td>
                            <td className="td-schedule">{val.memberName}</td>
                            <td className="td-schedule">{val.riderName}</td>
                            <td className="td-schedule">{val.deliveryTime}</td>
                            <td className="td-schedule"><div className="status">Completed</div></td>
                        </tr>
                    )
                })}
            </table>
        
      </div>

    </section>
  </div>
  );
};

export default Rider;
