import { DROPDOWN_PT, DROPDOWN_US } from "./components/dropdown"
import { HEADER_PT, HEADER_US } from "./components/header"
import { HOME_PT, HOME_US } from "./pages/home"

export const enUS = {
    //pages
    ...HOME_US,

    //components
    ...DROPDOWN_US,
    ...HEADER_US,
}

export const ptBR = {
    //pages
    ...HOME_PT,

    //components
    ...DROPDOWN_PT,
    ...HEADER_PT,
}