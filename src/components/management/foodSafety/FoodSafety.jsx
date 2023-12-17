import "./foodsafety.css";
import { Safety1, Safety2, Certificate } from "../../ImagesImport";

const FoodSafety = () => {
  return (
    <div className="container">
      <h2>Food Safety Management</h2>
      <section className="flex safety safety-1">
        <div className="text">
          <h3>Ensuring Food Safety at MerryMeal</h3>
          <p>
            At MerryMeal, we prioritize the health and well-being of our
            community members. Our commitment extends beyond delivering
            nutritious meals — we ensure the utmost safety in every bite.
            Rigorous food safety management is at the core of our operations.
          </p>
        </div>
        <div className="img">
          <img src={Safety1} alt="Food Safety Management" />
        </div>
      </section>
      <section className="flex safety safety-2">
        <div className="img">
          <img src={Safety2} alt="Food Safety Management" />
        </div>
        <div className="text">
          <h3>Stringent Quality Control</h3>
          <p>
            We adhere to the highest industry standards, conducting thorough
            checks on the quality of ingredients sourced from our trusted
            partners. Our quality control measures start from the selection of
            fresh produce to the processing of meals in our state-of-the-art
            kitchens.
          </p>
        </div>
      </section>
      <section className="certificate">
        <h3>Collaboration with Certified Providers</h3>
        <p>
          MerryMeal proudly collaborates with certified food service providers
          across the country. This strategic partnership ensures that the meals
          we deliver meet the highest safety standards, contributing to the
          well-being of our members.
        </p>
        <img src={Certificate} alt="Food Certificate" />
      </section>
    </div>
  );
};

export default FoodSafety;
