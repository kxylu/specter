import axios from 'axios';
import {
    ROOT_URL,
    MESSAGE_PATH,
    START_CHAT,
} from 'js/constants'

export const startChat = () => {
    return ({
        type: START_CHAT
    })
    // return (dispatch) => {
    //   dispatch(fetchMessageRequest());
    //   axios
    //     .get(ROOT_URL + MESSAGE_PATH)
    //     .then((response) => {
    //       dispatch(fetchMessageSuccess(response.data));
    //     })
    //     .catch((error) => {
    //       dispatch(fetchMessageError(error));
    //     });
    // };
  };