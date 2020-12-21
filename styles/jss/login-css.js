const loginPageStyle = (theme) => ({
    root: {
        height: '100vh',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.primary.background : theme.palette.secondary.background,
    },
    image: {
        backgroundImage: 'url(./login_img.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRight: '1px solid #111',
        [theme.breakpoints.up('lg')]: {
            backgroundPosition: 'top',
        },
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.grey,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: '#000',
        fontSize: '1rem'
    }
});

export default loginPageStyle