
// // Auth.jsx
// import React, { useState, useContext } from "react";
// import classes from "../Auth/SignUp.module.css";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { auth } from "../../Utility/firebase";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import { Type } from '../../Utility/action.type';

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState({
//     signIn: false,
//     signUp: false,
//   });

//   const [{ user }, dispatch] = useContext(DataContext);
//   const navigate = useNavigate();
//   const navStateDate = useLocation();
//   console.log(navStateDate);

//   const authHandler = async (e) => {
//     e.preventDefault();
//     const action = e.target.name; // "signin" or "signup"

//     setLoading({ ...loading, [action]: true }); // Set loading state for the specific action
//     setError(""); // Clear any previous errors

//     try {
//       let userInfo;
//       if (action == "signin") {
//         // Firebase auth for sign-in
//         userInfo = await signInWithEmailAndPassword(auth, email, password);
//       } else if (action == "signup") {
//         // Firebase auth for sign-up
//         userInfo = await createUserWithEmailAndPassword(auth, email, password);
//       }

//       // Dispatch user data to context
//       dispatch({
//         type: Type.SET_USER,
//         user: userInfo.user,
//       });

//       // Navigate to the home page or a redirect URL
//       navigate(navStateDate?.state?.redirect || "/");
//     } catch (err) {
//       setError(err.message); // Set error message
//     } finally {
//       setLoading({ ...loading, [action]: false }); // Reset loading state
//     }
//   };

//   return (
//     <section className={classes.login}>
//       {/* Logo */}
//       <Link to="/">
//         <img
//           src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
//           alt="Amazon Logo"
//         />
//       </Link>

//       {/* Form */}
//       <div className={classes.login__Container}>
//         <h1>Sign In</h1>
//         {navStateDate?.state?.msg && (
//           <small
//             style={{
//               padding: "5px",
//               textAlign: "center",
//               color: "red",
//               fontWeight: "bold",
//             }}
//           >
//             {navStateDate.state.msg}
//           </small>
//         )}

//         {/* Sign In Form */}
//         <form onSubmit={authHandler}>
//           <div>
//             <label htmlFor="email">E-mail</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             name="signin"
//             className={classes.login__signInButton}
//             disabled={loading.signIn}
//           >
//             {loading.signIn ? "Loading..." : "Sign in"}
//           </button>
//         </form>

//         {/* Agreement */}
//         <p>
//           By Signing-in you agree to the Amazon Fake Clone condition of use & sale.
//           Please see our privacy notice, our cookies notice, and our interest-based Ads notice.
//         </p>

//         {/* Sign Up Button */}
//         <button
//           type="button"
//           name="signup"
//           onClick={authHandler}
//           className={classes.login__registerButton}
//           disabled={loading.signUp}
//         >
//           {loading.signUp ? "Loading..." : "Create your Amazon account"}
//         </button>

//         {/* Display error message if any */}
//         {error && <p className={classes.error}>{error}</p>}
//       </div>
//     </section>
//   );
// }

// export default Auth;




import React, { useContext, useState } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo from "../../assets/amazonlogo.svg";
import Style from "./SignUp.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  // console.log(email, password);

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    4;
    if (e.target.name == "signin") {
      // init firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={Style.login}>
      <Link to="/">
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
          alt="Amazon Logo" />
      </Link>
      <div className={Style.login__container}>
        <h1>Sign-In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={Style.signin_btn}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          and sale. please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={Style.signup_btn}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
















