import {
    SAMPLE_BOT,
} from 'js/constants'

const initialState = {
    currBot: SAMPLE_BOT,
    botQueue: [], // TODO: Temporary Bot Queue Loaded
}

const botReducer = (state=initialState, action) => {
    switch (action.type)
    {
        default:
            return state;
    }
}
export default botReducer;