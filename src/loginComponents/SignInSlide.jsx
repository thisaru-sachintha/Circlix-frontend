import SignInInput from "./SignInInput";
import axios from "axios";
import { React,useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignInSlide(props) { 
  const navigate =useNavigate();


    {/*SignIn data  use states  */
    }
    const [signInNIC, setSignInNIC] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
  {  /*Handle signIn */
  }
  {
    /*SignIn data handle */
  }
  const handleDataFromSignInNIC = (data) => {
    console.log("Received from child:", data);
    setSignInNIC(data);
    console.log({signInNIC,signInPassword});
  };

  const handleDataFromSignInPassword = (data) => {
    console.log("Received from child:", data);
    setSignInPassword(data);
    console.log({signInNIC,signInPassword});
  };

  {
    /*Calling Api */
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(
        "http://http://localhost:8080/api/v1/user/signIn",
        JSON.stringify({ signInNIC, signInPassword })
      );

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login successful!");
        navigate("/user");
      } else {
        alert("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="display-5 lh-1 text-body-emphasis justify-content-center mt-5">
          Welcome Back
        </h1>
        <div className="my-2 mx-4 py-5">
          <form onSubmit={handleLogin}>
            <SignInInput
              inputId="signInNICNumber"
              labelId="labelNICNumber"
              inputType="text"
              labelText="NIC Number"
              onSendData={handleDataFromSignInNIC}
            />
            <SignInInput
              inputId="signInPassword"
              labelId="labelPassword"
              inputType="password"
              labelText="Password"
              onSendData={handleDataFromSignInPassword}
            />

            <div className="mb-3">
              <p className="mb-0 fw-light">
                Don't have an account ?{" "}
                <button
                  onClick={(e) => props.slideChange(e)}
                  className="btn border-0 pt-1 text-primary text-decoration-underline"
                >
                  Register
                </button>
              </p>
              <p className="mb-0 fw-light">
                Back to{" "}
                <button
                  formAction="/"
                  className="btn border-0 pt-0 ps-1 pe-1 text-primary text-decoration-underline"
                >
                  Home page
                </button>
                {"?"}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn bg-white border-primary btn-md px-3 mb-2 me-5">
                Reset
              </button>
              <button
                type="submit"
                className="btn bg-primary btn-md px-3 mb-2 me-2"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInSlide;
