import React from "react";

import plus from "./icons/plus-circle.svg";

function ItemsModal(props) {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#newItem"
        >
          Create <img src={plus} />
        </button>

        <div
          className="modal fade"
          id="newItem"
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
                  Create Post
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-wrap">
                <form action="">
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Category
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Name
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Enter item picture
                    </label>
                    <input className="form-control" type="file" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Name
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Name
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Name
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Name
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Name
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="mb-2 d-flex flex-row">
                    <label className="w-75 form-label" htmlFor="">
                      Name
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Create post
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsModal;
