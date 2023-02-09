const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key) {
    console.log(`${key}: ${value}`);
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'VND']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _) {
    console.log(`${value}: ${value}`);
})