import React,{} from "react";
import './styling/signup.css';
import { Redirect } from "react-router";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

function Signup() {

    const userData = useSelector(state => state.user.userData);

    
    // updating local state
    // setisLoggedIn(userData? userData.isLoggedIn:false);  // <-- this results in infite times rendering .
    // instead use useEffect
    // useEffect(()=>{
    //     setisLoggedIn(userData?true:false);
    // },[]);
    // inspite of all these, prefer using data directly fetched from the store and stored in a variable or constant named memory location😉
    // as these are updated every time the store is modified

    return (
        <div id="Signup__container" >

            {userData && <Redirect to='/home'/> }

            <nav id='Signup__header'>                
                <h1>My Financial Records Diary</h1>
            </nav>
            <div id="Signup__body">
                <div id="Signup__div__left">
                    <span >                   
                        <Link to='/login'> SignUp with Google</Link>
                    </span>
                </div>
                <div id="Signup__div__right">
                    <span>
                    <h2>About the Application</h2>
                    </span>
                    <p>
                        This Application is meant for anyone who wants to have keep track of his/her expenditure .
                    </p>
                    <p>
                       It is also beneficial to those who lend and borrow money . It helps you keep all your transaction records in a well organized manner by letting you create a profile of the person/body involved in the transaction.
                    </p>
                   
                       <h2>User Guide</h2>
                       <ul>
                           <li>Create the recipient's profile with all the necessary details.</li>
                           <li>Under his/her page add the transaction details</li>
                       </ul>                                      
                    <p> To get started clik the button </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
