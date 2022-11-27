import React from 'react';
import PropTypes from 'prop-types';
import '../../src/assets/css/About.css';
import about_section_photo from '../../src/assets/img/AboutSectionPhoto.webp'

export default function About(props) {
    const clickLink = () => {
        return;
    }

    return (
        <>
            {/* <section className="container mx-5">
                <div className="container">
                    <div className="about-photo">
                        <img alt="about-photo" src={AboutSectionPhoto} />
                    </div>
                    <h1 className="title-font">{props.title}
                        <p className="text-success">{props.hidden_title}</p>
                    </h1>

                    <p className="mb-8 text-muted text-left">{props.description}</p>
                    <span className="joinus-btn">
                        <a className="btn btn-danger btn-lg" href={props.link} role="button" target="_blank">Join Us</a>
                    </span>
                </div>
            </section> */}

            <section id ="about" className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
                        <h1 className="about_title sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{props.about_title_1}
                            <p className="text-success">{props.about_title_2}</p>
                        </h1>
                        <p className="description-text mb-8 leading-relaxed">{props.about_description}</p>
                        <div className="description-text flex justify-center">
                            <a href={props.link} target="_blank">
                                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Join Us</button>
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="AboutSectionPhoto" src={about_section_photo} />
                    </div>
                </div>
            </section>



        </>
    )
}
About.defaultProps = {
    about_title_1: 'Want anything to be easy with LaslesVPN.',
    about_title_2: 'readymade gluten',
    about_description: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.',
}