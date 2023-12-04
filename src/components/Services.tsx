import React from 'react'
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../helpers/threshold'

import { Maintenance } from '.././utils/constants'

const Services = () => {

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
        <animated.div className="max-w-custom mx-auto py-36 px-6" id='services' ref={ref} style={springs}>
            <div>
                <h2 className="text-4xl font-bold text-center">Our Services</h2>
                <p className="text-xl w-4/12 mx-auto text-center mt-4">Enjoy the benefits of working with our engineers and let us do the rest</p>
            </div>
            <ul className="flex mt-20 flex-wrap">
                {Maintenance.map((service) => (
                    <li className="flex flex-row sm:w-1/2 md:w-1/3 px-4">
                        <div className="bg-neutral-100 w-20 h-fit mr-6">
                            <img className="p-4" src={service.img} alt={service.title} />
                        </div>
                        <div className="flex flex-col w-fit">
                            <h2 className="font-bold mb-4">{service.title}</h2>
                            <p className="text-sm">{service.text}</p>
                            <button className="flex items-center w-fit mt-8 hover:underline underline-offset-2">Read more
                                <img className="ml-2 mt-1" src="//astarios.com/wp-content/themes/astarios/img/arrow-more2.svg" alt="arrow"></img>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </animated.div>
    )
}

export default Services