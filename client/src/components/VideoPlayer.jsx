import React, { useContext } from 'react';
import { Button, Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
//import purple from '@material-ui/core/colors/purple';
import VideocamIcon from '@material-ui/icons/Videocam';
//import VideocamOffIcon from '@material-ui/icons/VideocamOff';

import { SocketContext } from '../SocketContext';

//const accent = purple['A200'];

const useStyles = makeStyles((theme) => ({
  video: {
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
   
  },
  buttonGridContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '20px',
    border: '0px solid black',
    margin: '10px',
    borderRadius: '10px'
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: 100,
  },
}));



const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, toggleVideo, muteCall } = useContext(SocketContext);
  const classes = useStyles();

/*const video = () => {
  <Button
        variant="contained"
        color="accent"
        className={classes.button}
        startIcon={<VideocamOffIcon />}
        
      >
        VIDEO
      </Button>

}*/ 

  return (
    <div>
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {name || 'Name'}
              </Typography>
              <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {call.name || 'Name'}
              </Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.buttonGridContainer}>
        <Button
        variant="contained"
        color="accent"
        className={classes.button}
        startIcon={<VideocamIcon />}
        onClick={toggleVideo}
        
      >
        VIDEO
      </Button>
        </Grid>

        <Grid item xs={12} md={6} className={classes.buttonGridContainer}>
        <Button
        variant="contained"
        color="accent"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
        onClick={muteCall}
      >
        MUTE
      </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;