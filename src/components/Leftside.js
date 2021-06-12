import React from "react";
import "./styling/leftside.css";
import noImage from "../images/no-image.png";
import { addRecepientAPI, signOutAPI } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Leftside() {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  return (
    <div id="Leftside">
      <div id="Leftside__controls">
        <div id="Leftside__controls__logout">
          <button id="logout" onClick={() => signOutAPI(dispatch)}>
            Logout
          </button>
        </div>
        <div id="Leftside__controls__addRecepient">
          <Link to="/addRecepient">
            <button id="addRecepient">Add Recepient</button>
          </Link>
        </div>
      </div>
      <div id="Leftside__body">
        <img
          src={
            userData
              ? userData.photoURL
                ? userData.photoURL
                : noImage
              : noImage
          }
          alt=""
        />

        <p>Welcome {userData ? userData.userName : "Dummy User"}</p>
        <p>
          total = +{" "}
          {userData
            ? userData.total
              ? userData.total
              : "Not yet calculated/caliberated"
            : ""}
        </p>
      </div>
    </div>
  );
}

export default Leftside;
