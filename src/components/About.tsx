import React from "react";
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../helpers/threshold'

const About = () => {

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

    return(
        <div className="max-w-custom mx-auto py-36 px-6" id="about">
            <div className="flex justify-start items-center">
                <div className="basis-1/2 mr-16">
                    <div className="text-sky-500 mb-4">
                        ABOUT US
                    </div>
                    <div className="text-4xl font-bold mb-6">
                        Regional tech talents for your service
                    </div>
                    <div className="text-neutral-600 leading-7">
                        astarios helps companies worldwide by building advanced software and scaling their remote engineering capacities.
                        Founded by Reto Kaeser from Switzerland and Andreas Lepenets from Ukraine, astarios has vast experience in software development and staff augmentation.
                        <br/><br/>Since 2016 our team has helped organizations from multiple domains, including IoT, Energy,
                        FinTech, and Agriculture, by building impactful products that are changing their industries. While a strong recruitment team with access to
                        180K+ Ukrainian IT specialists allows us to provide businesses with dedicated engineers that hit the spot.
                    </div>
                    <button className="bg-sky-500 text-white px-12 py-3 mt-8 shadow-custom shadow-sky-400">
                        Get in touch
                    </button>
                </div>
                <div className="basis-1/2">
                    <img src="//astarios.com/wp-content/uploads/2020/05/about_sect.jpg" alt="About Us" />
                </div>
            </div>
            <animated.div className="flex pt-24 mt-32 border-t-2" ref={ref} style={springs}>
                <div className="basis-1/3 px-4">
                    <h2 className="text-2xl font-semibold"><span className="text-sky-500">01</span> Rely on our expertise</h2>
                    <p className="mt-4 leading-7">astarios` team has successfully launched multiple projects expanding from small to big enterprises. 
                        Such experience helps us to consult businesses on their transformations and build advanced solutions for them.</p>
                </div>
                <div className="basis-1/3 px-4">
                    <h2 className="text-2xl font-semibold"><span className="text-sky-500">02</span> Eliminate the risks</h2>
                    <p className="mt-4 leading-7">Security requirements should be in your top priorities list whether you`re with a fully operating company or just planning to launch your business. 
                        astarios will protect your organization by consulting, conducting risk analysis and infrastructure monitoring.</p>
                </div>
                <div className="basis-1/3 px-4">
                    <h2 className="text-2xl font-semibold"><span className="text-sky-500">03</span> Leverage your business</h2>
                    <p className="mt-4 leading-7">Your development team is one of the key elements to success. That's why we put many efforts into all stages of recruitment and employee retention, 
                        for you to enjoy working with our talents while we take care of all the paperwork and logistics</p>
                </div>
            </animated.div>
        </div>
    )
}

export default About