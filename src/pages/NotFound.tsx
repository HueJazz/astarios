import React from "react";
import { NavLink } from 'react-router-dom';

const Main = () => {
    return(
        <div className="relative overflow-hidden">
            <div className='min-w-full'>
                <img className='absolute z-0 min-w-full brightness-50' src="https://astarios.com/wp-content/themes/astarios/img/home_banner1.jpg" alt=""></img>
            </div>
            <div className="relative py-52 my-16 px-6 text-white">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">PAGE NOT FOUND</h1>
                    <p className="text-xl mt-4">Unfortunately, this page is unavailable on the site. Let us know what are you interested in and we will answer within 24 hours.</p>
                    <NavLink to='/'>
                        <button className="bg-sky-500 text-white px-12 py-3 mt-8 shadow-custom shadow-sky-400">
                            Home
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

<img src="https://astarios.com/wp-content/themes/astarios/img/home_banner1.jpg" alt=""></img>

export default Main
