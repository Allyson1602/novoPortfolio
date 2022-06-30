import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './content.style.css';

interface IMenuBarProps {
	barActive: boolean;
	menuActive: boolean;
}

const Content: FC<IMenuBarProps> = ({ barActive, menuActive }: IMenuBarProps) => {
	const [unmounted, setUnmounted] = useState(false);
  
	useEffect(() => {
		setUnmounted(false);
  
		return () => {
			setUnmounted(true);
		}
	}, []);

    if(unmounted) return <></>;
	
    return (
        <div className={`art-content ${ barActive || menuActive ? 'art-active' : '' }`}>

			<div className="art-curtain"></div>

			<div className="art-top-bg" style={{}}>
				<div className="art-top-bg-overlay"></div>
			</div>

			<div id="scrollbar" className="art-scroll-frame">
				<Outlet />
			</div>
        </div>
    );
};

export default Content;
