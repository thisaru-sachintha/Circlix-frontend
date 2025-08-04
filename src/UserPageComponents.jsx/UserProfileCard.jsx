import React from "react";

function UserProfileCard(props) {
  return (
    <>
      <div className="card rounded-4  d-flex justify-content-center flex-lg-column flex-sm-row col-2 me-1">
        <div className="w-100 d-flex flex-wrap justify-content-center">
          <div
            className="m-3 bg-primary rounded-circle"
            style={{ width: "120px", height: "120px" }}
          ></div>
        </div>
        <div class="card-body  d-flex flex-wrap justify-content-center">
          <h5 class="card-title">UserName</h5>
          <p class="card-text">fName + lName</p>
        </div>
        <ul class="list-group list-group-flush  d-flex flex-wrap justify-content-center">
          <li class="list-group-item  d-flex flex-wrap justify-content-center">
            NIC number
          </li>
          <li class="list-group-item  d-flex flex-wrap justify-content-center">
            DOB
          </li>
          <li class="list-group-item  d-flex flex-wrap justify-content-center">
            Address
          </li>
          <li class="list-group-item  d-flex flex-wrap justify-content-center">
            Email
          </li>
          <li class="list-group-item  d-flex flex-wrap justify-content-center">
            TP number
          </li>
        </ul>
        <div class="card-body">
          <p>Last logged in 35 days ago</p>
        </div>
      </div>
    </>
  );
}

export default UserProfileCard;
