import "./mealService.css";
import {
  HotMeal1,
  HotMeal2,
  HotMeal3,
  FronzenMeal1,
  FronzenMeal2,
  FronzenMeal3,
  LongArrow,
} from "../../ImagesImport";

const MealService = () => {
  return (
    <div id="mealService">
      <section className="hot-meal container flex">
        <div className="left">
          <h2>Meal Services Tailored</h2>
          <div className="longArrow">
            <img src={LongArrow} alt="Long Arrow" />
          </div>
          <div className="img-con">
            <img src={HotMeal1} alt="HotMeal1" />
            <img src={HotMeal2} alt="HotMeal2" />
            <img src={HotMeal3} alt="HotMeal3" />
          </div>
        </div>
        <div className="right">
          <h3 className="text-green">Hot Meal</h3>
          <p>
            For members residing in proximity, we proudly offer freshly
            prepared, hot noon meals delivered right to your doorstep from
            Monday through Friday. It's a warm and comforting solution for those
            who may find cooking a challenge due to age, illness, or disability.
          </p>
        </div>
      </section>
      <section className="frozen-meal hot-meal  container flex">
        <div className="right">
          <h3 className="text-violet">Frozen Meal</h3>
          <p>
            For members residing in proximity, we proudly offer freshly
            prepared, hot noon meals delivered right to your doorstep from
            Monday through Friday. It's a warm and comforting solution for those
            who may find cooking a challenge due to age, illness, or disability.
          </p>
        </div>
        <div className="left">
          <div className="img-con">
            <div className="con">
              <img src={FronzenMeal3} alt="Frozen2" />
              <img src={FronzenMeal1} alt="Frozen1" />
            </div>
            <img src={FronzenMeal2} alt="Frozen3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealService;
