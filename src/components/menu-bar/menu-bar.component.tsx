import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './menu-bar.style.css';

interface IMenuBarProps {
	barActive: boolean;
	menuActive: boolean;
	setMenuActive: (status: boolean) => void;
}

const MenuBar: FC<IMenuBarProps> = ({ barActive, menuActive, setMenuActive }: IMenuBarProps) => {
    let location = useLocation();
  
	let getCurrentPageText = () => {
		switch(location.pathname) {
			case "/":
				return "Home";

			case "/portfolio":
				return "Portfólio";

			case "/contact":
				return "Contato";
			
			default:
				return "";
		}
	};

    return (
        <div className={`art-menu-bar ${ menuActive ? 'art-active' : '' }`}>

          <div className="art-menu-bar-frame">

			{!barActive &&
				<div className="art-menu-bar-header">
				<button className={`art-menu-bar-btn ${ menuActive ? 'art-active' : '' }`} onClick={() => setMenuActive(!menuActive)}>
					<span></span>
				</button>
				</div>
			}

            <div className="art-current-page">{getCurrentPageText()}</div>

            <div className="art-scroll-frame">
              <nav id="swupMenu">
                <ul className="main-menu">
					<li className="menu-item">
						<NavLink
							to="/"
							className={({ isActive }) => isActive ? 'current-menu-item' : ''}
							onClick={() => setMenuActive(!menuActive)}
						>Home</NavLink>
					</li>

					<li className="menu-item">
						<NavLink
							to="/portfolio"
							className={({ isActive }) => isActive ? 'current-menu-item' : ''}
							onClick={() => setMenuActive(!menuActive)}
						>Portólio</NavLink>
					</li>

					<li className="menu-item">
						<NavLink
							to="/contact"
							className={({ isActive }) => isActive ? 'current-menu-item' : ''}
							onClick={() => setMenuActive(!menuActive)}
						>Contato</NavLink>
					</li>
                </ul>
              </nav>

              {/* <ul className="art-language-change">
                <li><Link to="#.">EN</Link></li>
                <li className="art-active-lang"><Link to="#.">BR</Link></li>
              </ul> */}
            </div>
          </div>
        </div>
    );
};

export default MenuBar;
