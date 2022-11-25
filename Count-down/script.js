const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

function countdown (){
    const currentYear = new Date().getFullYear(); //2022
    const newYear= new Date(`january 1 ${currentYear + 1} 00:00:00`); //jan 1 2023 00:00:00
    const currentDate = new Date(); //22/11/2022
    const daysDiff= newYear - currentDate; //35.6327738327
    const days=Math.floor(daysDiff/1000/60/60/24);//35days
    const hours=Math.floor((daysDiff/1000/60/60)%24);//22hours
    const minutes=Math.floor((daysDiff/1000/60)%60);//10min
    const seconds=Math.floor((daysDiff/1000)%60);//07seconds
    day.innerHTML=days<10?"0"+days:days;//35 days or 07days
    hour.innerHTML=hours<10?"0"+hours:hours;//22hours or 7hrs
    min.innerHTML=minutes<10?"0"+minutes:minutes; //10min or 7min
    sec.innerHTML=seconds<10?"0"+seconds:seconds;//55sec or 7sec
}

setInterval(countdown,1000);