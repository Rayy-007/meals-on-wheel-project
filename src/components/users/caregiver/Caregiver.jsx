import "./caregiver.css";
import { OldMan1, Woman1, Woman2 } from "../../ImagesImport";

const Caregiver = () => {
  return (
    <div className="container">
      <h2>Assigned Member to you!</h2>
      <p>Member detail are below!</p>

      <section className="cargiver-con flex">
        <div className="caregiver flex">
          <div className="img">
            <img src={OldMan1} alt="Man" />
            <h3>Mr. John</h3>
            <p>Who like to eat green food</p>
          </div>
          <div className="box">
            <ul>
              <li>Age - 64</li>
              <li>Address - Manadalay</li>
              <li>Ordered Date - Mon, Tue, Fri</li>
            </ul>
          </div>
        </div>
        <div className="caregiver flex">
          <div className="img">
            <img src={Woman1} alt="Woman1" />
            <h3>Mrs. Haree</h3>
            <p>Who like to eat healthy food</p>
          </div>
          <div className="box">
            <ul>
              <li>Age - 73</li>
              <li>Address - Manadalay</li>
              <li>Ordered Date - Tue, Thur, Fri</li>
            </ul>
          </div>
        </div>
        <div className="caregiver flex">
          <div className="img">
            <img src={Woman2} alt="Woman2" />
            <h3>Mrs. Thin</h3>
            <p>Who like to eat meal food</p>
          </div>
          <div className="box">
            <ul>
              <li>Age - 82</li>
              <li>Address - Manadalay</li>
              <li>Ordered Date - Mon, Tue,Wed, Fri</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caregiver;
