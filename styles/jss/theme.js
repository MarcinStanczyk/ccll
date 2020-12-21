import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#C43E33',
            background: '#fff',
        },
        secondary: {
            main: '#55abd6',
            background: '#111B1D',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#000',
        },
        type: "dark"
    },
});

export default theme;