import React from "react";

function UserNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white" data-bs-theme="light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <div>
              <img src="src\assets\logo.png" height={"35px"} alt="" />
              <span> Circlix</span>
            </div>
          </a>

          <div
            className="offcanvas offcanvas-start bg-white"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h4 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="src\assets\logo.png" height={"35px"} alt="" />
                <span> Circlix</span>
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/user">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/bids">
                    Bids
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myposts">
                    My Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/purchases">
                    Purchases
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/explore">
                    Explore
                  </a>
                </li>
                <li className="nav-item">
                  <form action="/login">
                    <button className="btn bg-primary">Logout</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserNavbar;
