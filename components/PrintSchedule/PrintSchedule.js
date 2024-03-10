import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function PrintSchedule () {
    const [loader, setLoader] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const downloadPDF = () => {
        const capture = document.querySelector('.schedule-container'); 
        setLoader(true);
    
        const scaleFactor = 3; 
    
        html2canvas(capture, { scale: scaleFactor }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const aspectRatio = canvas.width / canvas.height;
    
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px'
            });
    
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdfWidth / aspectRatio;
    
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('Ramadan_Schedule.pdf');

            
            setTimeout(() => {
                setLoader(false);
            }, 1000); 
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setButtonClicked(true);
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
                <button type="submit" className="text-[#7f5ce5] font-bold mb-7" >اضغط هُنا</button>
            )}
        </form>
    );
};


