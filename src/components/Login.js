import Header from "./Header";
// import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {auth} from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {images} from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const {USER_AVATAR} = images;

    const name = useRef(null);
    const emailRef = useRef();
    const passwordRef = useRef();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const message = checkValidData(emailRef.current.value, passwordRef.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                console.log(userCredential.user);
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR
                }).then(() => {
                    const {uid, displayName, email, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                }).catch((error) => {
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " -- "+ errorMessage);
            });
        } else {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                const { uid, email, displayName, photoURL } = userCredential.user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            })
            .catch(error => {
                if (error.code) {
                    setErrorMessage(error.message);
                }
            })
        }
    }

    return (
        <div>
            <Header />
            <div className="banner-image">
                <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="bg" className="w-full"/>
            </div>
            <form onSubmit={e => e.preventDefault()} className="login-form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 p-8 rounded-md flex flex-col w-1/4">
                <h2 className="text-white text-2xl mb-8 font-bold">{isSignInForm ? "Sign In": "Sign Up"}</h2>
                {!isSignInForm && <input type="text" ref={name} placeholder="Username" className="mb-4 p-4 rounded" />}

                <input type="email" placeholder="Email" className="mb-4 p-4 rounded" ref={emailRef} />
                <input type="password" placeholder="Password" className="mb-4 p-4 rounded" ref={passwordRef} />
                <p className="text-red-600">{errorMessage}</p>
                <button type="submit" className="bg-red-600 text-white p-4 rounded" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className="text-white mt-4">
                    <p>{isSignInForm ? "New to Netflix?" : "Already have an account?"} <span className="text-red-600 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign up now" : "Sign in"}</span>.</p>
                </div>
            </form>
        </div>
    );
}

export default Login;