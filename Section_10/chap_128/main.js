const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 209 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 200);
createBooking('LH123', 3);
createBooking('LH123', 4);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);