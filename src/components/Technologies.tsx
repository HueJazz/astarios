import React from "react";
import {useState} from "react";

import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../helpers/threshold'

import { Development } from '.././utils/constants'

const Technologies= () => {

    const [technologyStack, setTechnologyStack] = useState<number>(0)
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
        <animated.div className="bg-neutral-100" id="technologies" ref={ref} style={springs}>
            <div className="max-w-custom mx-auto px-6 py-36">
                <div className="flex">
                    <h2 className="basis-4/12 text-4xl font-bold mr-6">Technology stack</h2>
                    <p className="basis-8/12">Due to the strong recruitment network of astarios and the rapid growth of Ukrainian IT- market in terms of the technological variety,
                        we help our clients to cover even the most unique positions that require strong professional backgrounds and deep industry focus.</p>
                </div>
                <div className="flex mt-16 text-lg">
                    <div className="basis-3/12">
                        <ul>
                            {Development.map((development, index) =>
                            <div className="flex items-center">
                                <li className={technologyStack === index ? 'duration-100 py-4 cursor-pointer font-bold': ' duration-100 py-4 cursor-pointer'} onClick={() => {setTechnologyStack(index)}}>{development.name}</li>
                                <div className={technologyStack === index ? 'duration-200 h-0.5 w-12 bg-sky-500 ml-4' : ''}></div>
                            </div> 
)}
                        </ul>
                    </div>
                    <div className="basis-9/12 flex flex-wrap ml-24">
                        {Development[technologyStack].technologies.map((technology) => (
                            <div className="px-4 w-1/5">
                                <img src={technology.img} alt={technology.name}/>
                            </div>))}
                    </div>
                </div>
            </div>
        </animated.div>
    )
}

export default Technologies