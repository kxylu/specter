import { orange, brown } from '@material-ui/core/colors';

const backgroundColor = orange[50];
const darkBackgroundColor = brown[500];

const hoverShadow =
  '0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)';

const toggleWidget = {
  height: '50px',
  borderRadius: '28px',
  border: '1px solid',
  width: '50%',
};

const toLeft = {
  float: 'left',
};

const toRight = {
  float: 'right',
};

const toggleCenter = {
  marginLeft: '25%',
  marginRight: '25%',
};

const toggleGroup = {
  ...toggleWidget,
  ...toggleCenter,
};

const label = {
  width: '50%',
  marginTop: '20px',
  marginBottom: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
};

const spin = {
  '@-moz-keyframes spin': {
    from: { '-moz-transform': 'rotate(0deg)' },
    to: { '-moz-transform': 'rotate(360deg)' },
  },
  '@-webkit-keyframes spin': {
    from: { '-webkit-transform': 'rotate(0deg)' },
    to: { '-webkit-transform': 'rotate(360deg)' },
  },
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};
export {
  hoverShadow,
  toggleCenter,
  toggleGroup,
  backgroundColor,
  toggleWidget,
  toLeft,
  toRight,
  label,
  spin,
  darkBackgroundColor,
};
