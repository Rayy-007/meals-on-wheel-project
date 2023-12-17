import "./feedback.css";
import { Warren } from "../../ImagesImport";

const Feedback = () => {
  return (
    <div className="container">
      <h2>Reassessment of need evaluation</h2>
      <p>Users feedback!</p>
      <section className="feedback-con flex">
        <div className="feedbacks">
          <p>Others feedbacks</p>
          <div className="feedback">
            <img src={Warren} alt="" />
            <div className="text">
              <h3>Warren Buffett</h3>
              <p>
                Donating to MerryMeal goes beyond charity; it's about nourishing
                communities.
              </p>
            </div>
          </div>
          <div className="feedback">
            <img src={Warren} alt="" />
            <div className="text">
              <h3>Warren Buffett</h3>
              <p>
                Donating to MerryMeal goes beyond charity; it's about nourishing
                communities.
              </p>
            </div>
          </div>
          <div className="feedback">
            <img src={Warren} alt="" />
            <div className="text">
              <h3>Warren Buffett</h3>
              <p>
                Donating to MerryMeal goes beyond charity; it's about nourishing
                communities.
              </p>
            </div>
          </div>
        </div>
        <div className="feedback-form">
          <h3>How Do you feel about our organization? </h3>
          <textarea cols="30" rows="10" placeholder="Your Feedback"></textarea>
          <button className="btn primary green">Send Feedback</button>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
