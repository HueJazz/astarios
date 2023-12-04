import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

const References = () => {

    const numberOfSlides = 8;

    return (
        <div className="relative text-white" id='references'>
            <div className="absolute z-10 py-32 w-full">
                <h2 className="text-4xl font-bold text-center">Case studies</h2>
                <p className="text-xl w-6/12 mx-auto text-center mt-4">Our offshore development group is experienced in delivering real results to end users - study our projects to make sure in our competence</p>
            </div>
            <Swiper
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                    renderBullet: function (index:number, className:string) {
                        // eslint-disable-next-line
                        return '<span class="' + className + '" style="background-color: rgb(14 165 233 / var(--tw-text-opacity)); margin-bottom: 7rem; height:4px; width:50px; border-radius: 10px;">' + '</span>';
                    }
                }}
                grabCursor={true}
                navigation={true}
                // navigation={{
                //     nextEl: ".arrow-right",
                //     prevEl: ".arrow-left",
                //   }}
                modules={[Parallax, Pagination, Navigation]}
                className="referencesSwiper"
            >   
                <div
                    className="parallax-bg bg-[url('https://astarios.com/wp-content/themes/astarios/img/case_bg.jpg')]"
                    data-swiper-parallax="-23%"
                ></div>
                {[...Array(numberOfSlides)].map(() => (
                    <SwiperSlide>
                    <div className="flex flex-row my-48 pt-48 pb-28 items-center max-w-custom mx-auto px-6">
                        <div className="w-full basis-6/12">
                            <div className="flex flex-col mr-16">
                                <h2 className="text-4xl font-semibold" data-swiper-parallax="-500">Hallo Welt!</h2>
                                <p className="text-neutral-400 mt-10" data-swiper-parallax="-400">Hallo Welt! GmbH develops BlueSpice, an enterprise-level wiki based on MediaWiki.
                                    Our team works as an extension of Hallo Welt! and is involved in developing BlueSpice extensions,
                                    reducing technical debt, and fixing bugs in the existing code. </p>
                            </div>
                            <div className="pt-10 mt-10 border-t border-neutral-700 mr-16" data-swiper-parallax="-300">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-sky-400">Industry</h2>
                                        <p className="text-neutral-400">Media</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-sky-400">Region</h2>
                                        <p className="text-neutral-400">Germany</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-sky-400">Project Team</h2>
                                        <p className="text-neutral-400">2 specialists</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-sky-400">Project Duration</h2>
                                        <p className="text-neutral-400">Ongoing</p>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center w-fit mt-8 hover:underline underline-offset-2" data-swiper-parallax="-200">
                                <h2 className="text-xl">See more</h2>
                                <img className="ml-2 mt-1" src="//astarios.com/wp-content/themes/astarios/img/arrow_more.svg" alt='more'></img>
                            </button>
                        </div>
                        <div className="basis-7/12" data-swiper-parallax="-300">
                            <img src="https://astarios.com/wp-content/uploads/2020/05/case_image_page.png" alt="Hallo Welt!" />
                        </div>
                    </div>
                </SwiperSlide>             
                ))}
            </Swiper>
            {/* <button className="arrow-left arrow left-0 top-1/2 absolute z-10 pl-12"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUUlEQVR4nO3ZIUtfURjA4XeKomJxWGYSm9hEMA4MJotfYCBoEIPgJ7AY/ACC2SBaFASLQcvyGGtiGitiUZGJE/UZ4mD63wmmec7hPp/gd+Hce895T0Sj0fiv0IV5LKA3SvIYjM/+2o9SoAdHXrqNgpbNgX/tRu7Qib1E/Bf0Rc7Qju1E/Fe8jwLiNxPx39AfOUMbNhLxx/gQOcM7rCfiTzAQBcSvJeK/YzByh9VE/A8MRe6wkog/xXDkDsuJ+DOMRO6wlIg/x2jkDouJ+AuMRe4wi4eW+EuMR+4wg/uW+J/4GLnDp0T8NSYid5jGXUv8DSajBJ5+Ss/9wlSUQgUPMF30Eir+Ja7iM1rFj6yKrUQVm7kqttNVHGiqOFJWcagvfqxSxWCritFiFcPdKsbrr7jg2IpSoBuHLQ9wFYVf8u1EadDxZys+97i03rqn0YjC/QaJbgzsjPdwKgAAAABJRU5ErkJggg=="/></button>
            <button className="arrow-right arrow right-0 top-1/2 absolute z-10 pr-12"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlElEQVR4nO3ZTYtPYRgH4Ju8v42FYSGsNDvZ0SxZyAcwX0DI7CmKTzAy2YooG6mRFSkK0YzsmLGRZsNYeCnKWBiXpr/CcU9Znns6V53971fnOc/z3Cei0+n8N6zEYRzBiqgG1/32BOujEnzyt8dYF1Xgmn/dw+qoAGvxMClxF6uiAvThaVLi9vwijwqwEc+SEmNYFhWgHy+SEjcqldiMqaTEFSyNCrAVr5ISl7AkKsA2vE5KXIgqsAPTSYnzUQV24m1SYiSqwADeJSXORBXYhfdJiVNRBXbjY1LiRFSBvfjcKPADw1EFBvElKXE0qsB+zDZKfMehqAIH8a1RYiaqwIGyBbAPXxvh5zAUhRfxsWg77Cn7GdXbyD4kG9nJKHyUOB1FDnMzSfizUeQ4/SYJfy7aDtsXuNCMRuEr5cXW34uxBS+T8JdbP5nQG6tMJuGvVgi/Cc9LDrYsPFq8ieXRZtiAiST8ndYPd7EGD8qO1/Xe76b7lX5wzDbCP6r2i+nWH+HH59dDVKK3Bo7/emq8Np3OIvcT+EQP3jbgxBUAAAAASUVORK5CYII="/></button> */}
        </div>
    )
}

export default References