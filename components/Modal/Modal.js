import React, { useEffect, useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import { RxPlus } from 'react-icons/rx';
import { TbTrash } from 'react-icons/tb';
import AddLectureForm from "../AddLecture/AddLectureForm";
import DeleteLectureForm from "../DeleteLecture/DeleteLectureForm";

export default function Modal({openText, addLecture, deleteLecture, lectures}) {
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
      <button onClick={() => toggleModal()} className="btn-modal border-none outline-none rounded-xl font-mirza mx-4 my-2">
        <div className="flex items-center">
          <span className="mx-1">{openText}</span>
           {(openText === "إضافة مادة") ? <RxPlus /> : <TbTrash />}
        </div>
      </button>

      {modal && (
        <div className="modal font-mirza overflow-y-scroll">
          <div onClick={() => toggleModal()} className="overlay"></div>
          <div className="modal-content">
            <div className="flex justify-end">
              <button className="close-modal" onClick={() => toggleModal()}>
                <RxCross2 />
              </button>
            </div>

          {(openText === "إضافة مادة") 
            ? <AddLectureForm addLecture={addLecture} toggleModal={toggleModal}/>
            : <DeleteLectureForm deleteLecture={deleteLecture} lectures={lectures} toggleModal={toggleModal}/>
          }
          </div>
        </div>
      )}
    </>
  );
}