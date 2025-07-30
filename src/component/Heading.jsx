import React from "react";

function Heading(props) {
  return (
    <>
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
        {props.textContent}
      </h1>
    </>
  );
}

export default Heading;
