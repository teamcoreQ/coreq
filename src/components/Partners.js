import React from 'react';
import PropTypes from 'prop-types';
import hult_cosmos_logo from '../../src/assets/img/Hult_Cosmos.png';
import seds_cosmos_logo from '../../src/assets/img/SEDS_Cosmos.png';
import ict_cosmos_logo from '../../src/assets/img/ICT_Cosmos.png';

export default function Partners(props) {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="text-3xl font-bold title-font mb-4 text-gray-900">Our Partners</h1>
                        <p className="lg:w-2/4 mx-auto leading-relaxed text-base"></p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center justify-center">
                        <div className="p-3 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                                <div className="flex justify-center mb-2">
                                    <a href={props.hult_cosmos_link} target='_blank'>
                                        <img className="object-cover object-center rounded " alt="hult_ccmt_logo" width="100" height="100" src={hult_cosmos_logo} />
                                    </a>
                                </div>
                                <p className="leading-relaxed">Hult Prize Foundation</p>
                            </div>
                        </div>

                        {/* <div className="p-3 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <div className="flex justify-center mb-2">
                                    <a href={props.seds_cosmos_link} target='_blank'>
                                        <img className="object-cover object-center rounded " alt="seds_cosmos_logo" width="100" height="100" src={seds_cosmos_logo} />
                                    </a>
                                </div>

                                <p className="leading-relaxed pt-3">SEDS Cosmos</p>
                            </div>
                        </div>
                        <div className="p-3 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <div className="flex justify-center mb-2">
                                    <a href={props.ict_cosmos_link} target='_blank'>
                                        <img className="object-cover object-center rounded " alt="ict_cosmos_logo" width="100" height="100" src={ict_cosmos_logo} />
                                    </a>
                                </div>

                                <p className="leading-relaxed">ICT Cosmos</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}
Partners.defaultProps={
    hult_cosmos_link: 'http://oncampus.hultprize.org/cosmoscollegeofmanagementandtechnology',
    seds_cosmos_link: '#',
    ict_cosmos_link: '#',
}