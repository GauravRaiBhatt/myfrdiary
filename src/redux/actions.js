import actionsTypes from "./actionTypes";
import { auth, db, firebase } from "../firebase";

// supporting function
export const fetchDataAfterRefresh = (dispatch) => {
  console.log("in fetchDataAfterRefresh");
  const user = auth.currentUser;
  if (user) {
    //fetch user
    const userId = user.uid;
    db.doc(`/users/${userId}`)
      .get()
      .then((doc) => {
        const userDataFromFirebase = doc.data();
        localStorage.setItem("userId", userId);
        console.log(userDataFromFirebase);
        dispatch({
          type: actionsTypes.ADD_USER,
          payload: userDataFromFirebase,
        });

        // fetch recepients
        if (userDataFromFirebase.recepients.length) {
          db.collection("recepients")
            .where("userId", "==", userId)
            .get()
            .then((querySnapshot) => {
              let allRecepients = [];
              querySnapshot.forEach((doc) => {
                allRecepients.push(doc.data());
              });

              dispatch({
                type: actionsTypes.ADD_RECEPIENT,
                payload: allRecepients,
              });
            });
        }
      })
      .catch((e) => console.log(e));
  }
};

// login and geting data from db and updating userData in redux
export const loginAPI = (dispatch, userDetails) => {
  let userDataFromFirebase = {};
  let authToken, userId;
  auth
    .signInWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword)
    .then((data) => {
      userId = data.user.uid;
      data.user.getIdToken().then((token) => {
        authToken = token;
      });

      db.doc(`/users/${userId}`)
        .get()
        .then((doc) => {
          userDataFromFirebase = doc.data();
          localStorage.setItem("userId", userId);
          dispatch({
            type: actionsTypes.ADD_USER,
            payload: userDataFromFirebase,
          });
        });

      // fetch recepients
      if (userDataFromFirebase.recepients.length) {
        db.collection("recepients")
          .where("userId", "==", userId)
          .get()
          .then((querySnapshot) => {
            let allRecepients = [];
            querySnapshot.forEach((doc) => {
              allRecepients.push(doc.data());
            });

            dispatch({
              type: actionsTypes.ADD_RECEPIENT,
              payload: allRecepients,
            });
          });
      }
    })
    .catch((e) => {
      console.log(e.code);
    });
};

// signup and userData in redux
export const signUpAPI = (dispatch, userDetails) => {
  let userId;
  auth
    .createUserWithEmailAndPassword(
      userDetails.userEmail,
      userDetails.userPassword
    )
    .then((data) => {
      userId = data.user.uid;
      // storing in database:firebase
      const userDataForFirebase = {
        userName: userDetails.userName,
        userEmail: userDetails.userEmail,
        userPassword: userDetails.userPassword,
        userImageURL: null,
        createdAt: new Date().toISOString(),
        userId,
        recepients: [],
      };
      db.doc(`/users/${userId}`).set(userDataForFirebase).then();
      localStorage.setItem("userId", userId);
      dispatch({
        type: actionsTypes.ADD_USER,
        payload: userDataForFirebase,
      });

      // fetch recepients if there is sme recepientId's in recepients[] in collection named user
      if (userDataForFirebase.recepients.length) {
        db.collection("recepients")
          .where("userId", "==", userId)
          .get()
          .then((querySnapshot) => {
            let allRecepients = [];
            querySnapshot.forEach((doc) => {
              allRecepients.push(doc.data());
            });

            dispatch({
              type: actionsTypes.ADD_RECEPIENT,
              payload: allRecepients,
            });
          });
      }
    })
    .catch((e) => {
      console.log(e.code);
    });
};

// signout
export const signOutAPI = (dispatch) => {
  auth.signOut();
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
  console.log("in signOut");
  dispatch({
    type: actionsTypes.REMOVE_USER,
  });

  // dispatch remove allRecepients
  dispatch({
    type:actionsTypes.REMOVE_ALLRECEPIENTS
  })
};

export const addRecepientAPI = (dispatch, userId, recepientData) => {
  let recepientId;

  // aad recepient data in collection named recepient also store its uid
  db.collection("recepients")
    .add(recepientData)
    .then((doc) => {
      recepientId = doc.id;
      // append recepients uid(from above) into recepients[] in collection named users
      db.doc(`/users/${userId}`).update({
        recepients: firebase.firestore.FieldValue.arrayUnion(recepientId),
      });
      // insert recepientId in the doc of collection recepients
      db.doc(`/recepients/${recepientId}`).update({
        recepientId
      });

      let updatedRecepientData = recepientData
      updatedRecepientData["recepientId"] = recepientId;
      // dispatch addRecepient
      dispatch({
        type: actionsTypes.ADD_RECEPIENT,
        payload: updatedRecepientData,
      });

      // also dispatch ADD_TO_RECEPIENTS_ARRAY to append new recepientId to recepients[] of user
      dispatch({
        type: actionsTypes.ADD_TO_RECEPIENTS_ARRAY,
        payload: recepientId,
      });
    })
    .catch((e) => console.log(e));
};
