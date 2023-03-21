import React, { useEffect, useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import { RxPlus } from 'react-icons/rx';
import { TbTrash } from 'react-icons/tb';
import AddCourseForm from "../AddCourse/AddCourseForm";

export default function Modal({openText, addClass, toggleIsRamadan}) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  };

  useEffect(() => {
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
  }, [modal])

  return (
    <>
      <button onClick={() => toggleModal()} className="btn-modal border-none rounded-xl ">
        {openText} {(openText === "إضافة مادة") ? <RxPlus /> : <TbTrash />}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={() => toggleModal()} className="overlay"></div>
          <div className="modal-content">
          {(openText === "إضافة مادة") 
            ? <AddCourseForm addClass={addClass} toggleIsRamadan={toggleIsRamadan} toggleModal={toggleModal}/>
            : <TbTrash />
          }
            <button className="close-modal" onClick={() => toggleModal()}>
              <RxCross2 />
              إغلاق
            </button>
          </div>
        </div>
      )}
    </>
  );
}