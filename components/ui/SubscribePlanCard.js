import React from "react";
import classes from "./SubscribePlanCard.module.scss";
import {
  FaCheck,
  FaRegWindowClose,
  FaWindowClose,
  FaXbox,
} from "react-icons/fa";
const SubscribePlanCard = ({ allAccess }) => {
  return (
    <div className={classes.SubscribeCard}>
      {allAccess ? <div className={classes.badge}>BEST VALUE</div> : ""}
      <div className={classes.title}> {allAccess ? "All Access" : "News"}</div>
      <div className={classes.prices}>
        <del>{allAccess ? "$3" : "$2"}</del>
        {allAccess ? "$0.50/week" : "$0.25/week"}
      </div>
      <span className={classes.billed}>
        Billed <del>{allAccess ? "$12" : "$8"}</del>
        {allAccess
          ? " $2 every four weeks for the first year"
          : " $1 every four weeks for the first year"}
      </span>
      <button
        className={
          allAccess ? classes.SubscribebtnAll : classes.SubscribeBtnNoAccess
        }
      >
        Subscribe now
      </button>
      <ul className={classes.perks}>
        <li>
          <FaCheck />
          <span>News.</span> Understand the world with original reporting from
          1,700 journalists
        </li>
        <li>
          {allAccess ? <FaCheck /> : <FaWindowClose />}
          <span className={allAccess ? "" : classes.lightGrey}>
            Games.
          </span>{" "}
          Unwind with The Crossword, The Mini, Spelling Bee and more.
        </li>{" "}
        <li>
          {allAccess ? <FaCheck /> : <FaWindowClose />}
          <span className={allAccess ? "" : classes.lightGrey}>
            Cooking.
          </span>{" "}
          Enjoy recipes, advice and inspiration for any occasion.
        </li>{" "}
        <li>
          {allAccess ? <FaCheck /> : <FaWindowClose />}
          <span className={allAccess ? "" : classes.lightGrey}>
            Wirecutter.
          </span>{" "}
          Explore independent reviews for thousands of products online.
        </li>{" "}
        <li>
          {allAccess ? <FaCheck /> : <FaWindowClose />}
          <span className={allAccess ? "" : classes.lightGrey}>
            The Athletic.
          </span>{" "}
          In-depth, personalized sports journalism.
        </li>
      </ul>
    </div>
  );
};

export default SubscribePlanCard;
