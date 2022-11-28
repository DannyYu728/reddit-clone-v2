import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Aside.css";
import {GoHome} from "react-icons/go";
import {
  GiPartyPopper,
  GiBalloonDog,
  GiSlicedBread,
  GiGingerbreadMan,
} from "react-icons/gi";

function Aside() {
  return (
    <div className="aside">
      <div className="aside-link-wrapper">
        <p className="aside-wrapper-text">Feeds</p>
        <div className="aside-link-container">
          <GoHome size={24} className="aside-icon" />
          <p>Home</p>
        </div>
        <div className="aside-link-container">
          <GiPartyPopper size={25} className="aside-icon" />
          <p>Popular</p>
        </div>
        <div className="aside-link-container">
          <GiBalloonDog size={25} className="aside-icon" />
          <p>All</p>
        </div>
        <div className="aside-link-container">
          <GiSlicedBread size={25} className="aside-icon" />
          <p>Happening</p>
        </div>
        <div className="aside-link-container">
          <GiGingerbreadMan size={25} className="aside-icon" />
          <p>Communities</p>
        </div>
      </div>
      <div className="aside-link-wrapper">
        <p className="aside-wrapper-text">Topics</p>
        <div className="aside-link-container">
          <GoHome size={24} className="aside-icon" />
          <p>Gaming</p>
        </div>
        <div className="aside-link-container">
          <GiPartyPopper size={25} className="aside-icon" />
          <p>Sports</p>
        </div>
        <div className="aside-link-container">
          <GiBalloonDog size={25} className="aside-icon" />
          <p>Business</p>
        </div>
        <div className="aside-link-container">
          <GiSlicedBread size={25} className="aside-icon" />
          <p>Crypto</p>
        </div>
        <div className="aside-link-container">
          <GiGingerbreadMan size={25} className="aside-icon" />
          <p>Television</p>
        </div>
        <div className="aside-link-container">
          <GiGingerbreadMan size={25} className="aside-icon" />
          <p>More Topics</p>
        </div>
      </div>
    </div>
  );
}

export default Aside;
