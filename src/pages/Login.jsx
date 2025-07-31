import React, { useState } from "react";

function Login() {
  const [registerLeft, setRegisterLeft] = useState("0px");
  const [signInLeft, setSignInLeft] = useState("400px");

  function RegisterSlideChange() {
    setRegisterLeft("0px");
    setSignInLeft("400px");
  }
  function SignInSlideChange() {
    setRegisterLeft("-400px");
    setSignInLeft("0px");
  }

  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-content-center">
        <div className="d-flex flex-column justify-content-center align-self-center">
          {/*Toggle button */}

          <div className="selection">
            <ul
              className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
              id="pillNav2"
              role="tablist"
              style={{
                "--bs-nav-link-color": "var(--bs-white)",
                "--bs-nav-pills-link-active-color": "var(--bs-primary)",
                "--bs-nav-pills-link-active-bg": "var(--bs-white)",
              }}
            >
              <li className="nav-item" role="presentation">
                <button
                className="nav-link active rounded-5"
                  onClick={() => RegisterSlideChange()}
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Register
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-5"
                  id="signBtn"
                  onClick={() => SignInSlideChange()}
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
          {/*End fo toggle button code */}

          <div className="view-board d-flex justify-content-center overflow-hidden">
            {/*Register form*/}
            <div
              className="view-slide login-cards px-5 d-flex justify-content-center"
              style={{ left: registerLeft }}
            >
              <div className="d-flex flex-column">
                <h1 className="display-5 lh-1 text-body-emphasis justify-content-center mt-2">
                  Welcome
                </h1>
                <div className="my-4">
                  <form>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label" htmlFor="">
                        First Name
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label" htmlFor="">
                        Last Name
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label" htmlFor="">
                        Date of Birth
                      </label>
                      <input className="form-control" type="date" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label" htmlFor="">
                        ID Number
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label" htmlFor="">
                        Address
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label" htmlFor="">
                        TP number
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label" htmlFor="">
                        Email
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-50 form-label me-5" htmlFor="">
                        Password
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="d-flex flex-row mb-2">
                      <label className="w-75 form-label" htmlFor="">
                        Confirm Password
                      </label>
                      <input className="h-50 form-control" type="text" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn bg-white border-primary btn-md px-3 mb-2 me-5">
                        Reset
                      </button>
                      <button className="btn bg-primary btn-md px-3 mb-2 me-2">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*Sign up form*/}
            <div
              className="view-slide login-cards py-1 px-1 d-flex justify-content-center"
              style={{ left: signInLeft }}
            >
              <div className="d-flex flex-column">
                <h1 className="display-5 lh-1 text-body-emphasis justify-content-center mt-5">
                  Welcome Back
                </h1>
                <div className="my-2 mx-4 py-5">
                  <form>
                    <div className="d-flex flex-column mb-4 form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="NIC"
                        type="text"
                      />
                      <label for="floatingInput">NIC</label>
                    </div>
                    <div className="d-flex flex-column mb-4 form-floating">
                      <input
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        type="text"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div>
                      <p className="mb-0">Don't have an account</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn bg-white border-primary btn-md px-3 mb-2 me-5">
                        Reset
                      </button>
                      <button className="btn bg-primary btn-md px-3 mb-2 me-2">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
