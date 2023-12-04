import React from 'react'

const Footer = () => {
    return (
        <div className="bg-neutral-900 text-neutral-400 text-sm">
            <div className="flex flex-row justify-between items-center max-w-custom mx-auto px-6 py-4">
                <div className="basis-1/12 min-w-fit">
                    <div>© Copyright 2022 astarios. All Rights Reserved</div>
                </div>
                <div className="flex justify-between">    
                    <ul className="flex justify-between gap-2">
                        <li className="flex group cursor-pointer items-center px-3 hover:underline underline-offset-2">
                            Terms and Conditions
                        </li>
                        <li className="flex group cursor-pointer items-center px-3 hover:underline underline-offset-2">
                             Privacy Policy
                        </li>
                        <li className="flex group cursor-pointer items-center px-3 hover:underline underline-offset-2">
                            Cookies Policy
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer