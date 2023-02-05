const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Hoang Do');

greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Jonas');