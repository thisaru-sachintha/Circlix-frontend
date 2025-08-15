import React from "react";

function UserFooter() {
  return (
    <>
      <div className="container"> 
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Bids
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                My Posts
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Purchases
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Explore
              </a>
            </li>
          </ul>

          <p className="text-center text-body-secondary">© 2025 Circlix</p>
        </footer>
      </div>
    </>
  );
}

export default UserFooter;
