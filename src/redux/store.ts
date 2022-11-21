import {createStore} from 'redux'
import languageReducer from "./language/languageReducer";
const store = createStore(languageReducer)
//定义state的类型
export type RootState = ReturnType<typeof store.getState>

