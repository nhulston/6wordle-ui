import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Keyboard from "../components/Keyboard";
import {pickRandomWord} from "../util/WordleLogic";

export default function Home() {
    pickRandomWord();

    return (
        <>
            {/*<MyCountdown/>*/}
            <Navbar/>
            <Grid/>
            <Keyboard/>
        </>
    );
}
