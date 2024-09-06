import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Card, CardActions, CardContent, FormControlLabel, IconButton, Slide, Switch, Typography } from '@mui/material';

import { styled } from '@mui/system';
import { useTimer, TimerSettings } from 'react-timer-hook';


import Headband from './components/Headband/Headband';
import MySlides from './components/MySlides/MySlides';



function Loader() {
  const [endLoading, setLoadingStatus] = React.useState<boolean>(false)

  // Таймер +++++++++++++++++++++++++++++++
  // Таймер +++++++++++++++++++++++++++++++
  // Таймер +++++++++++++++++++++++++++++++
  const v_time: Date = new Date();
  v_time.setSeconds(v_time.getSeconds() + 0.1);
  const timer_settings: TimerSettings = {
    autoStart: false,
    expiryTimestamp: v_time,
    onExpire: () => {
      // setLoadingStatus(true)
    }
  }

  const { restart, resume, start, isRunning } = useTimer(timer_settings);

  function restart_timer(time_in_seconds: number) {
    const v_time: Date = new Date();
    v_time.setSeconds(v_time.getSeconds() + time_in_seconds);
    restart(v_time, true)
  }
  // Таймер -------------------------------
  // Таймер -------------------------------
  // Таймер -------------------------------


  return (
    <Box>
      {endLoading ?
        (
          <Box sx={{ overflowX: "hidden", overflowY: "hidden", zIndex: 50 }}>
            <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
              <Typography paddingTop="0.8vh" variant='h3'>XTRONIK</Typography>
            </Box>
            <MySlides />
          </Box>
        )
        : (
          <Headband onEndLoading={(status) => {
            setLoadingStatus(true);
          }} />
        )}

    </Box>
  );

}


function App() {
  return (
    <Box >
      <Loader />
    </Box>
  );
}

export default App;
