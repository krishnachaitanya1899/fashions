import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Paper, Typography } from '@mui/material';
import { GlobalStyles } from '@mui/styled-engine';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const useStyles = {
    root: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
    form: {
        '& > *': {
            marginBottom: theme.spacing(2),
        },
    },
};


const LoginForm = () => {
    const classes = useStyles;

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={3} className={classes.root}>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <form className={classes.form}>
                        <TextField label="Email" fullWidth />
                        <TextField label="Password" type="password" fullWidth />
                        <Button variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default LoginForm;
