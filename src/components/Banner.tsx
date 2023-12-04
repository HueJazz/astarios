import React from 'react'

import { Socials } from '.././utils/constants'

const Banner = () => {
    return(
        <div className="relative overflow-hidden" id="banner">
            <div className='min-w-full'>
                <video className='absolute z-0 min-w-full brightness-50' muted loop poster="https://astarios.com/wp-content/uploads/2020/05/home_banner3.jpg" autoPlay>
                    <source src="https://astarios.com/wp-content/uploads/2020/05/video1.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" />
                </video>
            </div>
            <div className="relative flex flex-col max-w-custom mx-auto items-start pt-48 pb-8 px-6 text-white">
                <div className="w-1/2 text-6xl font-bold">
                    Building Advanced Software for Businesses worldwide
                </div>
                <button className="bg-sky-500 text-white px-12 py-3 mt-24 shadow-custom shadow-sky-400">
                    Get in touch
                </button>
                <ul className="flex justify-start end mt-32 gap-12">
                        {Socials.map((item) => (
                            <li className="max-h-5 max-w-5 hover:brightness-75 cursor-pointer">
                                <img alt={item.name} className="max-h-5 max-w-5 hover:brightness-75 cursor-pointer" src={item.img} />
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default Banner