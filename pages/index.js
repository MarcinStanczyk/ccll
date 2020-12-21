import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import loginPageStyle from '../styles/jss/login-css';
import LoginForm from "../components/forms/login-form";

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {
    const [formMode, changeFormMode] = useState()
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/*<MainDashbord />*/}
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5}  elevation={6}>
                <LoginForm />
            </Grid>
        </Grid>
    );
}
