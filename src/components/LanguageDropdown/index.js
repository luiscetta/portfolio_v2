import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import cookies from "js-cookie";
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineLanguage } from 'react-icons/md';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ptBR, enUS } from '../../translations';

const LanguageDropdown = () => {
    const router = useRouter();
    const { locale } = router;
    const [language, setLanguage] = useState(router.locale || "pt-BR");

    const trans = locale === "pt-BR" ? ptBR : enUS;

    useEffect(() => {
        const storedLocale = cookies.get("locale");
        if (storedLocale && storedLocale !== router.locale) {
            router.replace(router.asPath, router.asPath, { locale: storedLocale });
            setLanguage(storedLocale);
        }
    }, [router]);

    const chooseLanguage = (selectedLocale) => {
        router.replace(router.asPath, selectedLocale, { locale: selectedLocale, scroll: false });
        setLanguage(selectedLocale);
        cookies.set("locale", selectedLocale);
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="rounded-full w-[35px] h-[35px] tn:w-[33px] tn:h-[33px] inline-flex items-center justify-center bg-gradient-to-r from-custom-violet via-custom-orange to-custom-red shadow-[0_2px_10px] outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-custom-white"
                    aria-label="Customise options"
                >
                    <MdOutlineLanguage size={25} className="text-custom-black-800" />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal >
                <DropdownMenu.Content
                    className="xl:mr-10 min-w-[8rem] bg-custom-orange rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.8)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    <DropdownMenu.Label className="flex justify-center text-[.8rem] font-serif uppercase tracking-wider leading-[25px]">
                        {trans.dropdown.title}
                    </DropdownMenu.Label>
                    <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px] bg-custom-black-400" />

                    <DropdownMenu.RadioGroup value={language} onValueChange={chooseLanguage}>
                        <DropdownMenu.RadioItem
                            className="text-xs cursor-pointer leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:pointer-events-none hover:bg-custom-black-800 hover:text-custom-white hover:font-bold transition-colors"
                            value="pt-BR"
                        >
                            <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                <IoIosArrowForward />
                            </DropdownMenu.ItemIndicator>
                            Português
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                            className="text-xs cursor-pointer leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:pointer-events-none hover:bg-custom-black-800 hover:text-custom-white hover:font-bold transition-colors"
                            value="en-US"
                        >
                            <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                <IoIosArrowForward />
                            </DropdownMenu.ItemIndicator>
                            English
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>
                    <DropdownMenu.Arrow className="fill-custom-orange xl:ml-9" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}

export default LanguageDropdown;