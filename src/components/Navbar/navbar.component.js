import React from "react";
import {BiChevronRight} from "react-icons/bi";

const NavSm = () => {
    return(
        <>
        <div>
            <div className="bg-sky-950	">
                <h3>It All Starts Here!</h3>
                <span>
                    Mumbai <BiChevronRight />
                </span>
            </div>
        </div>
        </>
    );
};

const NavMd = () => {
    
};

const NavLg = () => {};

const Navbar = () => {
    return(
        <>
        <nav>
            <div className="md:hidden">
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden">

            </div>
            <div className="hidden lg:flex">

            </div>
        </nav>
        </>
    );
};

export default Navbar;