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