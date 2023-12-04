import React from 'react'
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../helpers/threshold'

import { Socials } from '.././utils/constants'

const Widget = () => {

    const [ref, springs] = useInView(
        () => ({
          from: {
            opacity: 0,
            y: 100,
          },
          to: {
            opacity: 1,
            y: 0,
          },
        }),
        {
          rootMargin: '-5% 0px -5% 0px',
          amount: buildInteractionObserverThreshold(),
        }
      )

    return (
        <animated.div className="z-10 bg-neutral-800 text-white" ref={ref} style={springs}>
            <div className="flex flex-row justify-between items-start max-w-custom mx-auto px-6 py-32">
                <div className="flex flex-col min-w-20 pr-3">
                    <div className="basis-1/12 cursor-pointer mb-4">
                        <img src="https://astarios.com/wp-content/uploads/2020/05/logo.svg" className="min-w-fit" alt="astarios" />
                    </div>
                    <div className="text-neutral-500 max-w-xs">
                        Remote development teams with industry-focused engineers
                    </div>
                    <ul className="flex justify-start end mt-36 gap-12">
                        {Socials.map((item) => (
                            <li className="max-h-5 max-w-5 hover:brightness-75 cursor-pointer">
                                <img alt={item.name} className="max-h-5 max-w-5 hover:brightness-75 cursor-pointer" src={item.img} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pr-3">
                    <div className="text-lg font-medium mb-6">
                        Company
                    </div>
                    <ul className="text-neutral-400 leading-8">
                        <li className="hover:text-sky-500 cursor-pointer">About us</li>
                        <li className="hover:text-sky-500 cursor-pointer">Management Team</li>
                        <li className="hover:text-sky-500 cursor-pointer">Expertise</li>
                        <li className="hover:text-sky-500 cursor-pointer">Services</li>
                        <li className="hover:text-sky-500 cursor-pointer">References</li>
                        <li className="hover:text-sky-500 cursor-pointer">Blog</li>
                    </ul>
                </div>
                <div className="pr-3">
                    <div className="text-lg font-medium mb-6">
                        Services
                    </div>
                    <ul className="text-neutral-400 leading-8">
                        <li className="hover:text-sky-500 cursor-pointer">Dedicated Development Teams</li>
                        <li className="hover:text-sky-500 cursor-pointer">Managed Delivery</li>
                        <li className="hover:text-sky-500 cursor-pointer">Software Security Testing</li>
                    </ul>
                </div>
                <div className="pr-3">
                    <div className="text-lg font-medium mb-6">
                        Expertise
                    </div>
                    <ul className="text-neutral-400 leading-8">
                        <li className="hover:text-sky-500 cursor-pointer">Mobile App Development</li>
                        <li className="hover:text-sky-500 cursor-pointer">Big Data Analytics</li>
                        <li className="hover:text-sky-500 cursor-pointer">Devops and Cloud Engineering</li>
                        <li className="hover:text-sky-500 cursor-pointer">Application Security Services</li>
                        <li className="hover:text-sky-500 cursor-pointer">QA and Software Testing</li>
                        <li className="hover:text-sky-500 cursor-pointer">IoT and M2M Software Solutions</li>
                    </ul>
                </div>
                <div className="pr-3">
                    <div className="text-lg font-medium mb-6">
                        Contact
                    </div>
                    <ul className="text-neutral-400 leading-8">
                        <li className="hover:text-sky-500 cursor-pointer">Imprint</li>
                        <li className="hover:text-sky-500 cursor-pointer">info@astarios.com</li>
                        <li className="hover:text-sky-500 cursor-pointer">UA +380-95-168-3652</li>
                        <li className="hover:text-sky-500 cursor-pointer">CH +41-32-513-2133</li>
                    </ul>
                </div>
            </div>
        </animated.div>
    );
}

export default Widget