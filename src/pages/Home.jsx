import './Home.css';
function Home() {
    return (
        <>
            <section className="banner_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div id="banner_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">New<br /> Model Cars</h1>
                                            <p className="banner_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt uolore
                                                magna aliqua. Ut enim ad minim veniam, quis non</p>
                                            <div className="form-group">
                                                <input type="text" className="update_mail" placeholder="Search here" name="Search here" />
                                                <div className="subscribe_bt"><a href="#"><i className="fa fa-arrow-right"
                                                    aria-hidden="true"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">New<br /> Model Cars</h1>
                                            <p className="banner_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt uolore
                                                magna aliqua. Ut enim ad minim veniam, quis non</p>
                                            <div className="form-group">
                                                <input type="text" className="update_mail" placeholder="Search here" name="Search here" />
                                                <div className="subscribe_bt"><a href="#"><i className="fa fa-arrow-right"
                                                    aria-hidden="true"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">New<br /> Model Cars</h1>
                                            <p className="banner_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt uolore
                                                magna aliqua. Ut enim ad minim veniam, quis non</p>
                                            <div className="form-group">
                                                <input type="text" className="update_mail" placeholder="Search here" name="Search here" />
                                                <div className="subscribe_bt"><a href="#"><i className="fa fa-arrow-right"
                                                    aria-hidden="true"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-md-6 padding_right0">
                            <div className="banner_img"><img src="images/banner-img.png" /></div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="about_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img"><img src="images/about.png" /></div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="about_taital">Acerca de Nosotros</h3>
                            <p className="about_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationconsectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation</p>
                            <div className="readmore_btn"><a href="#">Read More<span className="arrow_icon"><i className="fa fa-long-arrow-right"
                                aria-hidden="true"></i></span></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="models_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="models_taital">Nuestros Servicios</h1>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/alignment.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">01</span> New Carolo car</h3>
                                <p className="ullamco_text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Price</span> $30000.00</p>
                                    <div className="read_btn"><a href="#">Read More<span className="arrow_icon"><i
                                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">02</span> New Carolo car</h3>
                                <p className="ullamco_text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Price</span> $30000.00</p>
                                    <div className="read_btn"><a href="#">Read More<span className="arrow_icon"><i
                                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></a></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/scanner.png" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/battery.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">03</span> New Carolo car</h3>
                                <p className="ullamco_text">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Price</span> $30000.00</p>
                                    <div className="read_btn"><a href="#">Read More<span className="arrow_icon"><i
                                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose_section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <h1 className="rated_text"><span className="padding_10"><img src="images/icon-1.png" /></span>3700</h1>
                            <p className="house_text">Happy Clients</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h1 className="rated_text"><span className="padding_10"><img src="images/icon-2.png" /></span>5700</h1>
                            <p className="house_text">Vehicles In Stock</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h1 className="rated_text"><span className="padding_10"><img src="images/icon-3.png" /></span>124</h1>
                            <p className="house_text">Awards</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h1 className="rated_text"><span className="padding_10"><img src="images/icon-4.png" /></span>704</h1>
                            <p className="house_text">Dealer Branches</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="client_taital">¿Que dicen nuestros clientes?</h1>
                            <p className="client_text">It is a long established fact that a reader will be distracted by the readable c
                            </p>
                        </div>
                    </div>
                    <div className="customer_section_2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="box_main">
                                        <div className="customer_main">
                                            <div className="customer_left">
                                                <div className="customer_img"><img src="images/client-img.png" /></div>
                                            </div>
                                            <div className="customer_right">
                                                <h3 className="customer_name">DenoMark</h3>
                                                <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem
                                                    Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                                                    this the first true generator on the Internetanything embarrassing hidden in the middle
                                                    of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                                    chunks as necessary, making this the first true generator on the Internet</p>
                                                <div className="quick_icon"><img src="images/quick-icon.png" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="contact_taital">Get In Touch</h1>
                        </div>
                    </div>
                    <div className="contact_section_2">
                        <div className="mail_section map_form_container">
                            <form action="">
                                <input type="text" className="mail_text" placeholder="Name" name="Name" />
                                <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number" />
                                <input type="text" className="mail_text" placeholder="Email" name="Email" />
                                <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                                <div className="map_btn_main">
                                    <div className="send_bt"><a href="#">Send Now</a></div>
                                    <div className="map_bt"><a href="#" id="showMap">Map</a></div>
                                </div>
                            </form>
                            <div className="map_main map_container">
                                <div className="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                                        width="600" height="368" frameBorder="0"
                                        allowFullScreen=""></iframe>
                                    <div className="map_btn_main">
                                        <div className="map_bt d-flex justify-content-center w-100 map_center"><a href="#"
                                            id="showForm">Form</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;