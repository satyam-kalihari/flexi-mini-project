import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Trail Makers seamlessly connects millions of travelers to memorable experiences, a variety of transportation options.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Trek Packages</a></li>
              <li><a href="#">Classic Tent Camping</a></li>
              <li><a href="#">Family Tent Camping</a></li>
              <li><a href="#">Special Offer Packages</a></li>
              <li><a href="#">Meet Our Team</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Latest News & Blog</a></li>
              <li><a href="#">Core Feature</a></li>
              <li><a href="#">Need a career?</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> Contact@trailmakers.com</p>
              <p><i className="fas fa-phone"></i> +412541 6574 25</p>
              <p><i className="fas fa-map-marker-alt"></i> E 7th, St North Little Rock<br />AR 72114-4973, USA</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2023 Trail Makers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
