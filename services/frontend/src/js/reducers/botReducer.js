import {
    SAMPLE_BOT,
    MODE_TOGGLE
} from 'js/constants'
import { SPEECH_MODE } from 'js/constants';

const initialState = {
    ... SAMPLE_BOT,
    isSpeech: false,
    botQueue: [], // TODO: Temporary Bot Queue Loaded
}

const botReducer = (state=initialState, action) => {
    switch (action.type)
    {
        case MODE_TOGGLE:
            return {
                ...state,
                isSpeech: !state.isSpeech
            }
        default:
            return state;
    }
}
export default botReducer;