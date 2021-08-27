import { createTheme, responsiveFontSizes } from '@material-ui/core'

let theme = createTheme({
    palette: {
        primary: {
            main: '#231f20',
            dark: '#000000',
            light: '#211d1e',
        },
        secondary: {
            main: '#976d3f',
        },
        grey: {
            100: '#ebebeb',
            200: '#b2b2b2'
        
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            'monospace'

        ].join(','),
        fontWeightLight: 400,
    }
});

theme = responsiveFontSizes(theme)

export default theme;