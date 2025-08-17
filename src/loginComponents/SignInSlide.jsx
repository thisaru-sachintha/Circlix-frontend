import SignInInput from "./SignInInput";
import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignInSlide(props) {
  const navigate = useNavigate();

  {
    /*SignIn data  use states  */
  }
  const [signInNIC, setSignInNIC] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  {
    /*Forgot password useStates */
  }
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);

  const [recoveryNIC, setRecoveryNIC] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");

  {
    /*Handle signIn */
  }
  {
    /*SignIn data handle */
  }
  const handleDataFromSignInNIC = (data) => {
    console.log("Received from child:", data);
    setSignInNIC(data);
  };

  const handleDataFromSignInPassword = (data) => {
    console.log("Received from child:", data);
    setSignInPassword(data);
  };

  {
    /*Calling Api */
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log({ signInNIC, signInPassword });

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
        alert("Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed! Please check your credentials.");
    }
  };
  {
    /*Reset values */
  }
  function resetInputs(e) {
    e.preventDefault();
    setSignInNIC("");
    setSignInPassword("");
  }

  {
    /*Forgot password process */
  }
  const handleSendOTP = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/send-otp",
        { nic: recoveryNIC, email: recoveryEmail }
      );
      if (response.data.success) {
        setShowEmailModal(false);
        setShowOTPModal(true);
      } else {
        alert("Failed to send OTP. Please check NIC and Email.");
      }
    } catch (error) {
      console.error("OTP send error:", error.response?.data || error.message);
      alert("Error sending OTP.");
    }
  };

  const handleVerifyOTPAndReset = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/verify-otp-and-reset",
        { nic: recoveryNIC, otp, newPassword }
      );
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Password reset successful! Logged in.");
        setShowOTPModal(false);
        navigate("/user");
      } else {
        alert("OTP verification failed.");
      }
    } catch (error) {
      console.error("OTP reset error:", error.response?.data || error.message);
      alert("Failed to reset password.");
    }
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="display-5 lh-1 text-body-emphasis justify-content-center mt-5">
          Welcome Back
        </h1>
        <div className="my-2 mx-4 py-5">
          <form>
            <SignInInput
              inputId="signInNICNumber"
              labelId="labelNICNumber"
              inputType="text"
              labelText="NIC Number"
              value={signInNIC}
              onSendData={handleDataFromSignInNIC}
            />
            <SignInInput
              inputId="signInPassword"
              labelId="labelPassword"
              inputType="password"
              labelText="Password"
              value={signInPassword}
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
              <button
                onClick={(e) => resetInputs(e)}
                className="btn bg-white border-primary btn-md px-3 mb-2 me-5"
              >
                Reset
              </button>
              <button
                onClick={handleLogin}
                className="btn bg-primary btn-md px-3 mb-2 me-2"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mb-0 fw-light">
            Forgot password ?{" "}
            <button
              onClick={() => setShowEmailModal(true)}
              className="btn border-0 pt-1 text-primary text-decoration-underline"
            >
              Send OTP
            </button>
          </p>
        </div>
      </div>
      {/* Modal 1: NIC + Email */}
      <div
        className={`modal fade ${showEmailModal ? "show d-block" : ""}`}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <h5>Account Recover</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="NIC"
              value={recoveryNIC}
              onChange={(e) => setRecoveryNIC(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Email"
              value={recoveryEmail}
              onChange={(e) => setRecoveryEmail(e.target.value)}
            />
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary me-2" onClick={handleSendOTP}>
                Send OTP
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowEmailModal(false)}
              >
                Cancel
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2: OTP + New Password */}
      <div
        className={`modal fade ${showOTPModal ? "show d-block" : ""}`}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <h5>Reset Password</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowOTPModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={handleVerifyOTPAndReset}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInSlide;
