import React from "react";
import { Specialization } from '.././utils/constants'

import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../helpers/threshold'

const Expertise = () => {

    const [ref, springs] = useInView(
        () => ({
          from: {
            opacity: 0,
            y: 80,
          },
          to: {
            opacity: 1,
            y: 0,
          },
        }),
        {
          rootMargin: '-25% 0px -25% 0px',
          amount: buildInteractionObserverThreshold(),
        }
      )

    return (
        <animated.div id="expertise" ref={ref} style={springs}>
            <div className="bg-[url('https://astarios.com/wp-content/themes/astarios/img/expertize_bg.jpg')]">
                <div className="max-w-custom mx-auto py-36 px-6 text-white">
                    <h2 className="text-4xl font-bold text-center">Our Expertise</h2>
                    <p className="text-xl w-6/12 mx-auto text-center mt-4">astarios has built multiple solutions for businesses from the Industrial and Constructional IoT, Energy, FinTech and Agriculture industries.
                        In addition to software development and staff augmentation, our experience allows astarios to provide value-added services listed below.</p>
                </div>
            </div>
            <div className="bg-white max-w-custom mx-auto flex flex-col pt-12 px-6">
                <ul className="flex flex-wrap -mx-4 mb-12">
                    {Specialization.map((expertise) => (
                        <li className="px-4 sm:w-1/2 md:w-1/3">
                            <div className="group cursor-pointer">
                                <div className="my-8">
                                    <img src={expertise.img} alt={expertise.title} />
                                </div>
                                <h2 className="duration-200 text-lg font-semibold text-center group-hover:text-sky-500">{expertise.title}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </animated.div>
    )
}

export default Expertise