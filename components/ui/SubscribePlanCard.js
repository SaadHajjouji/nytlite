import React from "react";
import classes from "./SubscribePlanCard.module.scss";
import { FaApple, FaCheck, FaFacebook, FaGoogle } from "react-icons/fa";
const SubscribePlanCard = () => {
  return (
    <div className={classes.SubscribeCard}>
      <div className={classes.badge}>Best value</div>
      <div className={classes.title}>All Access</div>
      <div className={classes.prices}>
        <del>3$</del>
        $0.50/week
      </div>
      <span className={classes.billed}>
        Billed <del>$12</del>
        $2 every four weeks for the first year
      </span>
      <button>Subscribe now</button>
      <ul className={classes.perks}>
        <li>
          <FaCheck />
          <span>News.</span> Understand the world with original reporting from
          1,700 journalists
        </li>
        <li>
          <FaCheck />
          <span>Games.</span> Unwind with The Crossword, The Mini, Spelling Bee
          and more.
        </li>{" "}
        <li>
          <FaCheck />
          <span>Cooking.</span> Enjoy recipes, advice and inspiration for any
          occasion.
        </li>{" "}
        <li>
          <FaCheck />
          <span>Wirecutter.</span> Explore independent reviews for thousands of
          products online.
        </li>{" "}
        <li>
          <FaCheck />
          <span>The Athletic.</span> In-depth, personalized sports journalism.
        </li>
      </ul>
    </div>
  );
};

export default SubscribePlanCard;
