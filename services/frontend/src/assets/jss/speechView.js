import {
    internalContainer,
    blockButton,
    buttonSize,
    speechBackgroundThemeColor
} from 'assets/jss/common.js';


const speechView = (theme) => ({
    speechPageContainer: {
        ...internalContainer,

    },
    speechContent: {
        marginTop: '10px',
    },
    blockButton: {
        ...blockButton,
        color: theme.palette.getContrastText(speechBackgroundThemeColor),

        '&:active': {
            border: '2px solid',
            borderColor: theme.palette.getContrastText(speechBackgroundThemeColor),
          },
    },
    stopButton: {
        fontSize: buttonSize,
    }
});

export default speechView;
