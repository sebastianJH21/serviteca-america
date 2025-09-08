import './Services.css';
import { Link } from 'react-router-dom';
function Services() {

    return (
        <section className="models_section layout_padding pt-0 pb-5">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2 escaner_section">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/scanner.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">02</span> Escáner</h3>
                                <p className="ullamco_text">Contamos con equipos de diagnóstico computarizado que detectan fallas en los sistemas electrónicos de tu vehículo. El escáner nos permite identificar problemas de manera rápida y precisa, ahorrando tiempo y dinero en reparaciones.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/balanceo.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">04</span> Balanceos</h3>
                                <p className="ullamco_text">Aseguramos que las llantas de tu vehículo giren de manera uniforme y sin vibraciones. Un correcto balanceo mejora la estabilidad en carretera, prolonga la vida útil de los neumáticos y brinda una conducción más cómoda y segura.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2 escaner_section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/suspencion.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">05</span> Suspensión</h3>
                                <p className="ullamco_text">Revisamos y reparamos los componentes de la suspensión para garantizar una conducción suave y estable. Un sistema de suspensión en buen estado mejora el confort, la adherencia de las llantas al suelo y la seguridad en todo tipo de terreno.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/frenos.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">06</span> Frenos</h3>
                                <p className="ullamco_text">Inspeccionamos, ajustamos y reemplazamos partes del sistema de frenos como pastillas, discos y líquido. Un mantenimiento adecuado asegura una respuesta rápida, reduce distancias de frenado y protege tu seguridad y la de tus pasajeros.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/aire.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">07</span> Mantenimiento aire acondicionado preventivo</h3>
                                <p className="ullamco_text">Realizamos limpieza, recarga de gas y revisión de fugas en el sistema de aire acondicionado. Con este servicio garantizas un ambiente fresco, aire limpio y un rendimiento eficiente en cualquier época del año.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row flex-row-reverse">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/electrica.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text">08</span> Diagnóstico sistema eléctrico</h3>
                                <p className="ullamco_text">Contamos con equipos especializados para detectar fallas en el sistema eléctrico de tu vehículo. Revisamos luces, alternador, batería, fusibles y más, asegurando un funcionamiento confiable y evitando averías inesperadas.</p>
                                <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/repuestos.png" /></div>
                            </div>
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text"></span> Repuestos</h3>
                                <p className="ullamco_text">Ofrecemos repuestos originales y de alta calidad para tu vehículo. Contamos con piezas confiables que aseguran un rendimiento óptimo, mayor durabilidad y compatibilidad con las reparaciones realizadas en nuestro taller.</p>
                                {/* <div className="price_main">
                                    <p className="price_text"><span>Precio</span> $100.000</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Services;