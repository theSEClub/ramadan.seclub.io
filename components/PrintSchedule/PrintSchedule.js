import React, { useState } from 'react';
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf';

export default function PrintSchedule() {
    const [loader, setLoader] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const downloadPDF = () => {
        const capture = document.querySelector('.schedule-container');
        setLoader(true);

        html2canvas(capture, { 
            scale: 2, 
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth:1300,
            windowHeight: 1152
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const pdfWidth = canvas.width;
            const pdfHeight = canvas.height;

            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [pdfWidth, pdfHeight]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('Ramadan_Schedule.pdf'); 
            

            setLoader(false);
            setButtonClicked(true);

           
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        downloadPDF();
    };

    return (
        <form onSubmit={handleSubmit}>
            {buttonClicked && (
                <div className="text-[#7f5ce5] font-bold mb-7">
                    {loader ? (
                        <span>لحظاتٍ ..</span>
                    ) : (
                        <span>تم التحميل!</span>
                    )}
                </div>
            )}

            {!buttonClicked && (
                <button type="submit" className="text-[#7f5ce5] font-bold mb-7">اضغط هُنا</button>
            )}
        </form>
    );
};
