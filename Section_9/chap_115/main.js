/**
 * 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví
dụ: "Goal 1: Lewandowski")
2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã
học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không
nhớ)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
Tỉ lệ thắng của Bayern Munich: 1.33
Tỉ lệ hòa of draw: 3.25
Tỉ lệ thắng của Borrussia Dortmund: 6.5
Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau).
Chú ý: Lưu ý cách tỷ lệ cược và đối tượng trò chơi có tên thuộc tính giống nhau 😉
😉
Thêm: Tạo ra 1 đối tướng là 'scorers', đối tượng này gồm các thuộc tính với key
(tên thuộc tính) là tên cầu thủ đã ghi bàn, value (giá trị) là số bàn thắng đã ghi.
Ví dụ:
{
Gnarby:1,
Hummels:1,
Lewandowski: 2
}
 */

const game = {
    team1: 'Manchester City',
    team2: 'Việt Nam',
    players: [
        [
            'S. Ortega',
            'K. Walker',
            'M. Akanji',
            'A. Laporte',
            'S. Gomez',
            'B. Silva',
            'Rodri',
            'P. Foden',
            'R. Mahrez',
            'J. Alvarez',
            'C. Palmer',
        ],
        [
            'Văn Lâm',
            'Ngọc Hải', 
            'Tiến Dũng',
            'Thành Chung',
            'Văn Hậu', 
            'Hùng Dũng', 
            'Hoàng Đức', 
            'Quang Hải', 
            'Tấn Tài',
            'Tiến Linh', 
            'Tuấn Hải,'
        ],
    ],
    score: '1:0',
    scored: ['Tiến Linh'],
    date: 'Nov 9th, 2037',
    oddds: {
        team1: 6.33,
        x:3.25,
        team2: 1.5,
    },
};

// 1.
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.oddds)
let average = 0;
for (const odd of odds) {
    average += odd;
};
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.oddds)){
    // console.log(team, odd);
    const teamStr = team === 'x' ? 'draw' : `thắng ${game[team]}`;
    console.log(`Tỉ lệ ${teamStr}: ${odd}`);
}
