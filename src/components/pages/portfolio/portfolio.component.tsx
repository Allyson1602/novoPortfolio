import { FC } from "react";

import "./portfolio.style.css";

const Portfolio: FC = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row p-30-0">
                    <div className="col-lg-12">
                        <div className="art-filter mb-30">
                            <a href="#" data-filter=".webTemplates" className="art-link">Páginas Web</a>
                        </div>
                    </div>

                    <div className="art-grid art-grid-3-col art-gallery">

                        <div className="art-grid-item webTemplates">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/1.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                                <img src="img/works/thumbnail/1.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item logos">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/2.jpg" className="art-a art-portfolio-item-frame art-vertical">
                                <img src="img/works/thumbnail/2.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item drawings">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/3.jpg" className="art-a art-portfolio-item-frame art-square">
                                <img src="img/works/thumbnail/3.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item ui">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/4.jpg" className="art-a art-portfolio-item-frame art-vertical">
                                <img src="img/works/thumbnail/4.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item webTemplates">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/5.jpg" className="art-a art-portfolio-item-frame art-square">
                                <img src="img/works/thumbnail/5.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item logos">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/6.jpg" className="art-a art-portfolio-item-frame art-vertical">
                                <img src="img/works/thumbnail/6.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item drawings">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/7.jpg" className="art-a art-portfolio-item-frame art-square">
                                <img src="img/works/thumbnail/7.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <div className="mb-15">Sit amet, consectetur adipisicing elit. Quas, architecto.</div>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item ui">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/8.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                                <img src="img/works/thumbnail/8.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item webTemplates">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/9.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                                <img src="img/works/thumbnail/9.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item logos">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/10.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                                <img src="img/works/thumbnail/10.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>

                        <div className="art-grid-item drawings">
                            <a data-fancybox="gallery" data-no-swup href="img/works/original-size/11.jpg" className="art-a art-portfolio-item-frame art-horizontal">
                                <img src="img/works/thumbnail/11.jpg" alt="item" />
                                <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">Project title</h5>
                                <a href="portfolio-single.html" className="art-link art-color-link art-w-chevron">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-lg-3">
                        <img className="art-brand" src="img/brands/1.png" alt="brand" />
                    </div>

                    <div className="col-6 col-lg-3">
                        <img className="art-brand" src="img/brands/2.png" alt="brand" />
                    </div>

                    <div className="col-6 col-lg-3">
                        <img className="art-brand" src="img/brands/3.png" alt="brand" />
                    </div>

                    <div className="col-6 col-lg-3">
                        <img className="art-brand" src="img/brands/1.png" alt="brand" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
