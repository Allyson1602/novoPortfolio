import { easeQuadInOut } from 'd3-ease';
import { LinkedinLogo, GithubLogo, InstagramLogo, DotsThreeOutlineVertical, ArrowsOut, Check } from 'phosphor-react';
import { Line } from 'rc-progress';
import { FC } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

import AvatarImage from '../../issets/images/face-1.jpg';

import './bar.style.css';
import AnimatedProgressProvider from './react-circular-progressbar.config';
import './react-circular-progressbar.style.css';

interface IBarProps {
	menuActive: boolean;
	barActive: boolean;
	setBarActive: (status: boolean) => void;
}

const Bar: FC<IBarProps> = ({ menuActive, barActive, setBarActive }: IBarProps) => {

    return (
        <div className={`art-info-bar ${ barActive ? 'art-active' : '' }`}>
          <div className="art-info-bar-frame">

			{!menuActive &&
				<div className="art-info-bar-header">
					<button onClick={() => setBarActive(!barActive)} className="art-info-bar-btn">
						<DotsThreeOutlineVertical size={20} weight="fill" />
					</button>
				</div>
			}

            <div className="art-header">
              <div className="art-avatar">
                <div className="art-avatar-curtain">
                  <img src={AvatarImage} alt="avatar" />
                  <ArrowsOut size={22} weight="fill" />
                </div>
              </div>
              <h5 className="art-name mb-10"><Link to="home.html">Allyson Athyrson</Link></h5>
              <div className="art-sm-text">Full-stack Developer</div>
            </div>


			{/* <Scrollbars style={{ width: 500, height: 300 }}> */}
				<div id="scrollbar2" className="art-scroll-frame">

				<div className="art-table p-15-15">
					<ul>
					<li>
						<h6>País:</h6><span>Brazil</span>
					</li>
					<li>
						<h6>Cidade:</h6><span>Brasília/DF</span>
					</li>
					<li>
						<h6>Idade:</h6><span>23</span>
					</li>
					</ul>
				</div>

				<div className="art-ls-divider"></div>

				<div className="art-lang-skills p-30-15">

					<div className="art-lang-skills-item">
										<div id="circleprog1" className="art-cirkle-progress">
						<AnimatedProgressProvider
						valueStart={0}
						valueEnd={100}
						duration={1.4}
						easingFunction={easeQuadInOut}
						repeat
						>
						{value => {
							const roundedValue = Math.round(value);
							return (
							<CircularProgressbar
								value={value}
								text={`${roundedValue}%`}
								styles={buildStyles({ pathTransition: "none" })}
							/>
							);
						}}
						</AnimatedProgressProvider>
										</div>
										<h6>Português</h6>
					</div>

					<div className="art-lang-skills-item">
										<div id="circleprog2" className="art-cirkle-progress">
						<AnimatedProgressProvider
						valueStart={0}
						valueEnd={50}
						duration={1.4}
						easingFunction={easeQuadInOut}
						repeat
						>
						{value => {
							const roundedValue = Math.round(value);
							return (
							<CircularProgressbar
								value={value}
								text={`${roundedValue}%`}
								styles={buildStyles({ pathTransition: "none" })}
							/>
							);
						}}
						</AnimatedProgressProvider>
										</div>
					<h6>Inglês</h6>
					</div>

				</div>

				<div className="art-ls-divider"></div>

				<div className="art-hard-skills p-30-15">

					<div className="art-hard-skills-item">
					<div className="art-skill-heading">
						<h6>html</h6>
					</div>
					<div className="art-line-progress">
											<div id="lineprog1">
						<AnimatedProgressProvider
							valueStart={0}
							valueEnd={90}
							duration={1.4}
							easingFunction={easeQuadInOut}
							repeat
						>
							{value => {
							return (
								<Line
								percent={value}
								strokeWidth={2}
								strokeColor="#D3D3D3"
								/>
							);
							}}
						</AnimatedProgressProvider>
												<div className="progressbar-text">90%</div>
											</div>
										</div>
					</div>

					<div className="art-hard-skills-item">
					<div className="art-skill-heading">
						<h6>CSS</h6>
					</div>
					<div className="art-line-progress">
						<div id="lineprog2">
						<AnimatedProgressProvider
							valueStart={0}
							valueEnd={95}
							duration={1.4}
							easingFunction={easeQuadInOut}
							repeat
						>
							{value => {
							return (
								<Line
								percent={value} 
								strokeWidth={2} 
								strokeColor="#D3D3D3"
								/>
							);
							}}
						</AnimatedProgressProvider>
												<div className="progressbar-text">95%</div>
											</div>
					</div>
					</div>

					<div className="art-hard-skills-item">
					<div className="art-skill-heading">
						<h6>Javascript</h6>
					</div>
					<div className="art-line-progress">
						<div id="lineprog3">
						<AnimatedProgressProvider
							valueStart={0}
							valueEnd={90}
							duration={1.4}
							easingFunction={easeQuadInOut}
							repeat
						>
							{value => {
							return (
								<Line
								percent={value} 
								strokeWidth={2} 
								strokeColor="#D3D3D3"
								/>
							);
							}}
						</AnimatedProgressProvider>
												<div className="progressbar-text">90%</div>
											</div>
					</div>
					</div>

					<div className="art-hard-skills-item">
					<div className="art-skill-heading">
						<h6>Wordpress</h6>
					</div>
					<div className="art-line-progress">
						<div id="lineprog4">
						<AnimatedProgressProvider
							valueStart={0}
							valueEnd={80}
							duration={1.4}
							easingFunction={easeQuadInOut}
							repeat
						>
							{value => {
							return (
								<Line
								percent={value} 
								strokeWidth={2} 
								strokeColor="#D3D3D3"
								/>
							);
							}}
						</AnimatedProgressProvider>
												<div className="progressbar-text">80%</div>
											</div>
					</div>
					</div>

				</div>

				<div className="art-ls-divider"></div>

				<ul className="art-knowledge-list p-15-0">
					<li><Check size={12} weight="bold" />Git</li>
					<li><Check size={12} weight="bold" />Css, Sass, Styled</li>
					<li><Check size={12} weight="bold" />Bootstrap, MaterialUI</li>
					<li><Check size={12} weight="bold" />Node, Npm, ReactJS, Axios</li>
					<li><Check size={12} weight="bold" />Design Pattern, Solid, TDD</li>
				</ul>

				</div>
			{/* </Scrollbars> */}

            <div className="art-ls-social">
              <a href="https://www.linkedin.com/in/allyson-athyrson-487461109/" target="_blank" rel="noreferrer"><LinkedinLogo size={22} weight="fill" /></a>
              <a href="https://www.instagram.com/allysonathyrson/" target="_blank" rel="noreferrer"><InstagramLogo size={22} weight="fill" /></a>
              <a href="https://github.com/Allyson1602" target="_blank" rel="noreferrer"><GithubLogo size={22} weight="fill" /></a>
            </div>

          </div>
        </div>
    );
};

export default Bar;
