import { CaretRight } from "phosphor-react";
import { FC } from "react";
import { Link } from "react-router-dom";

import "./services.style.css";

const Services: FC = () => {
    return (
        <div className="container-fluid services">
          <div className="row">
            <div className="col-lg-12">

              <div className="art-section-title">
                <div className="art-title-frame">
                  <h4>Meus Serviços</h4>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 job-develop">

              <div className="art-a art-service-icon-box">
                <div className="art-service-ib-content">
                  <h5 className="mb-15">Desenvolvedor Web</h5>
                  <div className="mb-15">Um desenvolvedor web realiza o desenvolvimento de websites na internet. Ele é o responsável por toda a estrutura de um determinado site. Ou seja, planeja, constrói e dá manutenção para tudo que roda em uma plataforma web.</div>
                  <div className="art-buttons-frame"><Link to="/contact" className="art-link art-color-link art-w-chevron">Peça agora <CaretRight size={12} weight="bold" /></Link></div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default Services;
