import Counter from 'components/counter/counter.component';
import Footer from 'components/footer/footer.component';
import Services from 'components/services/services.component';
import TextTyping from 'components/tools/text-typing/text-typing.component';
import { motion } from 'framer-motion';
import { DownloadSimple } from 'phosphor-react';
import { FC } from "react";
import { Link } from 'react-router-dom';

import cv from "../../../issets/docs/cv.pdf";
import "./home.style.css";

const Home: FC = () => {
    return (
        <motion.div
            className="transition-fade"
            id="swup"
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container-fluid">

                <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                    <div className="col-lg-12">

                        <div className="art-a art-banner">
                            <div className="art-banner-back"></div>
                            <div className="art-banner-dec"></div>
                            <div className="art-banner-overlay">
                                <div className="art-banner-title">
                                    <h1 className="mb-15">Descubra o meu incrível <br />espaço de desenvolvimento!</h1>
                                    <div className="art-lg-text art-code mb-25">
                                        <span>&lt;<i>code</i>&gt;</span>
                                        
                                        <span className='text-code'>
                                            Eu desenvolvo
                                            <span
                                                className="txt-rotate" 
                                            >
                                                <TextTyping texts={["facilidade", "agilidade", "arte", "qualidade", "renda", "visibilidade"]} />
                                            </span>
                                        </span>
                                        
                                        <span>&lt;/<i>code</i>&gt;</span>
                                    </div>
                                    <div className="art-buttons-frame">
                                        <Link to="/portfolio" className="art-btn art-btn-md"><span>Ver trabalhos</span></Link>

                                        <div className="art-links-frame p-15-15">
                                            <a href={cv} className="art-link" download target="_blank" rel="noreferrer">Baixar currículo <DownloadSimple size={15} weight="bold" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Counter />

            <Services />

            <Footer />
        </motion.div>
    );
};

export default Home;
