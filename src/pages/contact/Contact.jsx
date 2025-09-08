import './Contact.css';
function Contact() {
    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="contact_taital">Contactanos</h1>
                    </div>
                </div>
                <div className="contact_section_2">
                    <div className="mail_section map_form_container">
                        <form action="https://gmail.us3.list-manage.com/subscribe/post?u=edb0ad5300ab141814092378a&amp;id=cfc1832222&amp;f_id=0020d7e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                            <input type="email" name="EMAIL" className="mail_text" placeholder="Email *" id="mce-EMAIL" required />
                            <input type="text" name="FNAME" className="mail_text" placeholder="Nombre *" id="mce-FNAME" required />
                            <input type="text" name="LNAME" className="mail_text" placeholder="Apellido *" id="mce-LNAME" required />
                            <input type="number" name="PHONE" className="mail_text" placeholder="Télefono *" id="mce-PHONE" required />
                            <textarea className="massage-bt" placeholder="Massage *" rows="5" id="mce-COMPANY" name="COMPANY" required ></textarea>
                            <div className="map_btn_main">
                                <button type='submit' className="send_bt">Enviar</button>
                            </div>
                        </form>


                        <div className="map_main map_container">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.8407657276141!2d-76.63367350628329!3d7.877588627973141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e500d3ba75fff3d%3A0xdd56cec98665d53!2sServiteca%20America!5e0!3m2!1ses-419!2sco!4v1757312971345!5m2!1ses-419!2sco"
                                    width="100%" height="100%" frameBorder="0"
                                    allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;