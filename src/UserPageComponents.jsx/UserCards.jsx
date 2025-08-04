import React from "react";

import ItemCardSmall from "../component/ItemCardSmall";
import ItemModal from "./ItemModal";
import UserProfileCard from "./UserProfileCard";

function UserCards(props) {
  return (
    <>
      <div>
        <div className="d-flex flex-lg-row flex-sm-column overflow-hidden">
          <div className="w-100 d-flex flex-lg-row flex-sm-column">
            <UserProfileCard/>
            {/*user Item list */}
            <div className="h-100 d-flex flex-column bg-dark rounded-4 flex-grow-1">
              <div className="d-flex flex-wrap bg-white h-50 border rounded-top-4 p-3">
                <h3 className="fs-4">Purchased</h3>
                <div className="w-100 d-flex flex-row">
                  <ItemCardSmall />
                  <ItemCardSmall />
                </div>
              </div>
              <div className="d-flex flex-wrap bg-white h-50 border rounded-bottom-4 p-3">
                <h3 className="fs-4">Bidded</h3>
                <div className="w-100 d-flex flex-row">
                  <ItemCardSmall />
                  <ItemCardSmall />
                  <ItemModal/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*items */}
        <div className="d-flex ps-5 pt-4 flex-column border rounded-4">
          <h2 className="fs-2">Items</h2>
          <form className="d-flex flex-row">
            <input
              className="form-control w-25"
              type="text"
              placeholder="search by filter"
            />
            <button className="btn bg-primary">Search</button>
          </form>
          <div className="d-flex flex-wrap pt-3">
            <ItemCardSmall />
            <ItemCardSmall />
            <ItemCardSmall />
            <ItemCardSmall />
            <ItemCardSmall />
          </div>
        </div>
      </div>

      
    </>
  );
}

export default UserCards;
