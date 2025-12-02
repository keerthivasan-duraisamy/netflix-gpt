import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { images } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const { HEADER_LOGO } = images;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //console.log('Auth from onAuthStateChanged: ', auth);
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <header className="flex absolute top-0 w-full justify-between bg-gradient-to-to-b from-black/70 to-black/0 p-4">
      <h1 className="top-10 left-10">
        <Link to="/">
          <img src={HEADER_LOGO} className="max-w-32" alt="Netflix Logo" />
        </Link>
      </h1>
      <div className="items-center space-x-4">
        {user && (
          <div className="user-info flex items-center">
            <img
              src={user.photoURL}
              alt="user-image"
              className="max-w-[50px] mr-2 rounded-full"
            />
            <button
              className="text-white black px-2 py-2 text-decoration-underline bg-red-600 rounded-md"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
