import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from '../helpers/threshold'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {

    const numberOfSlides = 3

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

    return(
        <animated.div className="bg-neutral-100" id="reviews" ref={ref} style={springs}>
            <div className="max-w-custom mx-auto py-36 px-6">
                <div>
                    <h2 className="text-4xl font-bold text-center">Сustomer reviews</h2>
                    <p className="text-xl w-6/12 mx-auto text-center mt-4">Our biggest achievement is that all of our clients are ready to recommend us.
                        Check out some of their latest reviews.</p>
                </div>
                <Swiper 
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    className="reviewsSwiper"
                >
                    {[...Array(numberOfSlides)].map(() => (
                        <SwiperSlide>
                        <div className="flex justify-center mt-10 mb-6">
                            <img src="https://astarios.com/wp-content/uploads/2020/06/group-51.png" alt="" />
                        </div>
                        <div className="mb-20">
                            <p className="text-xl text-center mt-4">Markus Glaser, CTO, Owner – Hallo Welt!</p>
                            <p className="text-neutral-500 w-7/12 mx-auto text-center mt-6">astarios showed a lot of flexibility, so we could tailor the services to our needs.
                                In particular, we were looking for a company that could provide us with a long-term team,
                                since building up the relevant knowledge for BlueSpice development takes some time</p>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </animated.div>
    )
}

export default Reviews