import React from 'react';

import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import HomeImage from '../components/Images/HomeImage';


export default function Homepage() {
  return (
    <main className="bg-custom-gray-100 p-8 items-center grid h-full lg:grid-cols-2 xl:h-screen 2xl:p-32">
      <div className="w-full tn:order-last lg:order-first">
        <div className="h-full flex tn:text-center tn:mt-8 lg:text-left">
          <h2 className="text-5xl xl:text-7xl text-custom-black-800 font-serif border-custom-black-800">Olá,
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-custom-violet via-custom-orange to-custom-red ">eu sou Luis Cetta,</span> desenvolvedor front-end.</h2>
        </div>
        <div className="mt-4 tn:text-center lg:text-left">
          <p className="font-sans text-md tn:text-md md:text-lg text-custom-black-600">Desenvolvedor com um pouco mais de 2 anos de experiência em Front-end. Aqui você irá me conhecer um pouco mais, tanto profissionalmente quanto pessoalmente!</p>
        </div>
        <div className="mb-8 mt-10 flex space-x-5 tn:justify-center lg:justify-start">
          <PrimaryButton className="bg-gradient-to-r from-custom-violet via-custom-orange to-custom-red hover:bg-gradient-to-l hover:from-custom-orange hover:via-custom-violet hover:to-custom-red hover:text-custom-white hover:font-bold transition duration-100 p-3 text-custom-black-800 font-sans font-bold leading-0 tn:text-sm xl:text-lg uppercase rounded-full decoration-0 no-underline" href="mailto:filipe.cetta@gmail.com" text="Entre em contato" />
          <SecondaryButton className="ml-0 border-2 border-custom-black-800 p-3 no-underline font-sans font-bold tn:text-sm xl:text-lg  text-custom-black-800 uppercase rounded-full hover:text-custom-white hover:bg-custom-black-800 transition duration-100" href="/projects" text="Ver projetos" />
        </div>
      </div>

      <div className="w-full flex justify-center align-middle tn:order-first lg:order-first">
        <HomeImage className="rounded-full grayscale contrast-125"/>
      </div>
    </main>
  )
};