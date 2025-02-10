function formatTime(sec){
    //year = 12  months
    //month  = 4 weeks
    //week = 7 days
    //day = 24 hours
    // hour = 60 min
    // min = 60 sec
    // const obj = {days:365,hour:24,min:60,sec:60};
    let year = 31_536_000;
    let day = 86400;
    let hour = 3600;
    let min = 60;

    if (sec === 0) 
        return `0 Seconds`;    
    
    let totalYears = Math.floor(sec / year) === 0? '':Math.floor(sec / year) === 1?Math.floor(sec / year) + ' Year':Math.floor(sec / year) + ' Years';
    let totalDays = Math.floor((sec % year) / day)  === 0? '':Math.floor((sec % year) / day)  === 1? Math.floor((sec % year) / day) + ' Day': Math.floor((sec % year) / day) + ' Days';
    let totalHours = Math.floor(((sec % year) % day)/hour)  === 0? '':Math.floor(((sec % year) % day)/hour)  === 1?Math.floor(((sec % year) % day)/hour) + ' Hour':Math.floor(((sec % year) % day)/hour) + ' Hours';
    let totalMins = Math.floor((((sec % year) % day)%hour)/min) === 0? '':Math.floor((((sec % year) % day)%hour)/min) === 1?Math.floor((((sec % year) % day)%hour)/min)+' Minute':Math.floor((((sec % year) % day)%hour)/min)+' Minutes';
    let totalSec = Math.floor((((sec % year) % day)%hour)%min) === 0? '':Math.floor((((sec % year) % day)%hour)%min) === 1?Math.floor((((sec % year) % day)%hour)%min) + ' Second':Math.floor((((sec % year) % day)%hour)%min) + ' Seconds';
    
    let timeObj ={totalYears,totalDays,totalHours,totalMins,totalSec};
    let messageArr = [];
    for (let t in timeObj) {
        if (timeObj[t].startsWith(0) || timeObj[t]==='') {
            continue;
        }else{
            messageArr.push(timeObj[t])
        }  
    }
    if (messageArr.length > 1) {
        messageArr.splice(-1, 0, "and");
    }
    
    return messageArr.join(" ");
    
    
    
    // return `${totalYears}  ${totalDays}  ${totalHours}  ${totalMins} and ${totalSec} `;
}
console.log(formatTime(31_536_000*2));