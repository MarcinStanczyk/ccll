import React, {useState} from 'react'
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Copyright from "../copyright";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import loginPageStyle from "../../styles/jss/login-css";


// // A custom validation function. This must return an object
// // which keys are symmetrical to our values/initialValues
// const validate = values => {
//     const errors = {};
//
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//
//     if (!values.password) {
//         errors.password = 'Required';
//     } else if (values.password.length < 4) {
//         errors.password = 'Must be 4 characters or more';
//     }
//
//     return errors;
// };



const useStyles = makeStyles(loginPageStyle);

function LoginForm() {
    const [signUpModeState, setSignUpModeState] = useState(false);
    const classes = useStyles();
    // Pass the useFormik() hook initial form values and a submit function that will
// be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: ''
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(4, 'Must be 4 characters or more')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            axios
                .post('http://paws-clinic.herokuapp.com/users/registration', values, {
                    headers: headers
                })
                .then(res => {
                    console.log(JSON.stringify(res, null, 2));
                })
                .catch(err => {
                    console.log(JSON.stringify(err, null, 2));
                })


            // alert('asaaaas')
        },
    });

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Zapisz się
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                <Grid container spacing={2}>
                    { signUpModeState && <> <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            color="primary"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="User Name"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                color="primary"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleChange}
                            />
                        </Grid>
                    </> }
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            color="primary"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            color="primary"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                    <Grid item xs={12}>
                        { signUpModeState && <FormControlLabel
                            control={<Checkbox
                                color="primary"
                            />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        /> }
                        { !signUpModeState && <FormControlLabel
                            control={<Checkbox value="remember"
                                               color="primary" />}
                            label="Remember me"
                        /> }
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Zaloguj sięrabian
                </Button>
                <Grid container>
                    <Grid item xs>
                        { !signUpModeState && <Link color="primary" href="#" variant="body2">
                            Forgot password?
                        </Link> }
                    </Grid>
                    <Grid item>
                        { !signUpModeState && <Link color="primary" onClick={() => {setSignUpModeState(true)}} href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link> }
                        { signUpModeState && <Link color="primary" onClick={() => {setSignUpModeState(false)}} href="#" variant="body2">
                            {'I have an account. Sign In'}
                        </Link> }
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </form>
        </div>
    )
}

export default LoginForm