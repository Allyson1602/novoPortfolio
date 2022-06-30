import { FC } from "react";

import "./portfolio.style.css";
import igniteLab from "../../../issets/images/portfolio/ignite-lab.png";
import pizzaria from "../../../issets/images/portfolio/pizzaria.png";
import museuNacional from "../../../issets/images/portfolio/museu-nacional.png";
import conversorMoeda from "../../../issets/images/portfolio/conversor-moeda.png";
import anizia from "../../../issets/images/portfolio/anizia.png";
import { motion } from "framer-motion";

const Portfolio: FC = () => {
    return (
        <motion.div
            className="transition-fade"
            id="swup"
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container-fluid portfolio">
                <div className="row p-30-0">
                    <div className="col-lg-12">
                        <div className="art-filter mb-30">
                            <p className="title">Páginas Web</p>
                        </div>
                    </div>

                    <div className="art-grid art-grid-3-col art-gallery">
                        <div className="art-grid-item">
                            <div className="art-a art-portfolio-item-frame art-horizontal">
                                <img src={igniteLab} alt="item ignite Lab" />
                            </div>
                            <div className="art-item-description">
                                <h5 className="mb-15">Ignite Lab</h5>
                                <div className="mb-15">Sistema de videoaulas e desenvolvido com a Rocketseat.</div>
                                <a href="https://ignite-lab-react-bice.vercel.app/" className="art-link art-color-link art-w-chevron" target="_blank" rel="noreferrer">Ver mais</a>
                            </div>
                        </div>
                        <div className="art-grid-item">
                            <div className="art-a art-portfolio-item-frame art-horizontal">
                                <img src={pizzaria} alt="item pizzaria" />
                            </div>
                            <div className="art-item-description">
                                <h5 className="mb-15">Pizzaria</h5>
                                <div className="mb-15">Site de restaurante de pizzas.</div>
                                <a href="https://allyson1602.github.io/pizzaria/" className="art-link art-color-link art-w-chevron" target="_blank" rel="noreferrer">Ver mais</a>
                            </div>
                        </div>
                        <div className="art-grid-item">
                            <div className="art-a art-portfolio-item-frame art-horizontal">
                                <img src={museuNacional} alt="item museu nacional" />
                            </div>
                            <div className="art-item-description">
                                <h5 className="mb-15">Museu Nacional</h5>
                                <div className="mb-15">Site do Museu Nacional fictício.</div>
                                <a href="https://allyson1602.github.io/museuNacional/" className="art-link art-color-link art-w-chevron" target="_blank" rel="noreferrer">Ver mais</a>
                            </div>
                        </div>
                        <div className="art-grid-item">
                            <div className="art-a art-portfolio-item-frame art-horizontal">
                                <img src={conversorMoeda} alt="item antigo portfólio" />
                            </div>
                            <div className="art-item-description">
                                <h5 className="mb-15">Conversor de moeda</h5>
                                <div className="mb-15">Site que converte valor das principais moedas.</div>
                                <a href="https://conversor-moeda-jade.vercel.app/" className="art-link art-color-link art-w-chevron" target="_blank" rel="noreferrer">Ver mais</a>
                            </div>
                        </div>
                        <div className="art-grid-item">
                            <div className="art-a art-portfolio-item-frame art-horizontal">
                                <img src={anizia} alt="item Portfólio Anizia" />
                            </div>
                            <div className="art-item-description">
                                <h5 className="mb-15">Portfólio Anizia</h5>
                                <div className="mb-15">Portfólio de uma profissional da saúde.</div>
                                <a href="https://allyson1602.github.io/portfolio-anizia/" className="art-link art-color-link art-w-chevron" target="_blank" rel="noreferrer">Ver mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;
