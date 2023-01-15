const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun' ];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close:22,
    },
    [weekdays[4]]: {
        open: 11,
        close:23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 12 + 12,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00',address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} anh ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

const orderSet = new Set([
    'Pasta', 'Pizza', 'Pizza', 'Risotto','Pasta', 'Pizza', 
]);
// Lọc các phần tủ trùng lặp
console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto')
//orderSet.clear(); // Rỗng
console.log(orderSet); // Set(4) {'Pasta', 'Pizza', 'Garlic Bread'}
console.log(orderSet[0]); // undefined

for (const order of orderSet) {
    console.log(order);
}

// Example
const staff = ['Waiter', 'chef', 'Waiter', 'Manager', 'chef', 'Waiter',];
const staffUmique = [...new Set(staff)];
console.log(staffUmique);

// console.log(new Set(['Waiter', 'chef', 'Waiter', 'Manager', 'chef', 'Waiter',]).size);
console.log(new Set(staff).size);

console.log(new Set('Hoang Do').size);