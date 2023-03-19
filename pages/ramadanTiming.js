

function convertToDate(timeStr) {
  // check if input string is in the format of "HH:MM"
  if (!/\d{1,2}:\d{2}/.test(timeStr)) { 
    return 0;
  }
  const timeObj = new Date();
  timeObj.setHours(parseInt(timeStr.split(':')[0]));
  timeObj.setMinutes(parseInt(timeStr.split(':')[1]));
  return timeObj;
}

function getStrTime (time){
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function calculateDuration(start, end) {
  // convert start and end times to date objects
  const startDate = convertToDate(start);
  const endDate = convertToDate(end);
  if (startDate ===0 || endDate === 0){
    return 0;
  }
  
  // calculate duration in minutes
  const durationInMinutes = (endDate.getTime() - startDate.getTime()) / (1000 * 60);
    if (durationInMinutes < 49 ){
    //no lecture less than 50 min duration
    return 0;
  }
  return durationInMinutes;
}


function getNewStartTime(start ,lectimes, day){

    if (day === "sun" || day === "thu" || day === "tue") {
        for (const element of lectimes.SUN_TUE_THU_TIMES) {
            if (start === element.start) {
                start = element.newStart;
               return start;
            }
        }
    }else if (day === "mon" || day === "wed") {
        for (const element of lectimes.MON_WED_TIMES) {
            if (start === element.start) {
                start = element.newStart;
                return start;
            }
        }
    }
    return 0;
}

function getNewDuration(duration) {
  const allowedDurations = {50: 40, 75: 60, 120: 80, 180: 120};
  return allowedDurations[duration] || 0;
}


function getRamadanTime(start, end, dayOfWeek) {
  // Global variables
  const errormsg = "The time requested is not a standard time. The faculty members with arrangement with the students has the to propose a suitable timing for all of them ";
  const lecturesTime = { 
    SUN_TUE_THU_TIMES: [
        {start: "08:00",  newStart: "10:00"},
        {start: "09:00",  newStart: "10:45"},
        {start: "10:00",  newStart: "11:30"},
        {start: "11:00",  newStart: "12:15"},
        {start: "12:00",  newStart: "13:10"},
        {start: "13:00",  newStart: "13:55"},
        {start: "14:00",  newStart: "14:40"},
        {start: "15:00",  newStart: "15:25"},
        {start: "16:00",  newStart: "16:20"},
        {start: "17:00",  newStart: "17:05"},
    ], 
    MON_WED_TIMES :[
        {start: "08:00",  newStart: "10:00"},
        {start: "09:30",  newStart: "11:10"},
        {start: "11:00",  newStart: "12:20"},
        {start: "14:00",  newStart: "13:35"},
        {start: "15:30",  newStart: "14:45"},
        {start: "17:00",  newStart: "15:55"},
     ]
    }
   
  //get duration
  const duration = calculateDuration(start, end);
  const startTime = getNewStartTime(start, lecturesTime, dayOfWeek);
  //execlude times that does not start on standard time
  if (startTime == 0){
    return errormsg;
  }
 
//get new period for the lecture
newduration = getNewDuration(duration);
//if period of lecture is not among standard period
  if (newduration === 0){
    return errormsg;
  } 
  
const startDate = convertToDate(startTime);
const endDate = new Date(startDate.getTime()); 
endDate.setMinutes(startDate.getMinutes() + newduration); 

return [getStrTime(startDate) ,  getStrTime(endDate)];
}



//legitimate
console.log("legitimate")
console.log(getRamadanTime("08:00","08:50","sun"));
console.log(getRamadanTime("11:00","12:15","mon"));
console.log(getRamadanTime("11:00","12:15","sun"));
console.log(getRamadanTime("16:00","16:50","thu"));
console.log(getRamadanTime("15:30","16:45","wed"));
console.log(getRamadanTime("17:00","18:15","mon"));
console.log(getRamadanTime("13:00","13:50","tue"));

console.log("wrong")
//wrong timing
console.log(getRamadanTime("13:00","14:50","mon"));
console.log(getRamadanTime("8:30","08:50","sun"));
console.log(getRamadanTime("18:00","19:50","thu"));
console.log(getRamadanTime("18:00","19:50","mon"));
console.log(getRamadanTime("14:00","08:50","sun"));
console.log(getRamadanTime("15:00","08:50","mon"));
console.log(getRamadanTime("09:00","08:50","wed"));

