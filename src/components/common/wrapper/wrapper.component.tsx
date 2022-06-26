import Bar from 'components/bar/bar.component';
import Content from 'components/content/content.component';
import MenuBar from 'components/menu-bar/menu-bar.component';
import { FC, useState } from 'react';
import './wrapper.style.css';

const Wrapper: FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [barActive, setBarActive] = useState(false);

    return (
        <div className="art-app-wrapper">
          <div className="art-app-container">
            <Bar
              barActive={barActive}
              setBarActive={(status: boolean) => setBarActive(status)}
              menuActive={menuActive}
            />

            <Content menuActive={menuActive} barActive={barActive} />

            <MenuBar
              menuActive={menuActive}
              setMenuActive={(status: boolean) => setMenuActive(status)}
              barActive={barActive}
            />
          </div>
        </div>
    );
};

export default Wrapper;
