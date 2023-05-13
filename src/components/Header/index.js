import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Logo from '../Logo';
import Underline from '../assets/underline.svg';
import { ptBR, enUS } from '@/translations';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('overflow-hidden', !menuOpen);
    };

    return (
        <nav className="w-full h-16 shadow-xl bg-custom-black-800">
            <div className="flex justify-between items-center text-custom-white h-full w-95 m-auto 2xl:px-16">
                {/* LOGO */}
                <div className='h-full w-full flex items-center'>
                    <Link href="/" className="flex no-underline decoration-0 items-center justify-center">
                        <Logo className="flex font-serif uppercase text-center text-custom-gray-100 mb-0 text-xl" />
                    </Link>
                </div>

                {/* LINKS - DESKTOP */}
                <div className="hidden md:flex">
                    <ul className="hidden m-0 md:flex md:space-x-10">
                        <Link href="/about" className="group flex flex-col items-center justify-center no-underline decoration-0 text-custom-gray-100  hover:text-custom-white">
                            <li className="text-md">{t('header.links.aboutMe')}</li>
                            <Image className="hidden relative group-hover:flex transition ease-in-out duration-300" src={Underline} alt="" width={60} />
                        </Link>
                        <Link href="/projects" className="group flex flex-col items-center justify-center no-underline decoration-0 text-custom-gray-100  hover:text-custom-white">
                            <li className="text-md">{t('header.links.projects')}</li>
                            <Image className="hidden relative group-hover:flex transition ease-in-out duration-300" src={Underline} alt="" width={60} />
                        </Link>
                        <Link href="/curriculum" className="group flex flex-col items-center justify-center no-underline decoration-0 text-custom-gray-100  hover:text-custom-white">
                            <li className="text-md">{t('header.links.curriculum')}</li>
                            <Image className="hidden relative group-hover:flex transition ease-in-out duration-300" src={Underline} alt="" width={60} />
                        </Link>
                        <Link href="/skills" className="group flex flex-col items-center justify-center no-underline decoration-0 text-custom-gray-100  hover:text-custom-white">
                            <li className="text-md">{t('header.links.skills')}</li>
                            <Image className="hidden relative group-hover:flex transition ease-in-out duration-300" src={Underline} alt="" width={60} />
                        </Link>
                        <Link href="/others" className="group flex flex-col items-center justify-center no-underline decoration-0 text-custom-gray-100  hover:text-custom-white">
                            <li className="text-md">{t('header.links.others')}</li>
                            <Image className="hidden relative group-hover:flex transition ease-in-out duration-300" src={Underline} alt="" width={60} />
                        </Link>
                    </ul>
                </div>

                {/* HAMBURGUER MENU */}
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-4">
                    <AiOutlineMenu size={25} />
                </div>

                {/* OFFCANVAS - MOBILE */}
                <div className={
                    menuOpen
                        ? 'fixed right-0 top-0 w-[75%] lg:hidden h-screen bg-custom-black-600 p-3 ease-linear duration-300 z-10'
                        : 'fixed right-[-100%] h-screen top-0 p-3 ease-in duration-500 overflow-auto z-10'
                }>
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="cursor-pointer">
                            <AiOutlineClose size={25} className="text-custom-orange" />
                        </div>
                    </div>
                    <div className="grid mt-16 justify-center">
                        <ul className="text-center p-0 col">
                            <Link href="/about" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">{t('header.links.aboutMe')}</li>
                            </Link>
                            <Link href="/projects" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">{t('header.links.projects')}</li>
                            </Link>
                            <Link href="/curriculum" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">{t('header.links.curriculum')}</li>
                            </Link>
                            <Link href="/skills" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">{t('header.links.skills')}</li>
                            </Link>
                            <Link href="/others" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">{t('header.links.other')}</li>
                            </Link>
                        </ul>

                        <div className="mt-16">
                            <hr />
                            <h4 className='font-serif w-full px-3 rounded-sm'>Escolha um idioma:</h4>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;