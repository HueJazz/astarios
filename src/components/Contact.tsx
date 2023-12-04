import React from "react";
import { useState } from 'react'
import { Socials } from '.././utils/constants'


const Contact = () => {

    const [isFullNameFocused, setIsFullNameFocused] = useState<any>(false);
    const [isEmailFocused, setIsEmailFocused] = useState<any>(false);
    const [isSubjectFocused, setIsSubjectFocused] = useState<any>(false);
    const [isMessageFocused, setIsMessageFocused] = useState<any>(false);

    return(
        <div className="max-w-custom mx-auto py-36 px-6" id="contact">
            <div>
                <div className="text-sky-500 mb-4">
                    GET IN TOUCH
                </div>
                <div className="text-4xl font-bold mb-20">
                    Drop us a message to see how we can help
                </div>
                <div className="flex">
                    <div className="basis-5/12">
                        <div>
                            <h2 className="text-neutral-400 mb-2">Email</h2>
                            <p  className="mb-6">info@astarios.com</p>
                        </div>
                        <div>
                            <h2 className="text-neutral-400 mb-2">Phone</h2>
                            <p className="mb-4">CH +41-32-513-2133</p>
                            <p className="mb-6">UA +380-95-168-3652</p>
                        </div>
                        <div>
                            <h2 className="text-neutral-400 mb-2">Address</h2>
                            <p>astarios GmbH</p>
                            <p>Häderlistrasse 7</p>
                            <p className="mb-6">8964 Rudolfstetten</p>
                        </div>
                        <div>
                            <p>astarios LLC</p>
                            <p>1/3 Yaroslavsky lane</p>
                            <p className="mb-6">Kyiv, Ukraine 04071</p>
                        </div>
                        <div>
                            <h2 className="text-neutral-400 mb-2">Follow us</h2>
                            <ul className="flex justify-start end gap-4">
                                {Socials.map((item) => (
                                    <li className="flex gap-2 items-center cursor-pointer hover:brightness-50 brightness-0">
                                        <img alt={item.name} className="max-h-5 max-w-5" src={item.img} />
                                        <p>{item.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="basis-7/12">
                        <form className="flex flex-col">
                            <p className="mb-12">Just enter your project details and we will reply within 24 hours</p>
                            <div className="group mb-4 relative">
                                <label className={`duration-200 absolute bottom-8 text-neutral-600 pointer-events-none ${isFullNameFocused ? 'text-sm bottom-full' : ''}`}>Your Full Name *</label>
                                <input className="mb-2 h-10 w-full border-b border-neutral-400 outline-0" type="text" 
                                    onFocus={() => setIsFullNameFocused(true)} 
                                    onBlur={(event) => setIsFullNameFocused(event.target.value)}>
                                </input>
                            </div>
                            <div className="group mb-4 relative">
                            <label className={`duration-200 absolute bottom-8 text-neutral-600 pointer-events-none ${isEmailFocused ? 'text-sm bottom-full' : ''}`}>Your Email *</label>
                                <input className="mb-2 h-10 w-full border-b border-neutral-400 outline-0" type="text" 
                                    onFocus={() => setIsEmailFocused(true)} 
                                    onBlur={(event) => setIsEmailFocused(event.target.value)}>
                                </input>
                            </div>
                            <div className="group mb-4 relative">
                            <label className={`duration-200 absolute bottom-8 text-neutral-600 pointer-events-none ${isSubjectFocused ? 'text-sm bottom-full' : ''}`}>Message Subject *</label>
                                <input className="mb-2 h-10 w-full border-b border-neutral-400 outline-0" type="text" 
                                    onFocus={() => setIsSubjectFocused(true)} 
                                    onBlur={(event) => setIsSubjectFocused(event.target.value)}>
                                </input>
                            </div>
                            <div className="group mb-4 relative">
                                <label className={`duration-200 absolute bottom-8 text-neutral-600 pointer-events-none ${isMessageFocused ? 'text-sm bottom-full' : ''}`}>
                                    Your Message *
                                </label>
                                <textarea
                                    className="mb-2 h-16 w-full border-b border-neutral-400 outline-0 overscroll-auto resize-none"
                                    onFocus={() => setIsMessageFocused(true)}
                                    onBlur={(event) => setIsMessageFocused(event.target.value)}
                                ></textarea>
                            </div>
                            <div className="relative flex items-center ml-2">
                                <input className="group h-5 w-5 my-4" type="checkbox"></input>
                                <label className="ml-2">* I have read and accepted the Terms & Conditions and Privacy Policy</label>
                            </div>
                        </form>
                        <button className="bg-sky-500 text-white px-12 py-3 mt-8">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact