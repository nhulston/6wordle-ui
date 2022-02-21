import React, {useEffect, useState} from 'react';
import {NavbarStyle, NavIcon, Title} from "./Navbar.style";
import {FaChartBar, FaQuestionCircle} from "react-icons/fa";
import 'reactjs-popup/dist/index.css';
import About from "./About";
import {StyledPopup} from "./Popup.style";
import {toast} from "react-toastify";

const Navbar = () => {
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        }, 1000)
    }, [])

    return (
        <NavbarStyle>
            <StyledPopup
              open={show}
              trigger={<NavIcon><FaQuestionCircle/></NavIcon>}
              modal>
                <About/>
            </StyledPopup>
            <Title>
                6Wordle
            </Title>
            <NavIcon onClick={() => toast.info('Coming soon', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })}>
                <FaChartBar/>
            </NavIcon>
        </NavbarStyle>
    );
};

export default Navbar;
