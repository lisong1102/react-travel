import {useSelector as useReactSelector,TypedUseSelectorHook} from 'react-redux'

import { RootState } from './store'

//重新useSelector的类型通过TypedUseSelectorHook包裹
export const useSelector : TypedUseSelectorHook<RootState> = useReactSelector