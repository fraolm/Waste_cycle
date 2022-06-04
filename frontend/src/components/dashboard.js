import { AccountCircle, Dashboard } from '@material-ui/icons';
import '../App.css';
import Buy_material from './buy_material';
import { Typography, alpha, makeStyles} from '@material-ui/core';
import React from 'react';
import Estimator from './estimator';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Button, TextField,
  Card, CardActionArea, 
  CardContent, CardMedia} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {  
    const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: theme.palette.background.paper,
      display: 'flex',
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
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
    hide: {
        display: 'none',
      },
      drawer: {
        width: 240,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: 240,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      searchBar2: {
          alignItems: 'right',
          align: 'right'
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }));

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


    const [val, setVal] = useState(1);
    const buy_material = Buy_material()
    const estimator = Estimator()

    const renderHandler = () => {
        if (val === 0) {
            return(
                buy_material
                
            )
        } if (val === 1) {
                return(
                    <div>
                        <Button variant='contained' color='primary' onClick={() => {
                            setVal(0)
                        }}>
                            Start a new order
                        </Button>
                    </div>
                )
            } if (val === 2) {
                return(
                    estimator
                )
            }   if (val === 3) {
                    return(
                        <div>
                            hi3
                        </div>
                    )
                }   if (val === 4) {
                    return(
                        
                            estimator
                        
                    )
                } else{
                    return(
                        <div>
                            {val}
                        </div>)
                }
    };

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
        <body className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='white'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
          <div className='Topbar'>
            <div className='Topbar-Wrapper'>
            <div className='Topbar-left'>
                <div className='TopbarIcon-container'>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                    >
                        <MenuIcon />
                    </IconButton>

                </div>
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
          </Toolbar>

          
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List >
          <ListItem button key='1' onClick={()=>{setVal(1)}}>
                <ListItemIcon>{<Dashboard style = {{ fontSize: 25, marginRight: 5}}/>}</ListItemIcon>
                <ListItemText primary='Home'/>
          </ListItem>

          <ListItem button key='2' onClick={()=>{setVal(2)}} >
                <ListItemIcon>{<AccountCircle style = {{ fontSize: 25, marginRight: 5}}/>}</ListItemIcon>
                <ListItemText primary='Account'/>
          </ListItem>

          <ListItem button key='3' onClick={()=>{setVal(3)}}>
                <ListItemIcon>{<svg style = {{ marginRight: 5}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 30.289 33.164">
                                    <g  id="Icon_feather-package" data-name="Icon feather-package" transform="translate(-2.856 -1.456)">
                                        <path style = {{fill: 'currentColor'}}  id="Path_55" data-name="Path 55" d="M24.75,14.1,11.25,6.315" fill="#000" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        <path style = {{fill: 'currentColor'}}  id="Path_56" data-name="Path 56" d="M31.5,24V12A3,3,0,0,0,30,9.4l-10.5-6a3,3,0,0,0-3,0L6,9.4A3,3,0,0,0,4.5,12V24A3,3,0,0,0,6,26.595l10.5,6a3,3,0,0,0,3,0l10.5-6A3,3,0,0,0,31.5,24Z" fill="#000" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        <path style = {{fill: 'currentColor'}}  id="Path_57" data-name="Path 57" d="M4.905,10.44,18,18.015,31.095,10.44" fill="#000" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        <path style = {{fill: 'currentColor'}}  id="Path_58" data-name="Path 58" d="M18,33.12V18" fill="#000" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                    </g>
                                </svg>}
                                </ListItemIcon>
                <ListItemText primary='Orders'/>
          </ListItem>
            
          <ListItem button key='4' onClick={()=>{setVal(4)}}>
                <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                <ListItemText primary='Estimator'/>
          </ListItem>

          </List>
        </Drawer>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <div id="main" >
            {renderHandler()}
        </div>
      </main>
    </body>
    )
}

export default Sidebar
