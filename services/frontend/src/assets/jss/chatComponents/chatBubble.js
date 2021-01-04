import {
  toLeft,
  toRight,
  boxShadow,
  ellipsesBubble,
  ellipsesBounce,
  textBackgroundThemeColor,
} from 'assets/jss/common.js';

const chatBubble = (theme) => ({
  ...ellipsesBounce,
  botBubble: {
    ...toLeft,
  },
  chatIdentity: {
    wordWrap: 'break-word',
    width: '100px',
    height: '100%',
    marginTop: '40px',
  },
  userBubble: {
    ...toRight,
  },
  chatContainer: {
    clear: 'both',
    marginTop: '25px',

    marginBottom: '25px',
  },
  chatIcon: {
    fontSize: '2rem',
    marginRight: '10px',
    marginLeft: '10px',
  },
  bubbleName: {},
  chatBox: {
    wordWrap: 'break-word',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontSize: '15px',
    width: '300px',
    backgroundColor: 'white',
    boxShadow: boxShadow,
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  first: {
    ...ellipsesBubble,
    backgroundColor: theme.palette.getContrastText(textBackgroundThemeColor),
  },
  second: {
    ...ellipsesBubble,
    backgroundColor: theme.palette.getContrastText(textBackgroundThemeColor),
    animationDelay: '0.1s',
  },
  third: {
    ...ellipsesBubble,
    backgroundColor: theme.palette.getContrastText(textBackgroundThemeColor),
    animationDelay: '0.2s',
  },
});

export default chatBubble;
