import { widgetBase, widgetRing, rotation } from 'assets/jss/common.js';

const SpeechSvG = (theme) => ({
  ...rotation,
  svgContainer: {
    width: '50%',
  },
  widgetLoading: {
    ...widgetBase,
  },
  widgetRing: {
    ...widgetRing,
    '&:first-child': {
      transform: 'skew(30deg,20deg)',
    },
    '&:last-child': {
      transform: 'skew(-30deg,-20deg) scale(-1, 1)',
    },
  },
  leftRing: {
    ...widgetRing,
    fill: 'white !important',
  },
  rightRing: {
    ...widgetRing,
    fill: 'white !important',

    animationDelay: '-0.5s',
  },
  speaking: {
    animation: '$rotation 1s linear infinite',
  },
});

export default SpeechSvG;
