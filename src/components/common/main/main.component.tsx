import { FC } from "react";
import MobileTopBar from "../mobile-top-bar/mobile-top-bar.component";
import Preloader from "../preloader/preloader.component";
import Wrapper from "../wrapper/wrapper.component";

import './main.style.css'

export const Main: FC = () => {
    return (
        <div className="art-app">
            <MobileTopBar />
            <Wrapper />
            <Preloader />
        </div>
    );
};
