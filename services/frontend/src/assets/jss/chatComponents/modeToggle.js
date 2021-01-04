import {
  boxShadow,
  toggleGroup,
  frontPageThemeColor,
  toggleWidget,
  toLeft,
  toRight,
  label,
} from 'assets/jss/common.js';

const modeToggle = (theme) => ({
  modeToggle: {
    marginBottom: '10%',
  },
  modeToggleGroup: {
    ...toggleGroup,
    borderColor: theme.palette.getContrastText(frontPageThemeColor),
    backgroundColor: 'transparent !important',
  },
  handleAll: {
    ...toggleWidget,
    borderColor: theme.palette.getContrastText(frontPageThemeColor),
    height: '100%',
    backgroundColor: theme.palette.getContrastText(frontPageThemeColor),
    display: 'block',

    '&:hover': {
      boxShadow: boxShadow,
    },
  },
  handleLeft: {
    ...toLeft,
  },
  handleRight: {
    ...toRight,
  },
  label: {
    ...toggleGroup,
    border: 'none',
  },

  labelLeft: {
    ...label,
    ...toLeft,
    color: theme.palette.getContrastText(frontPageThemeColor),
  },
  labelRight: {
    ...label,
    ...toRight,
    color: theme.palette.getContrastText(frontPageThemeColor),
  },
  highlight: {
    textDecoration: 'underline',
  },
});

export default modeToggle;
