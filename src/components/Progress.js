import React from 'react';
import '../../src/assets/css/Progress.css';
import PropTypes from 'prop-types';

export default function Progress(props) {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="progress_bar container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{props.projects}</h2>
                            <p class="leading-relaxed">Projects</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{props.programs}</h2>
                            <p class="leading-relaxed">Programs</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{props.members}</h2>
                            <p class="leading-relaxed">Members</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{props.products}</h2>
                            <p class="leading-relaxed">Products</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
Progress.defaultProps={
    projects: '0',
    programs: '0',
    members: '0',
    products: '0',
}