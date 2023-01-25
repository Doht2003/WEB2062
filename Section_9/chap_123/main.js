// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firsName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firsName, lastName)

const newName = ['Mr.', firsName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Challenge
const capitalizeName = function (name) {
    const names = name.split(' ');
    const nameUpper = [];

    for (const n of names) {
        // nameUpper.push(n[0].toUpperCase() + n.slice(1));
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(nameUpper.join(' '))
}
capitalizeName('Jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = " I'm here! ";
console.log(message.padStart(21, '~').padEnd(31, '~'));
console.log(' Hoang Thi Do '.padStart(22, '~').padEnd(31, '~'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(38924629));
console.log(maskCreditCard(184304729487));
console.log(maskCreditCard('762148164187389'));

// Repeat 
const message2 = 'Bad waether... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`The are ${n} planes in line ${'🛬'.repeat(n)}`);
};
planesInLine(2);
planesInLine(9);
planesInLine(11);
planesInLine(3);