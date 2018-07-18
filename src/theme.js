import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const honest = {
    general: {
        main: '#4c84ff',
        white: '#ffffff',
        red: '#ff4352'
    },
    desktop: {},
    mobile: {},
    globalContainer: {
        maxWidth: 1440
    }
};

const typography = {
    fontFamily: 'Gilroy-SemiBold, sans-serif',
    color: {
        primary: '',
        secondary: ''
    }
};

const theme = createMuiTheme({
    honest,
    typography,
    palette: {},
});

export default theme;