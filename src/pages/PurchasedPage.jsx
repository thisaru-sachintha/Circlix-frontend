import React from "react";

import Navbar from "../headerComponents/navbar";
import PuerchasedView from "../UserPageComponents.jsx/PurchasedView";

function PurchasedPage(params) {
    
    return(
        <>
        <Navbar/>
        <PuerchasedView/>
        </>
    );
}

export default PurchasedPage;