const clock = {
    soniya: document.querySelector('.s'),
    daqiqa: document.querySelector('.m'),
    soat: document.querySelector('.h'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
}

const date = new Date()
let soniya = date.getSeconds() * (360 / 60)
let daqiqa = date.getMinutes() * (360 / 60)
let soat = date.getHours() * (360 / 12)

clock.soniya.style = `transform: rotate(${soniya}deg); transition: 1s linear`
clock.daqiqa.style = `transform: rotate(${daqiqa}deg); transition: 1s linear`
clock.soat.style = `transform: rotate(${soat}deg); transition: 1s linear`

let sDeg = (360 / 60)
let mDeg = (60 / 360)
let hDeg = (12 / 360)


function start() {
    const date = new Date()
    soniya += sDeg
    daqiqa += mDeg
    soat += hDeg

    clock.soniya.style = `transform: rotate(${soniya}deg); transition: 1s linear`
    clock.daqiqa.style = `transform: rotate(${daqiqa}deg); transition: 1s linear`
    clock.soat.style = `transform: rotate(${soat}deg); transition: 1s linear`

    clock.hours.innerHTML = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
    clock.minutes.innerHTML = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()

    setTimeout(() => {
        start()
    }, 1000);
}

start()

const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')

tabsItem.forEach(function (el, i) {
    el.addEventListener('click', function (e) {
        tabsItem.forEach(function (el, i) {
            el.classList.remove('active')
            tabsContentItem[i].classList.remove('active')
        })
        el.classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
})

const watch = document.querySelector('.stopwatch__hours');
const stopWatch = document.querySelector('.stopwatch__btn')
let hourses = 0;
let minutes = 0;
let secunds = 0;
let timer;

// const startWatch = () => {
//     watch.classList.remove('paused');
//     clearInterval(timer);
//     timer = setInterval(() => {
//         hourses += 1;
//         let dateTimer = new Date(hourses)
//         watch.innerHTML = 
//         ("0" + dateTimer.getUTCHours()).slice(-2); 
//     }, (60 * 60));
// };
// // soat
// const pauseWatch = () => {
//     watch.classList.remove('paused');
//     clearInterval(timer);
//     timer = setInterval(() => {
//         minutes += 1;
//         let dateTimer = new Date(minutes)
//         watch.innerHTML = 
//         ("0" + dateTimer.getUTCMinutes()).slice(-2); 
//     },60);
// };
// // minut
// const resetWatch = () => {
//     watch.classList.remove('paused');
//     clearInterval(timer);
//     timer = setInterval(() => {
//         secunds += 1;
//         let dateTimer = new Date(secunds)
//         watch.innerHTML = 
//         ("0" + dateTimer.getUTCSeconds()).slice(-2); 
//     },1);
// };
// // sekund
// const pausedWatch = () => {
//     watch.classList.remove('paused');
//     clearInterval(timer)
// };


// const startWatch = () => {
//     watch.classList.remove('paused');
//     clearInterval(timer)
//     hourses = 0;
//     watch.innerHTML = "00"
// };

// const pauseWatch = () => {
//     watch.classList.remove('paused');
//     clearInterval(timer)
//     minutes = 0;
//     watch.innerHTML = "00"
// };

// const resetWatch = () => {
//     watch.classList.remove('paused');
//     clearInterval(timer)
//     secunds = 0;
//     watch.innerHTML = "00"
// };

// stopWatch.document.addEventListener('click', function(element) {
//     if (element === 'start') {
//         startWatch();
//      } else if (element === 'pause') {
//          pauseWatch();
//      } else if (element === 'reset') {
//          resetWatch();
//      }
// });



const stopwatchBtn = document.querySelector('.stopwatch__btn');
const second = document.querySelector('.stopwatch__seconds');
const minute = document.querySelector('.stopwatch__minutes');
const hour = document.querySelector('.stopwatch__hours');
let interval;

stopwatchBtn.addEventListener('click', () => {
    if (stopwatchBtn.innerHTML === 'start') {
        stopwatchBtn.innerHTML = 'stop';
        stopwatch();
    } else if (stopwatchBtn.innerHTML === 'stop') {
        stopwatchBtn.innerHTML = 'clear';
        clearTimeout(interval)
    } else if (stopwatchBtn.innerHTML === 'clear') {
        stopwatchBtn.innerHTML = 'start'
        second.innerHTML = 0;
        minute.innerHTML = 0;
        hour.innerHTML = 0;  
    }
})



function stopwatch() {


    if (second.innerHTML >= 59) {
        second.innerHTML = 0;
        minute.innerHTML++;

    }
    if (minute.innerHTML >= 59) {
        minute.innerHTML = 0;
        hour.innerHTML++;

    }
    second.innerHTML++;
    interval = setTimeout(() => {
        stopwatch()
    }, 1000);

}