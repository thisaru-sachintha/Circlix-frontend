import React from "react";

function UserProfileCard(props) {

  const userFullName=props.fName+" "+props.lName;
  const nDays=36;
  return (
    <>
      <div className="card rounded-4  d-flex justify-content-center flex-lg-column flex-sm-row col-lg-2 me-1">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div
            className="m-3 bg-primary rounded-circle"
            style={{ width: "120px", height: "120px" }}
          ></div>
        </div>
        <div class="card-body d-flex flex-column justify-content-center col-lg-12 col-sm-6">
          <h5 class="card-title text-center">{props.userName}</h5>
          <p class="card-text text-center">{userFullName}</p>
        </div>
        <ul class="list-group list-group-flush  d-flex flex-wrap justify-content-center col-lg-12 col-sm-4 border">
          <li class="list-group-item text-center">
            {props.nic}
          </li>
          <li class="list-group-item  text-center">
            {props.dob}
          </li>
          <li class="list-group-item  text-center">
            {props.address}
          </li>
          <li class="list-group-item  text-center">
            {props.email}
          </li>
          <li class="list-group-item  text-center">
            {props.tpNumber}
          </li>
        </ul>
        <div class="card-body text-center">
          <p>Last logged in {nDays} days ago</p>
        </div>
      </div>
    </>
  );
}

export default UserProfileCard;
