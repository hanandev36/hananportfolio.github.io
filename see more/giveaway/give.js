let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'june',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
let weekdays = [
    'Mon',
    'Tue',
    'Wed',
    'Thr',
    'Fri',
    'Sat',
    'Sun'

];


let giveaway = document.querySelector('.giveaway');
let deadline = document.querySelector('.deadline');
let ends = document.querySelectorAll('.deadline-format h4')





let futureDate = new Date(2023, 11, 25, 11, 45, 0);
let year = futureDate.getFullYear();
let hour = futureDate.getHours();
let min = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]
let date = futureDate.getDate();
let week = weekdays[futureDate.getDay()]


giveaway.innerText = `giveaway ends on ${week} ${date} ${month} ${year}      ${hour}:${min}am`

let futureTime = futureDate.getTime()

function getRemainTime() {

    let today = new Date().getTime()
    let t = futureTime - today;
    

    // value in ms//

    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMin = 60 * 1000;
    //value calculation//
    let day = t / oneDay;
    day = Math.floor(day)

    let hours = Math.floor((t % oneDay) / oneHour);
    let mints = Math.floor((t % oneHour) / oneMin);
    let secs = Math.floor((t % oneMin) / 1000);

let all =[day,hours,mints,secs]

function format(ends){
    if (ends < 10){
    return (ends = `0${ends}`)}
    {
        return ends;
    }
    if (t < 0)
    clearInterval (countDown);
    deadline.innerHTML =`<h4> sorry this giveaway has expired </h4>`


}

ends.forEach(function(ends,index){
    ends.innerHTML = format (all[index])
})

}
let countDown = setInterval(getRemainTime,1000)
getRemainTime()
// let today = new Date.getTime()
















