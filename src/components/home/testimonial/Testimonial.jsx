import "./testimonial.css";
import { Warren, Jeff, BillGate, DonateBox } from "../../ImagesImport";

const Testimonial = () => {
  return (
    <section id="testimonial" className="container">
      <div className="test-title">
        <h2>Billionaires Donated to use</h2>
        <img src={DonateBox} alt="DonateIconBox" />
      </div>
      <div className="cards-con">
        <div className="card">
          <img src={BillGate} alt="Bill Gate" />
          <h3>Bill Gates</h3>
          <p>
            Contributing to MerryMeal has been a heartwarming experience.
            Knowing that my donation helps deliver hot meals to those in need
            brings a sense of fulfillment. Every bit counts in making a
            difference in someone's day.
          </p>
        </div>
        <div className="card">
          <img src={Jeff} alt="Bill Gate" />
          <h3>Jeff Bezos</h3>
          <p>
            MerryMeal's dedication to providing nutritious meals to vulnerable
            individuals is truly commendable. I'm proud to support such a worthy
            cause. Together, we can ensure that no one goes hungry.
          </p>
        </div>
        <div className="card">
          <img src={Warren} alt="Bill Gate" />
          <h3>Warren Buffett</h3>
          <p>
            Donating to MerryMeal goes beyond charity; it's about nourishing
            communities. The joy of knowing that my contribution helps deliver
            both hot and frozen meals to those who require them is unmatched.
            Joining hands for a healthier, happier world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
