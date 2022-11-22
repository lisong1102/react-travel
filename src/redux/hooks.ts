import {useSelector as useReactSelector,TypedUseSelectorHook} from 'react-redux'

import { RootState } from './store'

//重新useSelector的类型通过TypedUseSelectorHook包裹来重新定义store类型
export const useSelector : TypedUseSelectorHook<RootState> = useReactSelector