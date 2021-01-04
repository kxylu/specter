import {
    INPUT_HEIGHT,
    HEADER_HEIGHT
} from 'assets/jss/common.js';


const textView = (theme) => ({
    chatViewContainer: {
        height: "calc(100% - " + INPUT_HEIGHT + ")",
        overflowY: 'auto',
        width: '80%',
        textAlign: 'center',
        margin: 'auto'
    },
    chatGrid: {
        height: "calc(100% - " + HEADER_HEIGHT + ")",
        marginTop: '30px',
        position: 'absolute',
        width: '100%',
        top: HEADER_HEIGHT,
        bottom: 0
    }

});

export default textView;
