import React, { useState} from 'react';
import axios from 'axios';
import { Button, Container, alpha, makeStyles} from '@material-ui/core';

function Postsscreen() {

  const [mann, setMann] = useState();

  const posts = async () => {
    await axios.get('/seeposts')
    .then((response)=> {
        const resp = response.data.rows
        var fornow = [];
        var type = [];
        var amount = [];
        var method = [];
        var price = [];

        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            type.push(element.doc.plastic);
            amount.push(element.doc.weight);
            method.push(element.doc.method)
            price.push(element.doc.price)
            fornow.push({
                'type': type[index],
                'amount': amount[index],
                'method': method[index],
                'price': price[index]
            })
            
        }
    setMann(fornow)
    }
        )}

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
    <Container component="main" maxWidth="xs" className={classes.root}>
        <Button onClick={posts}>CLICK ME</Button>
        <p>{JSON.stringify(mann)}</p>
    </Container>)
  }

export default Postsscreen;






