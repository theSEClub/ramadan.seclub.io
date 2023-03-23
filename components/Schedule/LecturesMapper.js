import React from "react";
import Lecture from "./Lecture";

export default function LecturesMapper({
  classTitle,
  startTime,
  endTime,
  days,
  location,
  color,
  lecture,
}) {
  // this components maps each day in the same added course to a lecture
  // poor naming ☺

  return (
    <>
      {days?.map((day) => (
        <Lecture
          key={day + classTitle}
          classTitle={classTitle}
          startTime={startTime}
          endTime={endTime}
          day={day}
          color={color}
          location={location}
          lecture={lecture}
        />
      ))}
    </>
  );
}
