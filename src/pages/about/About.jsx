import "./About.css"
function About() {
    return (
        <>
            <section className="about_section layout_padding pt-5">
                <div className="container-fluid">
                    <div className="row jutify-content-center">
                        {/* <div className="col-md-6">
                            <div className="about_img"><img src="images/about.png" /></div>
                        </div> */}
                        {/* <div className="col"> */}
                        <h1 className="models_taital">Acerca de Nosotros</h1>
                        <p className="about_text">En nuestro taller mecánico nos especializamos en brindar soluciones integrales para el mantenimiento y reparación de vehículos. Contamos con un equipo de técnicos capacitados y equipos de última tecnología que garantizan un servicio eficiente, transparente y de calidad. Nuestro compromiso es mantener tu vehículo en óptimas condiciones, ofreciéndote confianza, seguridad y la mejor atención personalizada.</p>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <section className="models_section layout_padding pt-3 pb-5">
                <div className="container">
                    <div className="models_section_2">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text"></span> Misión</h3>
                                <p className="ullamco_text">Ofrecer servicios automotrices de alta calidad, respaldados por profesionales expertos y tecnología avanzada, para garantizar la seguridad, el rendimiento y la satisfacción de cada uno de nuestros clientes.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/mision.png" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="models_section_2 escaner_section">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="carolo_text"><span className="number_text"></span> Visión</h3>
                                <p className="ullamco_text">Ser reconocidos como el taller mecánico de mayor confianza en la región, destacándonos por la excelencia en el servicio, la innovación constante y el compromiso con la seguridad y bienestar de nuestros clientes.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="models_img"><img src="images/vision.png" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;