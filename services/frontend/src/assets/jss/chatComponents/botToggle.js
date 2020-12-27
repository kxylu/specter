import { frontPageThemeColor } from 'assets/jss/common.js';

const botToggle = (theme) => ({
  buttonBox: {
    height: '100%',
    position: 'fixed',
    width: '25%',
    top: '0',
  },
  leftButton: {
    left: '0',
  },
  rightButton: {
    right: '0',
  },
  arrow: {
    color: theme.palette.getContrastText(frontPageThemeColor),
  },
});

export default botToggle;
