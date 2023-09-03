import React from "react";
import Navbar from "../components/Navbar/navbar.component";

function DefaultLayout(props){
    return(
        <div>
            <Navbar />
            {props.children}
        </div>
    );
}

export default DefaultLayout;