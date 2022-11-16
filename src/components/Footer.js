import React from 'react';
import '../../src/assets/css/Footer.css';
import Logo from "../../src/assets/img/Logo.png";
import CCMT_logo from "../../src/assets/img/CCMT_logo.png";
import Button from 'react-bootstrap/Button';
import 'boxicons';

export default function Footer() {
    return (
        <>
        {/* footer starts here  */}
            <footer>
                <div className="container">
                    <div className="content_footer">
                        <div className="profile">
                            <div className="logo_area">
                                <img src={Logo} alt="#logo"/>
                                    <span className="logo_name"></span>

                            </div>
                            <div className="description_area">
                                <p>
                                    description.here
                                </p>
                            </div>
                            <div className="social_media">
                                <a href="#"><i className='bx bxl-linkedin'></i></a>
                                <a href="#"><i className='bx bxs-envelope'></i></a>
                                <a href="#"><i className='bx bxl-facebook'></i></a>
                                <a href="#"><i className='bx bxl-instagram'></i></a>
                                <a href="#"><i className='bx bxl-twitter'></i></a>
                                <a href="#"><i className='bx bxl-github'></i></a>

                            </div>

                        </div>

                        {/* Find Us At footer section */}
                        <div className="findus_footer">
                            <ul className="subscribe_newsletter">
                                <li className="classname_name">Newsletter</li>
                                <div className="newsletter-box">
                                    <input type="email" className="form-control" placeholder="Enter your mail here !" required />
                                    <Button variant="light">Submit</Button>{' '}
                                </div>

                            </ul>


                            <ul className="findus_header">
                            
                                <li><a href="#"><i className='bx bxs-phone-call'> +977-9819270178</i></a></li>

                                <li><a
                                    href="https://www.google.com/maps/place/Cosmos+College+of+Management+and+Technology/@27.6552925,85.3189105,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb177c56a520d9:0xf3d0d1e37134dfb7!8m2!3d27.6552925!4d85.3210992"><i
                                        className='bx bxs-location-plus'> Lalipur-14, Tutepani, Nepal</i></a></li>
                            </ul>

                            {/* college url navigation */}
                            <div className="collegeurl_navgitation">

                                <a href="http://cosmoscollege.edu.np/"><img src={CCMT_logo}
                                    alt="" width="204" height="61" className="src"/></a>
                            </div>

                        </div>

                        {/* footer navigation here  */}
                        <div className="navbar_navigation">
                            <ul className="navbar_navigation_header">

                                <li className="classname_name">Navigation</li>
                                <a href="./index.html">
                                    <li><i className='bx bxs-chevron-right'>Home</i></li>
                                </a>
                                <a href="./events.html">
                                    <li><i className='bx bxs-chevron-right'>Events</i></li>
                                </a>
                                <a href="./projects.html">
                                    <li><i className='bx bxs-chevron-right'>Projects</i></li>
                                </a>
                                <a href="about.html">
                                    <li><i className='bx bxs-chevron-right'>About Us</i></li>
                                </a>
                                <a href="join_us.html">
                                    <li><i className='bx bxs-chevron-right'>Join Us</i></li>
                                </a>

                               {/* terms and conditions pop-up */}
                                <div align="center" className="terms_and_conditions"><a href="./assets/documents/terms.pdf"
                                    target="_blank">Terms and
                                    conditions</a>
                                </div>

                            </ul>

                        </div>
                    </div>
                    <hr/>
                        <div className="footer_bottom">
                            <div className="copyright">
                                <i className='bx bx-copyright'></i>
                                <span>2022 coreQ-All right reserved</span>
                            </div>
                            <div className="coreQ">
                                <li><a href="http://coreq.ujjwaldhakal.com.np/">designed by coreQ</a></li>

                            </div>
                        </div>


                </div>
            </footer>



        </>
    )
}