import {
    hoverShadow,
    toggleGroup,
    backgroundColor,
    toggleWidget,
    toLeft,
    toRight,
    label
} from 'assets/jss/common.js';




const modeToggle = (theme) => ({
    modeToggle: {
        marginBottom: "10%",

    },
    modeToggleGroup: {
        ...toggleGroup,
        borderColor: theme.palette.getContrastText(backgroundColor),
        backgroundColor: "transparent !important",

    },
    handleAll: {
        ...toggleWidget,
        borderColor: theme.palette.getContrastText(backgroundColor),
        height: "100%",
        backgroundColor: theme.palette.getContrastText(backgroundColor),
        display: "block",
        
        "&:hover": {
            boxShadow: hoverShadow
        }
    },
    handleLeft: {
        ...toLeft,
    },
    handleRight: {
        ...toRight
    },
    label: {
        ...toggleGroup,
        border: 'none'
    },

    labelLeft: {
        ...label,
        ...toLeft,
        color: theme.palette.getContrastText(backgroundColor),
    },
    labelRight: {
        ...label,
        ...toRight,
        color: theme.palette.getContrastText(backgroundColor),
    },
    highlight: {
        textDecoration: "underline"
    }

});

export default modeToggle;
