import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { addRecepientAPI } from "../redux/actions";
import "./styling/addRecepient.css";

function AddRecepient() {
  const userData = useSelector((state) => state.user.userData);
  const recepientData = useSelector((state) => state.data.recepientData);
  const dispatch = useDispatch();
  const history = useHistory();
  const [recepientName, setRecepientName] = useState("");
  const [recepientPhone, setRecepientPhone] = useState("");
  const [recepientNickname, setRecepientNickname] = useState("");

  const addRecepient = () => {
    if (userData) {
      console.log("in addrecepient");
      const numberOfRecepientsSoFar = userData.recepients.length;
      const recepientData = {
        recepientName,
        recepientPhone,
        recepientNickname,
        userId: userData.userId,
        transactions: [],
      };
      history.push('/home');
      addRecepientAPI(dispatch, userData.userId, recepientData);
//       <Redirect to="/home" />;

      // setTimeout(() => {
      //   <Redirect to="/home" />;
      // }, 2000);
    } else {
      alert("u need to login first");
    }
  };

  return (
    <div id="AddRecepient__container">
      {/* {recepientData.length ? (
        <Redirect to="/home" />
      ) :''} */}

      <h1>Provide Recepient's Details</h1>
      <div id="inputForm">
        <label htmlFor="Recepient's Name">
          Name
          <input
            type="text"
            placeholder="Name"
            value={recepientName}
            onChange={(e) => setRecepientName(e.target.value)}
          />
        </label>
        <label htmlFor="Recepient's Phone No.">
          Phone Number
          <input
            type="number"
            placeholder="Phone no.."
            value={recepientPhone}
            onChange={(e) => setRecepientPhone(e.target.value)}
          />
        </label>
        <label htmlFor="Recepient's Nickname">
          Nickname
          <input
            type="text"
            placeholder="This should be unique."
            value={recepientNickname}
            onChange={(e) => setRecepientNickname(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" onClick={() => addRecepient()}>
        Submit
      </button>
    </div>
  );
}

export default AddRecepient;
