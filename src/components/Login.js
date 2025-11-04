import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="banner-image">
                <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="bg" className="w-full"/>
            </div>
            <form className="login-form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 p-8 rounded-md flex flex-col w-1/4">
                <h2 className="text-white text-2xl mb-8 font-bold">{isSignInForm ? "Sign In": "Sign Up"}</h2>
                {!isSignInForm && <input type="text" placeholder="Username" className="mb-4 p-4 rounded" />}
                <input type="email" placeholder="Email" className="mb-4 p-4 rounded" />
                <input type="password" placeholder="Password" className="mb-4 p-4 rounded" />
                <button type="submit" className="bg-red-600 text-white p-4 rounded">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className="text-white mt-4">
                    <p>{isSignInForm ? "New to Netflix?" : "Already have an account?"} <span className="text-red-600 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign up now" : "Sign in"}</span>.</p>
                </div>
            </form>
        </div>
    );
}

export default Login;