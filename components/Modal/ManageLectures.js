import { ACTIONS, useLectures, useLecturesDispatch } from "@/context/LecturesContext";
import React from "react";
import { TbTrash } from "react-icons/tb";


// @todo change color + edit option
export default function ManageLectures({ toggleModal }) {

  const lectures = useLectures();

  const dipatch = useLecturesDispatch();

  function handleDeleteLecture(lecture) {
    dipatch({
      type: ACTIONS.DELETE_LECTURE,
      payload: lecture,
    });
    toggleModal();
  }

  return (
    <div className="overflow-x-scroll">
      {
        lectures?.length === 0 && (
          <div className="mt-6 p-3 flex items-center justify-center text-purple ">
            لا يوجد محاضرات
          </div>
        )
      }
      {lectures?.map((lecture) => (
        <div
          className="text-white rounded-md mt-6 p-3 flex items-center justify-end delete-lecture"
          style={{
            backgroundColor: lecture.color.background,
            color: `${lecture.color.accent}`,

          }}
          key={lecture.day + lecture.classtitle + lecture.startTime}
        >
          {lecture.classTitle}: {lecture.selectedDays.join(", ")},{" "}
          {lecture.startTime} - {lecture.endTime}
          <button
            style={{
              color: `${lecture.color.background}`,
              backgroundColor: `${lecture.color.accent}`,
            }}
            className="mr-2 p-1 rounded-md border-none text-xl cursor-pointer"
            onClick={() => handleDeleteLecture(lecture)}
          >
            <TbTrash />
          </button>
        </div>
      ))}
    </div>
  );
}
