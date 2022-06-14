import Bar from 'components/bar/bar.component';
import Content from 'components/content/content.component';
import MenuBar from 'components/menu-bar/menu-bar.component';
import { FC } from 'react';
import './wrapper.style.css';

const Wrapper: FC = () => {
    return (
        <div className="art-app-wrapper">
          <div className="art-app-container">
            <Bar />
            <Content />
            {/* <MenuBar /> */}
          </div>
        </div>
    );
};

export default Wrapper;
