import React from "react";

function ItemCardSmall(props) {
  return (
    <>
      <div className="card p-1 pb-0 me-2 mb-2" style={{width: "12rem",height:"12rem"}}>
        <div className="d-flex justify-content-center justify-content-center mt-1">
            <img src="src\assets\facebook.svg" style={{width: "6rem"}} className="card-img-top" alt="..." />
        </div>
        <div className="card-body p-1 ps-3">
          <h5 className="card-title">Item</h5>
          <button href="" className="btn btn-primary px-2 py-1 mt-0">
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCardSmall;
