import React, { useEffect } from "react";
import { useTimer, TimerSettings } from 'react-timer-hook';
import { Box, Button, Card, CardActions, CardContent, FormControlLabel, IconButton, Slide, Switch, Typography } from '@mui/material';
import "./Headband.css";


export default function Headband({ onEndLoading }: { onEndLoading: (status: boolean) => void}) {
  const [checked, setChecked] = React.useState<boolean>(true);
  const [flag, setFlag] = React.useState<boolean>(false);
  // Таймер +++++++++++++++++++++++++++++++
  // Таймер +++++++++++++++++++++++++++++++
  // Таймер +++++++++++++++++++++++++++++++
  const v_time: Date = new Date();
  v_time.setSeconds(v_time.getSeconds() + 250000);
  const timer_settings: TimerSettings = {
    autoStart: false,
    expiryTimestamp: v_time,
    onExpire: () => {
      if(!flag){
        setChecked(false);
        setFlag(true);
      }
      else{
        onEndLoading(true);
      }
    }
  }

  const { restart, resume, start, isRunning } = useTimer(timer_settings);

  function restart_timer(time_in_seconds: number) {
    const v_time: Date = new Date();
    v_time.setSeconds(v_time.getSeconds() + time_in_seconds);
    restart(v_time, true)
  }

  useEffect(() => {
    if(!flag){
    if (checked) {
      start()
      restart_timer(1.5)
    }}
    else{
      start();
      restart_timer(0.008);
    }
  }, [isRunning])
  // Таймер -------------------------------
  // Таймер -------------------------------
  // Таймер -------------------------------

  return (
    <Box top={0} position="relative">


      <Slide timeout={{ appear: 1000, enter: 800, exit: 500 }} direction={"left"} in={checked} appear={false} mountOnEnter unmountOnExit >
        <Box sx={{ zIndex: 100}}>
          <Box sx={{width: "63vw", height:"100vh", right: "0vh"}} className='rightHeadband' />
        </Box>
      </Slide>

      <Slide timeout={{ appear: 1000, enter: 800, exit: 500 }} direction={"right"} in={checked} appear={false} mountOnEnter unmountOnExit>
        <Box sx={{ zIndex: 100}}>
          <Box sx={{width: "63vw", height:"100vh", left: "0vh"}} className='leftHeadband' />
        </Box>
      </Slide>
    </Box>
  );
}