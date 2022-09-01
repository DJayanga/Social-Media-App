import React from "react";
import "./InfoCard.css";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in a Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Galle</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Surge Global</span>
      </div>
      <button className="button logout-button">Update</button>
    </div>
  );
};

export default InfoCard;
