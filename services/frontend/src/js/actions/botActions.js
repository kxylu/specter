import {
    BOT_TOGGLE,
    MODE_TOGGLE
} from 'js/constants'

// TODO
export const modeToggle = () => {
    console.log("Called Model Toggle");
    return ({
        type: MODE_TOGGLE
    })
  };

  export const botToggle = () => {
    console.log("Called Bot Toggle");
    return ({
        type: BOT_TOGGLE
    })
  };