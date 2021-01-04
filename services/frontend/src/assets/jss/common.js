import { blue, indigo } from '@material-ui/core/colors';

const INPUT_HEIGHT = '160px';
const HEADER_HEIGHT = '110px';
const LOADER_SIZE = "400px";

// Colors
const frontPageThemeColor = blue[300];
const textBackgroundThemeColor = blue[50];
const speechBackgroundThemeColor = indigo[900];

// Shadows
const boxShadow =
  '0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)';

const buttonSize = '3em';
const backgroundBase = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

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

const blockButton = {
  ...toggleCenter,
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: '14px 28px',
  '&:hover': {
    boxShadow: boxShadow,
  },

}

const internalContainer = {
  height: '100%',
  margin: 'auto',
  boxSizing: 'border-box',
  width: '80%',

  '@media (min-height: 400px)': {
    marginTop: '100px',
    marginBottom: '100px',
  },
}

const label = {
  width: '50%',
  marginTop: '20px',
  marginBottom: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
};

// Animation
const rotation = {
  '@-moz-keyframes rotation': {
    '0%': {
      '-moz-transform': 'rotate(0deg)',
    },
    '100%': {
      '-moz-transform': 'rotate(360deg)',
    },
  },
  '@-webkit-keyframes rotation': {
    '0%': {
      '-webkit-transform': 'rotate(0deg)',
    },
    '100%': {
      '-webkit-transform': 'rotate(360deg)',
    },
  },
  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  }
}

const ellipsesBounce = {
  '@-moz-keyframes bounce': {
    '0%, 50%, 100%': {
      '-moz-transform': 'scale(0.8)',
    },
    '25%': {
      '-moz-transform': 'scale(0.6)',
    },
    '75%': {
      '-moz-transform': 'scale(1.0)',
    },
  },
  '@-webkit-keyframes spin': {
    '0%, 50%, 100%': {
      '-webkit-transform': 'scale(0.8)',
    },
    '25%': {
      '-webkit-transform': 'scale(0.6)',
    },
    '75%': {
      '-webkit-transform': 'scale(1.0)',
    },
  },
  '@keyframes bounce': {
    '0%, 50%, 100%': {
      transform: 'scale(0.8)',
    },
    '25%': {
      transform: 'scale(0.6)',
    },
    '75%': {
      transform: 'scale(1.0)',
    },
  },
};

const ellipsesBubble = {
  width: '1.5vw',
  height: '1.5vw',
  borderRadius: '100%',
  margin: '2px',
  animation: '$bounce 1.0s 0.5s linear infinite',
};

const widgetBase = {
  width: LOADER_SIZE,
  height: LOADER_SIZE,
}

const widgetRing = {
  ...widgetBase,
  position: 'absolute',
  pointerEvents: 'none'
}

export {
  frontPageThemeColor,
  textBackgroundThemeColor,
  speechBackgroundThemeColor,
  boxShadow,
  internalContainer,
  buttonSize,
  toggleCenter,
  toggleGroup,
  toggleWidget,
  toLeft,
  toRight,
  blockButton,
  label,
  HEADER_HEIGHT,
  backgroundBase,
  INPUT_HEIGHT,
  widgetBase,
  ellipsesBounce,
  ellipsesBubble,
  widgetRing,
  rotation
};
