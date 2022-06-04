import React, {useState} from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom';
import { Button, TextField, Box, Container, Typography, alpha, makeStyles, Link, Grid,
CssBaseline, Avatar} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


function Signupscreen() {

  const [name, setName] = useState();
  const [lastname, setLastame] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  const linkhistory = useHistory();

  const links = async () => {
    linkhistory.push('/signin')
  }

  const signup = async () => {
    await axios({
    method: 'post',
    url: '/signup',
    data: {body:{name:name, lastname: lastname, email: email, password: password}},
  })
  .then(history.push('/'))

}
  const hide = async() => {
    document.getElementById('inputs').innerHTML = <div>ji</div>
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 345,
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
          Sign up
        </Typography>
        <form id='inputs' className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastame(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={hide}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>

              <Link onClick={links} variant="body2">
                {'Already have an account? Sign in'}
              </Link>

            </Grid>
          </Grid>
        </form>
        
      </div>
      <Box mt={5}>
      </Box>
    </Container>)
  }

export default Signupscreen;

