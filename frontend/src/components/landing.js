import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Button, TextField,
  Toolbar, Typography, alpha, makeStyles, Card, CardActionArea, 
  CardContent, CardMedia} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

      
      
export default function Landing () {
    const [respon, setRespon] = useState([{title: ''}]);

    const getlinks = (option) => {
        if (option.title ==='') {
          return (<p></p>)
        } else {
          return (
          <Card className={classes.root}>
            <Button onClick={<link to={option.url}></link>}>
          
              <CardActionArea>
                
                  <CardMedia
                    className={classes.media}
                    image={option.main_image_url}
                  />
    
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {option.title}
                    </Typography>
                  </CardContent>
                  
                  <Button size="small" color="primary">
                    <a href={option.url} rel="noreferrer">
                      Read More
                    </a>
                  </Button>
                  
             </CardActionArea>
             </Button>
            
            </Card>)
        }
      }

      const addName = async (name) => {
          await axios({
          method: 'post',
          url: '/l',
          data: {body:{query:name}},
        })
        .then((response) => {
          const resp = response.data;
          setRespon(resp);
    
        }, (error) => {
          console.log(error);
        });
    
      };

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        tabs: {
          borderRight: `1px solid ${theme.palette.divider}`,
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
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '70ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    const classes = useStyles();
        
    return(
        <Toolbar>
        <div className='Topbar'>
            <div className='Topbar-Wrapper'>
                <div className='Topbar-left'>
                    <span className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="40" height="60.43" viewBox="0 0 110.463 96.43">
                            <defs>
                                <linearGradient id="linear-gradient" x1="0.118" y1="0.39" x2="1" y2="0.831" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#5acbb1" />
                                    <stop offset="1" stop-color="#4c8ff8" />
                                </linearGradient>
                            </defs>
                            <path id="Icon_awesome-recycle" data-name="Icon awesome-recycle" d="M39.819,49.327c.7,2.636-2.616,4.64-5.193,3.233l-8.789-4.794L14.863,63.1c-2.866,4,.447,9.225,5.851,9.225H31.931a2.441,2.441,0,0,1,2.589,2.26v7.534a2.441,2.441,0,0,1-2.589,2.26H20.737c-16.253,0-26.171-15.641-17.564-27.663L14.138,41.384,5.351,36.591C2.745,35.17,3.417,31.7,6.4,31.1l23.783-4.793a3.494,3.494,0,0,1,4.14,2.258l5.491,20.762Zm21.264-34.45,8.908,12.445L61.2,32.116C58.6,33.534,59.26,37,62.254,37.607L86.037,42.4a3.494,3.494,0,0,0,4.14-2.258l5.491-20.762c.69-2.607-2.587-4.656-5.193-3.233L81.7,20.935,72.795,8.49c-8.1-11.307-27.014-11.333-35.127,0l-3.875,5.418a2.1,2.1,0,0,0,.824,3.114l7.318,3.992a2.818,2.818,0,0,0,3.568-.719l3.875-5.413C52.12,11.05,58.433,11.175,61.083,14.877Zm46.206,41.836-5.936-8.3a2.818,2.818,0,0,0-3.568-.72l-7.305,3.985a2.1,2.1,0,0,0-.824,3.114L95.6,63.1c2.86,3.995-.444,9.221-5.855,9.221H69.039V63.286c0-2.677-3.72-4.027-5.893-2.131L45.887,76.219a2.751,2.751,0,0,0,0,4.262l17.26,15.065c2.158,1.884,5.893.564,5.893-2.131V84.376H89.725C105.965,84.376,115.9,68.744,107.289,56.713Z" transform="translate(0 0)" fill="url(#linear-gradient)" />
                        </svg>

                    </span>
                </div>
                <div className='Topbar-right'>
                    <div className='TopbarIcon-container'>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                        </div>
                        <Autocomplete
                        freeSolo
                        className={classes.inputInput}
                        id="input22"
                        options={respon}
                        getOptionLabel={(option) => option.title}
                        renderOption={(option) => (
                            <React.Fragment>
                            {getlinks(option)}
                            </React.Fragment>
                        )}
                        renderInput={(params) => (
                            <TextField 
                            {...params}
                            placeholder='Search...'
                            onChange={(e) => {
                                addName(e.target.value)
                            }}

                            InputProps={{ ...params.InputProps, type: 'search'}}
                            />
                            )}

                        />

            </div>
            </div>
            </div>



            
        </div>
        </Toolbar>)}