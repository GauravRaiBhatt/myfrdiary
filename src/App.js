import Home from "./components/Home";
import Signup from "./components/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router";
import { fetchDataAfterRefresh, signOutAPI } from "./redux/actions";
import AddRecepient from "./components/AddRecepient";

function App() {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      if (
        window.confirm("Do you wanna continue with earlier logged In account")
      ) {
        setTimeout(() => {
          fetchDataAfterRefresh(dispatch);
          userData ? <Redirect to="/home" /> : console.log("didn't work!!");
        }, 2000);
      }
       else signOutAPI(dispatch);
    }else alert('u need to login !')
  }, []);

  // useEffect(()=>{
  //   console.log('in new useEffect');
  //   <Redirect to='/home'/>
  // },[userData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/addRecepient">
            <AddRecepient />
          </Route>
          <Route>
            <h1>No such page !!!!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// WAP in C to sort an element using bubble sort

// const verifyToken = (authToken) => {
//   console.log(firebase.auth().currentUser);
// firebase.auth
//   .verifyIdToken(authToken)
//   .then((decodedToken) => {
//     dispatch({
//       type: actionTypes.ADD_USER,
//       payload: decodedToken,
//     });

//     // get the recepients and transaction data
//   })
//   .catch((e) => console.log(e.code));
// };
