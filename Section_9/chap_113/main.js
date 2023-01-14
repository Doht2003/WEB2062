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

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
// .mon? nếu có giá trị thì sẽ trả về giá trị của nó và ngược lại trả về undefined 
console.log(restaurant.openingHours?.mon?.open);
// openingHours? nếu không có thuộc tính thứ nhất thì thuộc tính thứ 2 sẽ không được chạy

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun' ];

for (const day of days) {
    // console.log(days);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method dose not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method dose not exist');

// Arrays 
// const users = [
//     {name: 'Jonas', email: 'hello@jonas.io'},
// ];
const users = [];

console.log(users[0].name ?? 'User array empty');

if (users.length > 0) {
    console.log(users[0].name);
} else {
    console.log('User array empty');
}