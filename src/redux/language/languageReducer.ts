import {
    CHANGE_LANGUAGE,
    ADD_LANGUAGE,
    LanguageActionTypes,
} from "./languageActions";
import i18n from "i18next";
interface LanuageState {
    language: "en" | "zh";
    languageList: { name: string; code: string }[];
}
const defaultState: LanuageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" },
    ],
};
//将组合类型赋值给action使其具有校验功能
export default (state = defaultState, action: LanguageActionTypes) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            i18n.changeLanguage(action.payload); // 这样处理是不标准的，有副作用
            return { ...state, language: action.payload };
            break;
        case ADD_LANGUAGE:
            return {
                ...state,
                languageList: [...state.languageList, action.payload],
            };
        default:
            return { ...state };
            break;
    }
};
