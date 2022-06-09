import { FC } from 'react';
import './preloader.style.css';

const Preloader: FC = () => {
    return (
        <div className="art-preloader">
            <div className="art-preloader-content">
                <h4>Artur Carter</h4>
                <div id="preloader" className="art-preloader-load"></div>
            </div>
        </div>
    );
};

export default Preloader;