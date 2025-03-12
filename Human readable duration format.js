/**
 * Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

 */
function formatDuration (sec) {
    // Complete this function
    let year = 31_536_000;
      let day = 86400;
      let hour = 3600;
      let min = 60;
  
      if (sec === 0)
          return `now`;
  
      let totalYears = Math.floor(sec / year) === 0 ? '' : Math.floor(sec / year) === 1 ? Math.floor(sec / year) + ' year' : Math.floor(sec / year) + ' years';
      let totalDays = Math.floor((sec % year) / day) === 0 ? '' : Math.floor((sec % year) / day) === 1 ? Math.floor((sec % year) / day) + ' day' : Math.floor((sec % year) / day) + ' days';
      let totalHours = Math.floor(((sec % year) % day) / hour) === 0 ? '' : Math.floor(((sec % year) % day) / hour) === 1 ? Math.floor(((sec % year) % day) / hour) + ' hour' : Math.floor(((sec % year) % day) / hour) + ' hours';
      let totalMins = Math.floor((((sec % year) % day) % hour) / min) === 0 ? '' : Math.floor((((sec % year) % day) % hour) / min) === 1 ? Math.floor((((sec % year) % day) % hour) / min) + ' minute' : Math.floor((((sec % year) % day) % hour) / min) + ' minutes';
      let totalSec = Math.floor((((sec % year) % day) % hour) % min) === 0 ? '' : Math.floor((((sec % year) % day) % hour) % min) === 1 ? Math.floor((((sec % year) % day) % hour) % min) + ' second' : Math.floor((((sec % year) % day) % hour) % min) + ' seconds';
  
      let timeObj = { totalYears, totalDays, totalHours, totalMins, totalSec };
      let messageArr = [];
      for (let t in timeObj) {
          if (timeObj[t] === '') {
              continue;
          } else {
              messageArr.push(timeObj[t]+',')
          }
      }
      if (messageArr.length > 1) {
          messageArr.splice(-1, 0, "and");
      }
      let joined = messageArr.join(" ");
      return joined.split(' ').reverse().map((el,ind)=>(ind === 0 || ind === 3) && el.endsWith(',')?el.split('').slice(0,-1).join(''):el).reverse().join(' ');
    //   return joined.split('').pop().join('');
  
  }
  console.log(formatDuration(3662));
  