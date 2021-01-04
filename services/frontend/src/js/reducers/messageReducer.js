import {
    STATUS_LOADING,
    STATUS_SUCCESS,
    STATUS_FAILED,
    CHAT_HISTORY
} from 'js/constants'

const initialState = {
    ...STATUS_LOADING,
    messageHistory: CHAT_HISTORY

}

const messageReducer = (state=initialState, action) => {
    switch (action.type)
    {
        default:
            return state;
    }
}
export default messageReducer;