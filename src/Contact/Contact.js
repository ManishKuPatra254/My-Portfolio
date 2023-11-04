import React, { Fragment, useRef } from 'react'
import style from './Contact.module.css'
import transition from '../Transition'
import { Button, TextField, ThemeProvider, createTheme, useTheme } from '@mui/material'
import { Grid } from '@mui/material';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': 'white',
                        '--TextField-brandBorderHoverColor': 'white',
                        '--TextField-brandBorderFocusedColor': 'white',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },

            MuiInput: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        '&:before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

const Contact = () => {
    const outerTheme = useTheme();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5iqmjnu', 'template_tbifx9k', form.current, '5NE2Fm8c_P7gvpl2c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        toast.success('Successfully send')
    };
    const labelStyles = {
        color: 'white',
    }
    return (
        <Fragment>

            <div className={style.contact_form}>
                <h2>Connect With Me</h2>
                <Grid>
                    <div className={style.form_group} >
                        <form ref={form} onSubmit={sendEmail}>
                            <Grid container spacing={2.2}>
                                <Grid xs={12} item>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField placeholder="Enter name" label=" Name"
                                            variant="standard"
                                            name='user_name'
                                            fullWidth required InputLabelProps={{
                                                style: labelStyles,
                                            }} />
                                    </ThemeProvider>
                                </Grid>

                                <Grid item xs={12}>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField type="email" placeholder="Enter email" label="Email"
                                            name='user_email'
                                            variant="standard" fullWidth required InputLabelProps={{
                                                style: labelStyles,
                                            }} />
                                    </ThemeProvider>
                                </Grid>

                                <Grid item xs={12}>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField label="Message" multiline rows={4} placeholder="Type your message here"
                                            name='message'
                                            variant="standard" fullWidth required InputLabelProps={{
                                                style: labelStyles,
                                            }} />
                                    </ThemeProvider>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button sx={{ width: '50%' }} type="submit"
                                        value='Send' onClick={sendEmail}
                                        variant="contained">Submit</Button>
                                    <Toaster />
                                </Grid>

                            </Grid>
                        </form>
                    </div>
                </Grid>
            </div>
        </Fragment>
    )
}

export default transition(Contact)

