import React from 'react';
import Logo from "../../src/assets/img/Logo.png";
import CCMT_logo from "../../src/assets/img/CCMT_logo.png";

import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

import PropTypes from 'prop-types';



export default function Footer(props) {
    return (
        <>
            <footer id="footer" className="container text-gray-600 body-font mt-10">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first content-center justify-center" >

                        <div class="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-6">
                            <a className="ml-7 lg-1/3">
                                <img src={Logo} alt="coreQ_logo" width="104" height="50.75" />
                            </a>

                            <p class="mt-2 text-sm text-gray-500">{props.description}</p>
                        </div>


                        <div className="lg:w-1/3 md:w-1/2 w-full pl-11">
                            <h2 className="title-font pl-2 font-medium text-gray-900 tracking-widest text-sm mb-1 text-left">LET'S KEEP IN TOUCH</h2>
                            <nav className="list-none mb-6 text-left display-inline">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 pl-2" ><FiPhoneCall className="mr-2" style={{ display: "inline-block" }} />
                                        {props.phone_no}
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 pl-2" href="mailto:mail.coreQ@gmail.com" target="_blank"><FiMail className="mr-2" style={{ display: "inline-block" }} />mail.coreQ@gmail.com</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 pl-2" href="https://g.page/cosmoscollege?share" target="_blank"><FiMapPin className="mr-2" style={{ display: "inline-block" }} />Tutepani-14, Lalitpur, Nepal</a>
                                </li>
                                <div className="content-center mt-1">

                                    <a href="http://cosmoscollege.edu.np/" target="_blank">
                                        <img src={CCMT_logo} alt="CCMT_logo" width="204" height="61" />
                                    </a>
                                </div>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-2">NEWSLETTER</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-center">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 mb-1" >
                                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="example@mail.com" />
                                </div>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded my-2 content  -center">Submit</button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                                Never miss an upcoming event!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                            {props.copyright}
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            
                            <a className="ml-3 text-gray-500" href="https://www.facebook.com/fb.coreq/" target='_blank'><BsFacebook/></a>
                            <a className="ml-3 text-gray-500" href="https://www.instagram.com/insta.coreq/" target='_blank'><BsInstagram/></a>
                            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/company/coreqnp/" target='_blank'><BsLinkedin/></a>
                            <a className="ml-3 text-gray-500" href="https://github.com/teamcoreQ" target='_blank'><BsGithub/></a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

Footer.defaultProps={
    phone_no : '+977 98XXXXXXXXXX',
    description : 'Education for Technology',
    copyright : '© 2022-coreQ'
}