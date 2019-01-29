import { createStore,combineReducers } from 'redux'
import todoApp from './reducers'

const store = createStore(combineReducers({
    todoApp
}))

export default store



   