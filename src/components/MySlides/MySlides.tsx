import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, FormControlLabel, Grid, IconButton, Slide, Switch, Typography } from '@mui/material';

import { styled } from '@mui/system';
import { useTimer, TimerSettings } from 'react-timer-hook';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HelloPage from '../Pages/HelloPage';
import PageWorker from '../Pages/PageWorker';
import axios from 'axios';

import conf from "../../serverConfig.json"

export default function MySlides() {
  const [checked, setChecked] = React.useState<boolean|undefined>(true);
  const [direction, setDirection] = React.useState<"right" | "left" | "up" | "down" | undefined>("right");
  const [flag, setFlag] = React.useState<boolean|undefined>(false);


  const [b_nav_disabled_l, setBNavDisabled_l] = React.useState<boolean>(false)
  const [b_nav_disabled_r, setBNavDisabled_r] = React.useState<boolean>(false)


  const [m_map, setMmap] = React.useState<number[][]>([[],])

  const [start_index, set_start_index] = React.useState(0)
  const [end_index, set_end_index] = React.useState(9)
  
  const [pagePosition, setPagePosition] = React.useState({ x: 1, y: 1 });


  useEffect(() => {
    // Получение карты сайта 
    axios.get(conf.addr + "/" + "map").then(
      (res) => {
        setMmap(res.data.map);
        set_start_index(res.data.start)
        set_end_index(res.data.end)
      }
    ).catch((err) => {
      console.log("Error: ", err)
    })

  }, [])


  // Таймер +++++++++++++++++++++++++++++++
  // Таймер +++++++++++++++++++++++++++++++
  // Таймер +++++++++++++++++++++++++++++++
  const v_time: Date = new Date();
  v_time.setSeconds(v_time.getSeconds() + 250000);
  const timer_settings: TimerSettings = {
    autoStart: false,
    expiryTimestamp: v_time,
    onExpire: () => {

      setChecked(true);
      
      if (direction == "left") {
        if (pagePosition.x - 1 < start_index) {
          
          setDirection("right");
          setPagePosition({ x: end_index, y: pagePosition.y })
        }
        else {
          setDirection("right");
          setPagePosition({ x: pagePosition.x - 1, y: pagePosition.y });
        }
      }
      else if (direction == "right") {
        if (pagePosition.x + 1 > end_index) {
          setDirection("left");
          setPagePosition({ x: start_index, y: pagePosition.y })
        }
        else {
          setDirection("left");
          setPagePosition({ x: pagePosition.x + 1, y: pagePosition.y });
        }
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
    console.log(flag)
    console.log(checked)
    if (flag) {
      if (!checked) {
        start()
        restart_timer(1)
      }
      else {
      }
    }
    else {
      setFlag(true);
    }
    console.log(checked)
  }, [isRunning])
  // Таймер -------------------------------
  // Таймер -------------------------------
  // Таймер -------------------------------

  const changeDirection = (m_direction: "right" | "left" | "up" | "down" | undefined) => {
    setDirection(m_direction);
    setChecked(false);
    start()
  }
  return (
    <Slide timeout={{ appear: 1000, enter: 1800, exit: 800 }} direction={direction} in={checked} appear={false} mountOnEnter unmountOnExit addEndListener={() => {
    }}>
      <Box sx={{ translate: "15% 10%", width: "80vw", height: "85vh", position: "absolute" }}>
        <Box sx={{ display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton sx={{ height: "60px", width: "60px" }} size="large" disabled={b_nav_disabled_l} onClick={() => { changeDirection("left") }}><KeyboardArrowLeftIcon sx={{ height: "50px", width: "50px" }} /></IconButton>
          <Grid container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '75vh' }}>
                        <Grid item xs={1}>
            <Box sx={{ width: "70vw", height: "70vh"}}>
              <PageWorker pagePosition={pagePosition} pageIndexes={m_map}/>
            </Box>
            </Grid>
            </Grid>
          <IconButton sx={{ height: "60px", width: "60px" }} size="large" disabled={b_nav_disabled_r} onClick={() => { changeDirection("right") }}><KeyboardArrowRightIcon sx={{ height: "50px", width: "50px" }} /></IconButton>
        </Box>
      </Box>
    </Slide>
  );
}