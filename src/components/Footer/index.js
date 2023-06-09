import React from 'react';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'

import Logo from '../Logo';
import LanguageDropdown from '../LanguageDropdown';


const Footer = () => {
    const today = new Date();

    return (
        <div className="flex items-center bg-black h-full bottom-0 mx-auto">
            <div className="flex items-center p-6 w-98 justify-between mx-auto">
                <div className="flex items-center w-full justify-center tn:space-x-3.5 sm:space-x-5">
                    {/* <Tooltips className="text-xl" text="Entrar em contato!">
                        <a className="no-underline" href="mailto:filipe.cetta@gmail.com">
                            <EmailAnimation className="h-12 tn:h-10" />
                        </a>
                    </Tooltips> */}
                    <Link href="https://www.instagram.com/eufilipecetta/" target="_blank">
                        <BsInstagram className="text-custom-gray-100 hover:text-custom-orange transition ease-in duration-100 tn:text-md sm:text-lg" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/luiscetta/" target="_blank">
                        <FaLinkedinIn className="text-custom-gray-100 hover:text-custom-orange transition ease-in duration-100  tn:text-md sm:text-lg" />
                    </Link>
                    <Link href="https://github.com/luiscetta" target="_blank">
                        <BsGithub className="text-custom-gray-100 hover:text-custom-orange transition ease-in duration-100  tn:text-md sm:text-lg" />
                    </Link>
                    <Link href="mailto:filipe.cetta@gmail.com" target="_blank">
                        <TfiEmail className="text-custom-gray-100 hover:text-custom-orange transition ease-in duration-100  tn:text-md sm:text-lg" />
                    </Link>
                </div>
                <div className="flex items-center justify-center w-ful space-x-8">
                    <div className="flex items-center justify-center w-ful">
                        <Logo className="flex font-serif uppercase text-center text-custom-gray-100 mb-0 text-sm" />
                        <p className="mb-0 text-sm text-custom-gray-100"><span className="text-custom-orange font-serif">©</span> {today.getFullYear()}</p>
                    </div>

                    <div>
                        <LanguageDropdown />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;