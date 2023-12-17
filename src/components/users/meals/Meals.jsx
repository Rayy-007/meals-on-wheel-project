import "./meal.css";
import hotmeals from "./hotmeals";
import frozenmeals from "./frozenmeals";
import {
  FronzenMeal1,
  FronzenMeal2,
  FronzenMeal3,
  HotMeal1,
  HotMeal2,
  HotMeal3,
} from "../../ImagesImport";

const Meals = () => {
  const HotMeals = hotmeals.map((hotmeal) => {
    return (
      <div className="meal">
        <img src={hotmeal.imgUrl} alt={hotmeal.title} />
        <div className="des">
          <h3>{hotmeal.title}</h3>
          <ul>
            {hotmeal.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <a className="btn primary blue" href="">
            Get
          </a>
          <b className="badge">Healthy</b>
        </div>
      </div>
    );
  });
  const FrozenMeals = frozenmeals.map((frozenmeal) => {
    return (
      <div className="meal">
        <img src={frozenmeal.imgUrl} alt={frozenmeal.title} />
        <div className="des">
          <h3>{frozenmeal.title}</h3>
          <ul>
            {frozenmeal.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <a className="btn primary blue" href="">
            Get
          </a>
          <b className="badge">Healthy</b>
        </div>
      </div>
    );
  });

  return (
    <div className="container meals">
      <h2>Available meals for today</h2>
      <section className="meal hotmeal-con">
        <h3 className="text-orange">Hot Meals</h3>
        <div className="meals-con flex">{HotMeals}</div>
      </section>

      <section className="meal hotmeal-con frozenmeal-con">
        <h3 className="text-violet ">Frozen Meals</h3>
        <div className="meals-con flex">{FrozenMeals}</div>
      </section>
    </div>
  );
};

export default Meals;
