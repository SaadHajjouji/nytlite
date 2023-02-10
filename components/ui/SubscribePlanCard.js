import React from "react";
import classes from "./SubscribePlanCard.module.scss";
const SubscribePlanCard = () => {
  return (
    <div className={classes.SubscribeCard}>
      <div>All Access</div>
      <div>
        <del>3$</del>
        $0.50/week
      </div>
      <span>
        Billed <del>$12</del>
        $2 every four weeks for the first year
      </span>
      <button>Subscribe now</button>
      <ul>
        <li>
          <span>News</span> Understand the world with original reporting from
          1,700 journalists
        </li>
        <li>
          <span>News</span> Understand the world with original reporting from
          1,700 journalists
        </li>{" "}
        <li>
          <span>News</span> Understand the world with original reporting from
          1,700 journalists
        </li>{" "}
        <li>
          <span>News</span> Understand the world with original reporting from
          1,700 journalists
        </li>{" "}
        <li>
          <span>News</span> Understand the world with original reporting from
          1,700 journalists
        </li>
      </ul>
    </div>
  );
};

export default SubscribePlanCard;
