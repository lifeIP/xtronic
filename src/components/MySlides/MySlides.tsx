import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, FormControlLabel, IconButton, Slide, Switch, Typography } from '@mui/material';

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
  const [b_nav_disabled_u, setBNavDisabled_u] = React.useState<boolean>(false)
  const [b_nav_disabled_d, setBNavDisabled_d] = React.useState<boolean>(false)


  const [m_map, setMmap] = React.useState<number[][]>([[],])
  // let m_map: number[][] = [[]]
  const [pagePosition, setPagePosition] = React.useState({ x: 5, y: 1 });


  useEffect(() => {
    // Получение карты сайта 
    axios.get(conf.addr + "/" + "map").then(
      (res) => {
        // console.log(res.data.map[0]);
        setMmap(res.data.map);
        // console.log(m_map);

        setBNavDisabled_l(res.data.map.at(pagePosition.y)?.at(pagePosition.x-1) == 0);
        setBNavDisabled_r(res.data.map.at(pagePosition.y)?.at(pagePosition.x+1) == 0);

        setBNavDisabled_u(res.data.map.at(pagePosition.y-1)?.at(5) == 0);
        setBNavDisabled_d(res.data.map.at(pagePosition.y+1)?.at(5) == 0);
      }
    ).catch((err) => {
      console.log("Error: ", err)
    })

    // if(m_map.at(pagePosition.y+1)?.at(pagePosition.x) == 0) b_nav.u = true;
    // else b_nav.u = false;
    // if(m_map.at(pagePosition.y-1)?.at(pagePosition.x) == 0) b_nav.d = true;
    // else b_nav.d = false;
    // Получение карты сайта 
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
      if (direction == "down") {
        setDirection("up");
        setPagePosition({ x: 5, y: pagePosition.y + 1 });
      }
      else if (direction == "up") {
        setDirection("down");
        setPagePosition({ x: 5, y: pagePosition.y - 1 });
      }
      else if (direction == "left") {
        if (m_map[pagePosition.y][pagePosition.x - 1] == 0) {
          let last_index = pagePosition.x;

          m_map[pagePosition.y].forEach((e: number, index: number) => {
            if (e != 0) last_index = index;
          });

          
          setDirection("right");
          setPagePosition({ x: last_index, y: pagePosition.y })
        }
        else {
          setDirection("right");
          setPagePosition({ x: pagePosition.x - 1, y: pagePosition.y });
        }
      }
      else if (direction == "right") {
        if (m_map.at(pagePosition.y)?.at(pagePosition.x + 1) == 0) {
          let first_index = pagePosition.x;
          let s_flag = true;
          m_map[pagePosition.y].forEach((e: number, index: number) => {
            if (e != 0 && s_flag) {
              first_index = index;
              s_flag = false;
            }

          });

          setDirection("left");
          setPagePosition({ x: first_index, y: pagePosition.y })
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

    console.log(pagePosition)


    // setBNavDisabled_l(m_map.at(pagePosition.y)?.at(pagePosition.x-1) == 0);
    // setBNavDisabled_r(m_map.at(pagePosition.y)?.at(pagePosition.x+1) == 0);

    setBNavDisabled_u(m_map.at(pagePosition.y - 1)?.at(5) == 0);
    setBNavDisabled_d(m_map.at(pagePosition.y + 1)?.at(5) == 0);
  }, [pagePosition]);

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

          <Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton sx={{ height: "60px", width: "60px" }} size="large" disabled={b_nav_disabled_u} onClick={() => { changeDirection("up") }}><KeyboardArrowUpIcon sx={{ height: "50px", width: "50px" }} /></IconButton>
            </Box>
            <Box sx={{ width: "70vw", height: "70vh" }}>
              <PageWorker pagePosition={pagePosition} pageIndexes={m_map}/>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton sx={{ height: "60px", width: "60px" }} size="large" disabled={b_nav_disabled_d} onClick={() => { changeDirection("down") }}><KeyboardArrowDownIcon sx={{ height: "50px", width: "50px" }} /></IconButton>
            </Box>
          </Box>
          <IconButton sx={{ height: "60px", width: "60px" }} size="large" disabled={b_nav_disabled_r} onClick={() => { changeDirection("right") }}><KeyboardArrowRightIcon sx={{ height: "50px", width: "50px" }} /></IconButton>
        </Box>
      </Box>
    </Slide>
  );
}