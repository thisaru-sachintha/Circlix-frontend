import React from "react";

function ItemsDetailModal(props) {

    const target="#"+props.id;
    const targetParent="#"+props.parentId;

    function Test(e) {
      e.preventDefault();
      console.log(target);
    }
    return(
        <>
        <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={target}
        >
          Details
        </button>

        <div
          className="modal fade"
          id={props.id}
          tabIndex="-1"
          aria-labelledby="exampleModalFullscreenSmLabel"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-4"
                  id="exampleModalFullscreenSmLabel"
                >
                  {props.heading}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-wrap">
                <img src={props.imgSrc} />
              </div>
              <div className="modal-footer">
                {props.parentId==="" ? <button type="button"  onClick={(e)=>Test(e)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Bids" >Back</button> : <h2>{targetParent}</h2>}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                 
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );

    ItemsDetailModal.propTypes ={
    id: Proptypes.string,
    parentId: PropTypes.string,
  }
  ItemsDetailModal.defaultProps ={
    id: "Item1",
    parentId: "",
  }
}

export default ItemsDetailModal;