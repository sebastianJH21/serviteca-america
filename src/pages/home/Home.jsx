import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <section className="banner_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="banner_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">Atención personalizada</h1>
                                            <p className="banner_text">Cada cliente y cada vehículo es único, y así los tratamos. Nos enfocamos en escuchar tus necesidades, asesorarte y brindarte soluciones a la medida, asegurando que siempre salgas con la tranquilidad de haber recibido el mejor servicio.</p>
                                            {/* <div className="form-group">
                                                <input type="text" className="update_mail" placeholder="Search here" name="Search here" />
                                                <div className="subscribe_bt"><Link to={'/contacto'}><i className="fa fa-arrow-right"
                                                    aria-hidden="true"></i></Link></div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">Transparencia<br /> y confianza</h1>
                                            <p className="banner_text">En nuestro taller creemos que la confianza se gana con claridad. Por eso explicamos cada reparación al detalle: qué falla tiene tu vehículo, por qué ocurrió y cómo puedes prevenirlo en el futuro. Aquí no hay sorpresas, solo honestidad y seguridad para ti.</p>
                                            {/* <div className="form-group">
                                                <input type="text" className="update_mail" placeholder="Search here" name="Search here" />
                                                <div className="subscribe_bt"><Link to={'/contacto'}><i className="fa fa-arrow-right"
                                                    aria-hidden="true"></i></Link></div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">Transparencia<br /> y confianza</h1>
                                            <p className="banner_text">En nuestro taller creemos que la confianza se gana con claridad. Por eso explicamos cada reparación al detalle: qué falla tiene tu vehículo, por qué ocurrió y cómo puedes prevenirlo en el futuro. Aquí no hay sorpresas, solo honestidad y seguridad para ti.</p>
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
                            <h1 className="models_taital">Acerca de Nosotros</h1>
                            <p className="about_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationconsectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation</p>
                            <div className="readmore_btn"><Link to={'/nosotros'}>Leer más<span className="arrow_icon"><i className="fa fa-long-arrow-right"
                                aria-hidden="true"></i></span></Link></div>
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
                                <h3 className="carolo_text"><span className="number_text">01</span> Alineación</h3>
                                <p className="ullamco_text">Aseguramos que las llantas de tu vehículo mantengan el ángulo correcto con respecto al suelo y entre sí. Una correcta alineación mejora la estabilidad, evita el desgaste irregular de las llantas y garantiza una conducción más segura y cómoda. </p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                    <div className="read_btn"><Link to={'/servicios'}>Leer más<span className="arrow_icon"><i
                                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2 escaner_section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/scanner.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">02</span> Escáner</h3>
                                <p className="ullamco_text">Contamos con equipos de diagnóstico computarizado que detectan fallas en los sistemas electrónicos de tu vehículo. El escáner nos permite identificar problemas de manera rápida y precisa, ahorrando tiempo y dinero en reparaciones.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                    <div className="read_btn"><Link to={'/servicios'}>Leer más<span className="arrow_icon"><i
                                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/battery.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">03</span> Baterías</h3>
                                <p className="ullamco_text">Realizamos pruebas, carga y reemplazo de baterías automotrices. Contamos con opciones de calidad para garantizar un encendido confiable y un óptimo funcionamiento del sistema eléctrico de tu vehículo.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                    <div className="read_btn"><Link to={'/servicios'}>Leer más<span className="arrow_icon"><i
                                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="choose_section_2">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h1 className="rated_text"><span className="padding_10"><img src="images/icon-1.png" /></span>+ 200</h1>
                            <p className="house_text">Clientes Felices</p>
                        </div>
                        <div className="">
                            <h1 className="rated_text"><span className="padding_10"><img src="images/icon-3.png" /></span>100%</h1>
                            <p className="house_text">Garantía en todas las reparaciones</p>
                        </div>
                        <div className="">
                            <h1 className="rated_text"><span className="padding_10"><img src="images/icon-4.png" /></span>+ 500</h1>
                            <p className="house_text">Servicios realizados</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="client_taital">¿Que dicen nuestros clientes?</h1>
                            <p className="client_text">En nuestro taller cada cliente es parte del proceso. Nos tomamos el tiempo de explicar cada reparación, las causas de las fallas y cómo prevenirlas en el futuro. Creemos que la confianza se construye con transparencia y un servicio cercano.</p>
                        </div>
                    </div>
                    <div className="customer_section_2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="box_main">
                                        <div className="customer_main">
                                            <div className="customer_left">
                                                <div className="customer_img"><img src="images/client.png" /></div>
                                            </div>
                                            <div className="customer_right">
                                                <h3 className="customer_name">Juan P.</h3>
                                                <p className="enim_text">“Lo que más me gustó fue que no solo repararon mi carro, sino que me explicaron claramente qué problema tenía y cómo evitar que volviera a suceder. Me sentí tranquilo y con la seguridad de que mi vehículo estaba en buenas manos.”</p>
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
        </>
    )
}

export default Home;