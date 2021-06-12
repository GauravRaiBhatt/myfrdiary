import React, {  } from "react";
import Logo from "../images/logo2.jpg";
import "./styling/home.css";
import Leftside from "./Leftside";
import { Redirect } from "react-router";
import Middle from "./Middle";
import { useSelector } from "react-redux";

function Home() {
  const userData = useSelector(state => state.user.userData);

  return (
    <div className="Home__container">

      {!userData && <Redirect  to='/'/>}
      
      <nav id="Home__header">
        <img id="logo" src={Logo} alt="myLogo" />
        <span>My Financial Records Diary</span>
      </nav>
      <div id="Home__body">
        <Leftside />
        <Middle />
      </div>
    </div>
  );
}

export default Home;
