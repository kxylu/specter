import {
  backgroundBase,
  textBackgroundThemeColor,
  speechBackgroundThemeColor,
} from 'assets/jss/common.js';

import textChatBackground from 'assets/img/textChat.jpg';
import speechChatBackground from 'assets/img/speechChat.jpg';

const chatView = (theme) => ({
  textImage: {
    ...backgroundBase,
    backgroundImage: "url('" + textChatBackground + "')",
  },
  speechImage: {
    ...backgroundBase,
    backgroundImage: "url('" + speechChatBackground + "')",
  },

  speechIcon: {
    color: theme.palette.getContrastText(speechBackgroundThemeColor),
  },
  textIcon: {
    color: theme.palette.getContrastText(textBackgroundThemeColor),
  },
});

export default chatView;
