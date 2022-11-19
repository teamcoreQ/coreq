import React from 'react';
import '../../src/assets/css/Progress.css';

export default function Progress() {
    return (
        <>  
            <section className="text-gray-600 body-font text-center ">
                <div className="progress_bar">
                    
                        <span className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Users</p>
                        </span>
                        <span className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                            <p className="leading-relaxed">Subscribes</p>
                        </span>
                        <span className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
                            <p className="leading-relaxed">Downloads</p>
                        </span>
                        <span className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Products</p>
                        </span>
                    
                </div>
            </section>
            


        </>
    )
}