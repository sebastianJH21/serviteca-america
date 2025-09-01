import './Footer.css';

function Footer() {
  function currentYear() {
    return new Date().getFullYear();
  }

  return (
    <div className="copyright_section">
      <div className="location_main">
        <div className="location_text">
          <ul>
            <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_15">(+57) 3147795448</span></a></li>
            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i><span
              className="padding_left_15">demo@gmail.com</span></a></li>
          </ul>
        </div>
      </div>
      <div className="social_icon">
        <ul>
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/serviteca_america/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div className="container">
        <p className="copyright_text">{currentYear()} All Rights Reserved. Design by <a href="https://html.design">Sebastian C. Jimenez H</a>.</p>
      </div>
      <a href="https://wa.link/m025qv" className="whatsapp-float" target="_blank" aria-label="Chat en WhatsApp">
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default Footer;
