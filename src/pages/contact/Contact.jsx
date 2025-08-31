import './Contact.css';
function Contact() {
    return (
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
    )
}

export default Contact;