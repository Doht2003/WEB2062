const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join();
};

// Higher-order function 
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformad string: ${fn(str)}`);

    console.log(`Transformad by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('🙋‍♀️');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
