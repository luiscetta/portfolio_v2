import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Header = () => {
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
                    <Link href="/" className="text-custom-white no-underline decoration-0 flex items-center">
                        <h3 className="font-serif uppercase tracking-widest text-lg">cetta</h3>
                    </Link>
                </div>

                {/* LINKS - DESKTOP */}
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex m-0">
                        <Link href="/about" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                            <li className="ml-10 text-md">Sobre mim</li>
                        </Link>
                        <Link href="/projects" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                            <li className="ml-10 text-md">Projetos</li>
                        </Link>
                        <Link href="/curriculum" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                            <li className="ml-10 text-md">Currículo</li>
                        </Link>
                        <Link href="/skills" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                            <li className="ml-10 text-md">Conhecimentos</li>
                        </Link>
                        <Link href="/others" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                            <li className="ml-10 text-md">Outros</li>
                        </Link>
                    </ul>
                </div>

                {/* HAMBURGUER MENU */}
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-4">
                    <AiOutlineMenu size={25} />
                </div>

                {/* OFFCANVAS - MOBILE */}
                <div className={
                    menuOpen
                        ? 'fixed right-0 top-0 w-[75%] sm:hidden h-screen bg-custom-black-600 p-3 ease-linear duration-300 z-10'
                        : 'fixed right-[-100%] h-screen top-0 p-3 ease-in duration-500 overflow-auto'
                }>
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="cursor-pointer">
                            <AiOutlineClose size={25} className="text-custom-orange" />
                        </div>
                    </div>
                    <div className="grid mt-16 justify-center">
                        <ul className="text-center p-0 col">
                            <Link href="/about" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">Sobre mim</li>
                            </Link>
                            <Link href="/projects" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">Projetos</li>
                            </Link>
                            <Link href="/curriculum" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">Currículo</li>
                            </Link>
                            <Link href="/skills" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">Conhecimentos</li>
                            </Link>
                            <Link href="/others" className="no-underline decoration-0 text-custom-gray-100 hover:text-custom-white">
                                <li onClick={() => setMenuOpen(false)} className="text-2xl leading-loose">Outros</li>
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