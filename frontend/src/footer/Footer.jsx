import React from 'react'
import "./footer.css";
import "./footer1.css"

const Footer = () => {
  return (
    <div style={{margin:"0", padding:0}}><footer className="footer">
    <div className="container3">
      <div className="row">
        <div className="footer-col">
          <h4>HallFinder</h4>
          <ul>
            <li> <a href="#"><i className="fa-solid fa-house fa-fade" /><p /><h4>Calgary, AB T2A 2V9</h4><p /></a></li>
            <li><a href="#"><i className="fa-solid fa-phone fa-flip" /><p /><h4>987-654-4321</h4><p /></a></li>
            <li><a href="#"><i className="fa-solid fa-envelope fa-beat" /><p /><h4>info@hallfinder.com</h4><p /></a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
       
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Office Hours</h4>
          <ul>
            <li><p>Monday to Friday:10 am-4pm</p></li>
            <li><p>Saturday, Sunday: CLOSED</p></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4> follow us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer
