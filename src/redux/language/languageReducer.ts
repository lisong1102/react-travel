import {
    CHANGE_LANGUAGE,
    ADD_LANGUAGE,
    LanguageActionTypes,
} from "./languageActions";
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
