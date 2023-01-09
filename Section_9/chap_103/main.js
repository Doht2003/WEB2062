const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    oder: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4]
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, ,second] = restaurant.categories;
// console.log(first,second);

let [ main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Trao đổi biến
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Nhận 2 giá trị từ hàm
// console.log(restaurant.oder[2,0]);
const [starter, mainCourse] = restaurant.oder(2, 0);
console.log(starter, mainCourse);

// Hủy cấu trúc lồng nhau
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
const [i, ,[j, k]] = nested;
console.log(i, j, k);

// Giá trị mặc định
const [q, p, r] = [8, 9]; // 8 9 undefind
// const [q = 1, p = 1, r= 1] = [8, 9]; // 8 9 1
console.log(q, p, r);

// console.log(restaurant);