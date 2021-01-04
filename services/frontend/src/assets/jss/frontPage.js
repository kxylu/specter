import {
  rotation,
  backgroundBase,
  internalContainer,
  frontPageThemeColor,
  blockButton,
} from 'assets/jss/common.js';

import defaultBackground from 'assets/img/defaultBackground.jpg';

const frontPage = (theme) => ({
  ...rotation,
  frontPageContainer: {
    ...backgroundBase,
    backgroundImage: "url('" + defaultBackground + "')",
  },
  internalContainer: {
    ...internalContainer,
  },
  textStyle: {
    color: theme.palette.getContrastText(frontPageThemeColor),
    textAlign: 'center',
  },

  chatButton: {
    marginTop: '10%',
  },

  chatIcon: {
    fontSize: '3em',
    '&:hover': {
      animation: '$rotation 0.7s linear',
    },
  },

  blockButton: {
    ...blockButton,
    color: theme.palette.getContrastText(frontPageThemeColor),

    '&:active': {
      border: '2px solid',
      borderColor: theme.palette.getContrastText(frontPageThemeColor),
    },
  },
});

export default frontPage;
