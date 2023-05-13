import i18next from "i18next"
import { initReactI18next } from 'react-i18next';

import { DROPDOWN_PT, DROPDOWN_US } from "./components/dropdown"
import { HEADER_PT, HEADER_US } from "./components/header"
import { HOME_PT, HOME_US } from "./pages/home"

const english = {
    translation: {
        //pages
        ...HOME_US,
        //components
        ...DROPDOWN_US,
        ...HEADER_US,
    }
}

const portuguese = {
    translation: {
        //pages
        ...HOME_PT,
        //components
        ...DROPDOWN_PT,
        ...HEADER_PT,
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                ...portuguese
            },
            en: {
                ...english
            },
        },
        lng: "en",
        interpolation: {
            escapeValue: false,
        }
    });