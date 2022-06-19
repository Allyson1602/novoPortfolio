import Counter from 'components/counter/counter.component';
import TextTyping from 'components/tools/text-typing/text-typing.component';
import { DownloadSimple } from 'phosphor-react';
import { FC } from 'react';
import './content.style.css';

const Content: FC = () => {
    return (
        <div className="art-content">

          <div className="art-curtain"></div>

          <div className="art-top-bg" style={{}}>
            <div className="art-top-bg-overlay"></div>
          </div>

          <div className="transition-fade" id="swup">

            <div id="scrollbar" className="art-scroll-frame">

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
                            &lt;<i>code</i>&gt;Eu desenvolvo

                            <span
                              className="txt-rotate" 
                            >
                              <TextTyping texts={["facilidade", "agilidade", "arte", "qualidade", "renda"]} />
                            </span>
                            
                            &lt;/<i>code</i>&gt;
                          </div>
                          <div className="art-buttons-frame">
                            <a href="portfolio-3-col-masonry.html" className="art-btn art-btn-md"><span>Ver trabalhos</span></a>

                            <div className="art-links-frame p-15-15">
                              <a href="files/cv.txt" className="art-link" download data-no-swup>Baixar currículo <DownloadSimple size={15} weight="bold" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <Counter />

              <div className="container-fluid">

                <div className="row">

                  <div className="col-lg-12">

                    <div className="art-section-title">
                      <div className="art-title-frame">
                        <h4>My Services</h4>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">

                    <div className="art-a art-service-icon-box">
                      <div className="art-service-ib-content">
                        <h5 className="mb-15">Web Development</h5>
                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                        <div className="art-buttons-frame"><a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a></div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">

                    <div className="art-a art-service-icon-box">
                      <div className="art-service-ib-content">
                        <h5 className="mb-15">UI/UX Design</h5>
                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                        <div className="art-buttons-frame"><a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a></div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">

                    <div className="art-a art-service-icon-box">
                      <div className="art-service-ib-content">
                        <h5 className="mb-15">Sound Design</h5>
                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                        <div className="art-buttons-frame"><a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a></div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">

                    <div className="art-a art-service-icon-box">
                      <div className="art-service-ib-content">
                        <h5 className="mb-15">Game Design</h5>
                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                        <div className="art-buttons-frame"><a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a></div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4 col-md-6">

                    <div className="art-a art-service-icon-box">
                      <div className="art-service-ib-content">
                        <h5 className="mb-15">Advertising</h5>
                        <div className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</div>
                        <div className="art-buttons-frame"><a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a></div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="container-fluid">

                <div className="row p-0-0">

                  <div className="col-lg-12">

                    <div className="art-section-title">
                      <div className="art-title-frame">
                        <h4>Price Plans</h4>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4">

                    <div className="art-a art-price">
                      <div className="art-price-body">
                        <h5 className="mb-30">Starter Price</h5>
                        <div className="art-price-cost">
                          <div className="art-number">FREE<sup>*</sup></div>
                        </div>
                        <ul className="art-price-list">
                          <li>Ui Design</li>
                          <li>Web Development</li>
                          <li className="art-empty-item">Logo design</li>
                          <li className="art-empty-item">SEO optimization</li>
                          <li className="art-empty-item">Wordpress integration</li>
                        </ul>
                        <a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a>
                        <div className="art-asterisk"><sup>*</sup>Free only when ordering paid services</div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4">

                    <div className="art-a art-price art-popular-price">
                      <div className="art-price-body">
                        <h5 className="mb-30">Hourly payment</h5>
                        <div className="art-price-cost">
                          <div className="art-number"><span>$</span>29<span>h</span></div>
                        </div>
                        <ul className="art-price-list">
                          <li>Ui Design</li>
                          <li>Web Development</li>
                          <li>Logo design</li>
                          <li className="art-empty-item">SEO optimization</li>
                          <li className="art-empty-item">Wordpress integration</li>
                        </ul>
                        <a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4">

                    <div className="art-a art-price">
                      <div className="art-price-body">
                        <h5 className="mb-30"> Full time</h5>
                        <div className="art-price-cost">
                          <div className="art-number"><span>$</span>2999<span>m</span></div>
                        </div>
                        <ul className="art-price-list">
                          <li>Ui Design</li>
                          <li>Web Development</li>
                          <li>Logo design</li>
                          <li>SEO optimization</li>
                          <li>Wordpress integration</li>
                        </ul>
                        <a href="contact.html" className="art-link art-color-link art-w-chevron">Order now</a>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="container-fluid">

                <div className="row">

                  <div className="col-lg-12">

                    <div className="art-section-title">
                      <div className="art-title-frame">
                        <h4>Recommendations</h4>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-12">

                    <div className="swiper-container art-testimonial-slider" style={{overflow: 'visible'}}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">

                          <div className="art-a art-testimonial">
                            <div className="testimonial-body">
                              <img className="art-testimonial-face" src="img/testimonials/face-1.jpg" alt="face" />
                              <h5>Paul Trueman</h5>
                              <div className="art-el-suptitle mb-15">Template author</div>
                              <div className="mb-15">Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur!
                                This is easily a 5 star freelancer.</div>
                            </div>
                            <div className="art-testimonial-footer">
                              <div className="art-left-side">
                                <ul className="art-star-rate">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                </ul>
                              </div>
                              <div className="art-right-side">

                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="swiper-slide">

                          <div className="art-a art-testimonial">
                            <div className="testimonial-body">
                              <img className="art-testimonial-face" src="img/testimonials/face-2.jpg" alt="face" />
                              <h5>Paul Trueman</h5>
                              <div className="art-el-suptitle mb-15">Template author</div>
                              <div className="mb-15">Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur!
                                This is easily a 5 star freelancer.</div>
                            </div>
                            <div className="art-testimonial-footer">
                              <div className="art-left-side">
                                <ul className="art-star-rate">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li className="art-empty-item"><i className="fas fa-star"></i></li>
                                </ul>
                              </div>
                              <div className="art-right-side">

                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="swiper-slide">

                          <div className="art-a art-testimonial">
                            <div className="testimonial-body">
                              <img className="art-testimonial-face" src="img/testimonials/face-3.jpg" alt="face" />
                              <h5>Paul Trueman</h5>
                              <div className="art-el-suptitle mb-15">Template author</div>
                              <div className="mb-15">Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur!
                                This is easily a 5 star freelancer.</div>
                            </div>
                            <div className="art-testimonial-footer">
                              <div className="art-left-side">
                                <ul className="art-star-rate">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                </ul>
                              </div>
                              <div className="art-right-side">

                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="swiper-slide">

                          <div className="art-a art-testimonial">
                            <div className="testimonial-body">
                              <img className="art-testimonial-face" src="img/testimonials/face-4.jpg" alt="face" />
                              <h5>Paul Trueman</h5>
                              <div className="art-el-suptitle mb-15">Template author</div>
                              <div className="mb-15">Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur!
                                This is easily a 5 star freelancer.</div>
                            </div>
                            <div className="art-testimonial-footer">
                              <div className="art-left-side">
                                <ul className="art-star-rate">
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                  <li><i className="fas fa-star"></i></li>
                                </ul>
                              </div>
                              <div className="art-right-side">

                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>

                  <div className="col-lg-12">

                    <div className="art-slider-navigation">

                      <div className="art-sn-left">

                        <div className="swiper-pagination"></div>

                      </div>

                      <div className="art-sn-right">

                        <div className="art-slider-nav-frame">
                          <div className="art-slider-nav art-testi-swiper-prev"><i className="fas fa-chevron-left"></i></div>
                          <div className="art-slider-nav art-testi-swiper-next"><i className="fas fa-chevron-right"></i></div>
                        </div>

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

              <div className="container-fluid">

                <footer>
                  <div className="art-copy">© 2021 Artur Carter</div>
                  <div>Template author:&#160; <a href="https://themeforest.net/user/millerdigitaldesign" target="_blank" data-no-swup rel="noreferrer">Nazar Miller</a></div>
                </footer>

              </div>

            </div>

          </div>

        </div>
    );
};

export default Content;
