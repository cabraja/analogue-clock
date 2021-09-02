const text = document.getElementById('loading-text');

        setTimeout(() => {
            text.innerHTML += '.';
            setTimeout(() => {
                text.innerHTML += '.';
                    setTimeout(() => {
                    text.innerHTML += '.';
                 }, 500);
            }, 500);
        }, 500);

setTimeout(() => {
    const screen = document.getElementById('loading-screen');

    screen.style.opacity = '0%';
}, 1500);

setInterval(() => {
    const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();


console.log(hour);
console.log(minute);
console.log(second);

const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-second');

hourHand.style.transform = `rotate(${hour*30+90}deg)`;
minuteHand.style.transform = `rotate(${minute*6+90}deg)`;
secondHand.style.transform = `rotate(${second*6+90}deg)`;
}, 1000);