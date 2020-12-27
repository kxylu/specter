import { BOT_TOGGLE, MODE_TOGGLE } from 'js/constants';

export const modeToggle = () => {
  return {
    type: MODE_TOGGLE,
  };
};

export const botToggle = () => {
  console.log('Called Bot Toggle');
  return {
    type: BOT_TOGGLE,
  };
};
