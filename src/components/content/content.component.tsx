import { motion } from 'framer-motion';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './content.style.css';

interface IMenuBarProps {
	barActive: boolean;
	menuActive: boolean;
}

const Content: FC<IMenuBarProps> = ({ barActive, menuActive }: IMenuBarProps) => {
    return (
        <div className={`art-content ${ barActive || menuActive ? 'art-active' : '' }`}>

			<div className="art-curtain"></div>

			<div className="art-top-bg" style={{}}>
				<div className="art-top-bg-overlay"></div>
			</div>

			<motion.div
				className="transition-fade"
				id="swup"
				initial={{ scale: 0.95, opacity: 0.5 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<div id="scrollbar" className="art-scroll-frame">
					<Outlet />
				</div>
			</motion.div>
        </div>
    );
};

export default Content;
