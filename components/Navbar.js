import React from 'react';
import {NavbarStyle, NavIcon, Title} from "./Navbar.style";
import {FaChartBar, FaQuestionCircle} from "react-icons/fa";

const Navbar = () => {
    return (
        <NavbarStyle>
            <NavIcon>
                <FaQuestionCircle/>
            </NavIcon>
            <Title>
                6Wordle
            </Title>
            <NavIcon>
                <FaChartBar/>
            </NavIcon>
        </NavbarStyle>
    );
};

export default Navbar;
