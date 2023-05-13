import React from 'react';
import Head from 'next/head';

import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import HomeImage from '../components/Images/HomeImage';
import { useTranslation } from 'react-i18next';



export default function Homepage() {
  const { t } = useTranslation();

  return (
    <>
    <Head>
      <title>{t('home.header')}</title>
    </Head>
      <main className="bg-custom-gray-100 p-8 items-center grid h-full lg:grid-cols-2 lg:h-screen 2xl:p-32">
        <div className="w-full tn:order-last lg:order-first">
          <div className="h-full flex tn:text-center tn:mt-8 lg:text-left">
            <h2 className="text-custom-black-800 font-serif border-custom-black-800 tn:text-4xl sm:text-5xl xl:text-7xl">{t('home.title.t1')}
              <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-custom-violet via-custom-orange to-custom-red"> {t('home.title.span')}</span> {t('home.title.t2')}</h2>
          </div>
          <div className="mt-4 tn:text-center lg:text-left">
            <p className="font-sans text-md tn:text-md md:text-lg text-custom-black-600">{t('home.subTitle')}</p>
          </div>
          <div className="mb-8 mt-10 flex space-x-5 tn:justify-center lg:justify-start">
            <PrimaryButton className="flex items-center uppercase decoration-0 no-underline transition duration-100 text-custom-black-800 font-sans font-bold px-4  rounded-full bg-gradient-to-r from-custom-violet via-custom-orange to-custom-red hover:bg-gradient-to-l hover:from-custom-orange hover:via-custom-violet hover:to-custom-red hover:text-custom-white hover:font-bold tn:text-sm xl:text-lg" href="/about" text={t('home.buttons.aboutMe')} />
            <SecondaryButton className="flex items-center ml-0 border-2 border-custom-black-800 p-3 no-underline font-sans font-bold text-custom-black-800 uppercase rounded-full tn:text-sm xl:text-lg hover:text-custom-white hover:bg-custom-black-800" href="/projects" text={t('home.buttons.viewProjects')} />
          </div>
        </div>

        <div className="w-full flex justify-center align-middle tn:order-first lg:order-first">
          <HomeImage className="rounded-full grayscale contrast-125" height={500} width={500} quality={100} />
        </div>
      </main>
    </>
  )
};