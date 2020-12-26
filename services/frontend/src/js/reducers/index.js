import { combineReducers } from 'redux'

import messageReducer from './messageReducer'
import botReducer from './botReducer'

export default combineReducers({
    'message':  messageReducer,
    'botInfo':  botReducer

})
