import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Notification from "../../img/notification.png";
import Comment from "../../img/comment.png";
import UilSetting from "@iconscout/react-unicons/icons/uil-setting";
import TrendCard from "../trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="Home" />
        <UilSetting />
        <img src={Notification} alt="Notification" />
        <img src={Comment} alt="Comment" />
      </div>
      <TrendCard />

      <button className="button r-button">
        Share
      </button>
    </div>
  );
};

export default RightSide;
