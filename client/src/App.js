import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#7776b3",
    color: "white",
    borderRadius: 0,
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
    width: '100%',
    border: 'none',
    
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));



const App = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.wrapper1}>
      <AppBar className={classes.appBar} position="sticky" color=" #7776b3">
        <Typography variant="h2" align="center">Video Chat</Typography> 
      </AppBar>
      <VideoPlayer />
      <Button variant="contained" color=" #7776b3" onClick={event =>  window.location.href= "http://localhost:5000"}>TO LOGOUT</Button> 
      <Options>
        <Notifications />
      </Options>
    </div>
    </>
   
  );
};



export default App;