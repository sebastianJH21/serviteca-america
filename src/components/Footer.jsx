import './Footer.css';

function Footer() {

  return (
    <div className="copyright_section">
      <div className="location_main">
        <div className="location_text">
          <ul>
            <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_15">(+71)
              8522369417</span></a></li>
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
          <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div className="container">
        <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a>. DIstributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
      </div>
    </div>
  );
}

export default Footer;
