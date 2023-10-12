import React, { useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import Container from "../Container";
import Timetable from "./Timetable";
import { ACTIONS, useLecturesDispatch } from "@/context/LecturesContext";
import Instructions from "../Instructions";
import html2canvas from "html2canvas";
import { RiDownloadLine } from "react-icons/ri";

export default function Schedule() {

  const dispatch = useLecturesDispatch();

  const screenshotRef = useRef();
  
  useEffect(() => {
    setLectures();
  }, []);

  const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu'];

  const HOURS = [
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM',
    '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'
  ];

  async function downloadSchedule() {
    const canvas = await html2canvas(screenshotRef.current);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "schedule.png";
    link.href = image;
    link.click();
  }

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
          <button
            onClick={downloadSchedule}
            className="bg-green-se-100 px-6 py-[5px] text-green-se hover:bg-green-se-200 border-none outline-none rounded-xl"
          >
            <div className="flex items-center">
              <div className="mx-1 text-sm lg:text-xl mt-[3px]">
                تحميل
              </div>
              <RiDownloadLine />
            </div>
          </button>
        </div>
      </div>
      <Timetable DAYS={DAYS} HOURS={HOURS} screenshotRef={screenshotRef} />
      <Instructions />
    </Container>
  );
}
