
import {createStore} from "redux"
import { numberReducer } from "./reducer"


const store=createStore(numberReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store