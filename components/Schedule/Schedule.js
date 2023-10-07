import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Container from "../Container";
import Timetable from "./Timetable";
import { ACTIONS, useLecturesDispatch } from "@/context/LecturesContext";
import Instructions from "../Instructions";

// @todo RENAME to Schedule
export default function Schedule() {

  const dispatch = useLecturesDispatch();

  const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu'];

  const HOURS = [
      '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
      '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM',
      '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'
  ]

  useEffect(() => {
    setLectures();
  }, []);

  function setLectures() {
    const lectures = JSON.parse(localStorage.getItem("lectures"));
    if (lectures) {
      dispatch({
        type: ACTIONS.SET_LECTURES,
        payload: lectures
      });
    }
  }

  return (
    <Container>
      <div
        className="flex flex-row justify-between items-center mx-auto"
        dir="rtl"
      >
        <div className="flex flex-row w-full items-center lg:justify-end justify-center py-8 gap-5">
          <Modal type="add" />
          <Modal type="manage" />
        </div>
      </div>
      <Timetable DAYS={DAYS} HOURS={HOURS} />
      <Instructions />
    </Container>
  );
}
