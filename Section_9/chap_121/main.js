const airline = 'TAP Air Portugal';
const plane = 'A320';

// indexOf
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat){
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat 👾');
    else console.log('You got lucky 😍');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

