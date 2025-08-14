import React from "react";

function TypeSelector(props) {
    
    const bid=<ItemsDetailModal imgSrc={props.imgSrc} parentId="Bids" id="item1" heading={props.heading}/>;
    const pur=<ItemsDetailModal imgSrc={props.imgSrc} parentId="Purchased" id="item1" heading={props.heading}/>;

    return(props.parentId === "Purchased"? pur:bid);
}

export default TypeSelector;