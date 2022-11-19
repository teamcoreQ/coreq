import React from 'react';
import PropTypes from 'prop-types';
import '../../src/assets/css/About.css';
import AboutSectionPhoto from '../../src/assets/img/AboutSectionPhoto.webp'

export default function About(props) {
    return (
        <>
            <section className="container mx-5">
                <div className="container">
                    <div className="about-photo">
                        <img alt="about-photo" src={AboutSectionPhoto} />
                    </div>
                    <h1 className="title-font">{props.title}
                        <p className="text-success">{props.hidden_title}</p>
                    </h1>

                    <p className="mb-8 text-muted text-left">{props.description}</p>
                    <span className="joinus-btn">
                        <a class="btn btn-danger btn-lg" href={props.link} role="button" target="_blank">Join Us</a>
                    </span>
                </div>
            </section>



        </>
    )
}
About.protoType={
    title: PropTypes.string,
    description: PropTypes.string,
}
About.defaultProps={
    title: 'Want anything to be easy with LaslesVPN.',
    hidden_title: 'readymade gluten',
    description: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.'
}