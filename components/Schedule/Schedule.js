import React from "react";
import Days from "./Days";
import LecturesList from "./LecturesList";
import Timeslots from "./Timeslots";

export default function Schedule({ lectures }) {
  return (
    <div>
      <div className="schedule-container bg-white border-2 border-purple-200 rounded-3xl">
        <Days />
        <Timeslots />
        <LecturesList lectures={lectures} />
      </div>
    </div>
  );
}
