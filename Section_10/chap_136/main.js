const runOne = function () {
    console.log('This will never run again');
};
runOne();

// IIFE 
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(inPrivate);
console.log(notPrivate);