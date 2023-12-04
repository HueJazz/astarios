import React from "react";
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../helpers/threshold'

import { Highlights } from '.././utils/constants'


const Featured = () => {

    const [ref, springs] = useInView(
        () => ({
          from: {
            opacity: 0,
            x: -150,
          },
          to: {
            opacity: 1,
            x: 0,
          },
        }),
        {
          rootMargin: '-25% 0px -25% 0px',
          amount: buildInteractionObserverThreshold(),
        }
      )

    return (
        <animated.div className="max-w-custom mx-auto py-36 px-6" id="blog" ref={ref} style={springs}>
            <div>
                <h2 className="text-4xl font-bold text-center">Featured content</h2>
            </div>
            <div className="max-w-custom mx-auto flex flex-col">
                <ul className="flex flex-wrap -mx-4 mb-12">
                    {Highlights.map((highlight) => (
                        <li className="px-6 sm:w-1/2 md:w-1/3">
                            <div className="my-8">
                                <div className="mb-6 cursor-pointer">
                                    <img className="w-auto max-h-60" src={highlight.img} alt={highlight.title} />
                                </div>
                                <p className="text-sm text-neutral-400 mb-3">{highlight.date}</p>
                                <h2 className="cursor-pointer duration-200 text-lg font-semibold hover:text-sky-500 mb-3">{highlight.title}</h2>
                                <p className="text-sm text-neutral-500">{highlight.text}</p>
                                <button className="flex items-center w-fit mt-4 hover:underline underline-offset-2">Read more
                                    <img className="ml-2 mt-1" src="//astarios.com/wp-content/themes/astarios/img/arrow-more2.svg" alt="arrow"></img>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </animated.div>
    )
}

export default Featured