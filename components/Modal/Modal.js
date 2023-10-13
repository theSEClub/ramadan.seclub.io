import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxPlus } from "react-icons/rx";
import { TbTrash } from "react-icons/tb";
import AddLecture from "./AddLecture";
import ManageLectures from "./ManageLectures";

export default function Modal({ type }) {

  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-green-se-100 px-6 py-[5px] text-green-se hover:bg-green-se-200 border-none outline-none rounded-xl"
      >
        <div className="flex items-center">
          <div className="mx-1 text-sm lg:text-xl mt-[3px]">
            {type === "add"
              ? "إضافة مادة"
              : "حذف مادة"

            }
          </div>
          {type === "add"
            ? <RxPlus />
            : <TbTrash />}
        </div>
      </button>

      {modal && (
        <div className="modal overflow-y-scroll z-50">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="flex justify-end">
              <button className="close-modal" onClick={toggleModal}>
                <RxCross2 />
              </button>
            </div>

            {type === "add"
              ? (
                <AddLecture
                  toggleModal={toggleModal}
                />
              ) : (
                <ManageLectures
                  toggleModal={toggleModal}
                />
              )}
          </div>
        </div>
      )}
    </>
  );
}
