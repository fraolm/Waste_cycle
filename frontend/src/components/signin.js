import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Container, Typography, alpha, makeStyles, Link, Grid,
CssBaseline, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert, AlertTitle } from '@material-ui/lab';


function Signinscreen() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  var dates = {}

  const [alerts, setAlerts] = useState();
  const history = useHistory();
 
  const linkhistory = useHistory();
  const links = async () => {
    linkhistory.push('/signup')
  };

  const gotoPage = async () => {
    await axios.get('/theuserss')
    .then((response)=> {
        const resp = JSON.stringify(response.data[response.data.length - 1].id);
        const dte = JSON.stringify(response.data[response.data.length - 1].date);
        history.push('/dash/'+resp+dte)
        
      })}

  const signin = async () => {
    await axios.get('/signin')
    .then((response)=> {
        const resp = response.data.rows
        dates = response.headers.date

        var emails = [];
        var passwords = [];
        var ids = [];

        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            emails.push(element.doc.email);
            passwords.push(element.doc.password);
            ids.push(element.doc._id)
            
        }
        checks(emails, passwords, ids, dates)}
        )}

  const checks = (emails, passwords, ids, dates) =>{
    if (emails.includes(email)) {
        const emaillocation = emails.indexOf(email)
        if (passwords[emaillocation] === password) {
            axios({
              method: 'post',
              url: '/theuser',
              data: {body:{id: ids[emaillocation], date: dates}},
            });
            gotoPage()
              
        } else(
        setAlerts(
            <Alert severity="error">
            <AlertTitle>Wrong username or password</AlertTitle>
            </Alert>)
        )

    } else{
        setAlerts(
            <Alert severity="error">
            <AlertTitle>Wrong username or password</AlertTitle>
            </Alert>
        )
    }

  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 345,
      '& > * + *': {
        marginTop: theme.spacing(2),
        },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      maxWidth: 345,
      width: '100%',
    },
    media: {
      height: 140,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
        Sign in
    </Typography>
    <form className={classes.form} noValidate>
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
        />
        {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        /> */}
        <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={signin}
        >
        Sign In
        </Button>
        
        <React.Fragment>
            {alerts}
        </React.Fragment>

        <Grid container>
        <Grid item xs>
        </Grid>
        <Grid item>
            <Link onClick={links} variant="body2">
            {"Don't have an account? Sign Up"}
            </Link>
        </Grid>
        </Grid>
    </form>
    </div>
    </Container>)
  }

export default Signinscreen;






