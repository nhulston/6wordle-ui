import React from "react";
import {CountdownStyle} from "./MyCountdown.style";
import Countdown from "react-countdown";

const MyCountdown = () => {
    let now = new Date();
    let msTillTomorrow = 8.64e7 - (now % 8.64e7);
    console.log(msTillTomorrow);

    return (
        <CountdownStyle>
            <Countdown date={Date.now() + msTillTomorrow} />
        </CountdownStyle>
    );
};

export default MyCountdown;