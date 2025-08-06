import React from "react";

import ItemsDetailModal from "./ItemsDetailModel";
import testImg from "./icons/arrow-right-circle.svg"

function ItemCardSmall(props) {
  return (
    <>
      <div className="card p-1 pb-0 me-2 mb-2" style={{width: "12rem",height:"12rem"}}>
        <div className="d-flex justify-content-center justify-content-center mt-1">
            <img src={testImg} style={{width: "6rem"}} className="card-img-top" alt="..." />
        </div>
        <div className="card-body p-1 ps-3">
          <h5 className="card-title">{props.itemName}</h5>
          <h5 className="card-title">{props.parentId}</h5>
          <ItemsDetailModal imgSrc={testImg} parentId={props.parentId} id="item1" heading={props.itemName}/>
        </div>
      </div>
    </> 
  );

  ItemCardSmall.propTypes ={
    itemName: Proptypes.string,
    parentId: PropTypes.string,
  }
  ItemCardSmall.defaultProps ={
    itemName: "Item",
    parentId: "",
  }
}

export default ItemCardSmall;
