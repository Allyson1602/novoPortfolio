import { FC } from "react";

import "./counter.style.css";

const Counter: FC = () => {
    return (
        <div className="container-fluid counter">

          <div className="row p-30-0">

            <div className="col-md-3 col-6">

              <div className="art-counter-frame">
                <div className="art-counter-box">
                  <span className="art-counter">3</span>
                </div>
                <h6>Anos de Experiência</h6>
              </div>

            </div>

            <div className="col-md-3 col-6">

              <div className="art-counter-frame">
                <div className="art-counter-box">
                  <span className="art-counter">5</span>
                </div>
                <h6>Projetos Completos</h6>
              </div>

            </div>

            <div className="col-md-3 col-6">

              <div className="art-counter-frame">
                <div className="art-counter-box">
                  <span className="art-counter">3</span>
                </div>
                <h6>Clientes Felizes</h6>
              </div>

            </div>

            <div className="col-md-3 col-6">

              <div className="art-counter-frame">
                <div className="art-counter-box">
                  <span className="art-counter">0</span>
                </div>
                <h6>Prêmios</h6>
              </div>

            </div>

          </div>

        </div>
    );
};

export default Counter;
