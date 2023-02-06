// Chúng ta cần có một kiểu dữ liệu để lưu trữ nhiều giá trị
// const doi1 = "Arsenal";
// const doi2 = "Man City";
// const doi3 = "Newcastle";
// const doi4 = "Man United";

// Mạng (Array)
// Array constructor
// const premierLeague = new Array("Arsenal", "Man City", "Newcastle", "Newcastle")
// Array Literal
const premierLeague = ["Arsenal", "Man City", "Newcastle", "Man United"];
// console.log(premierLeague);

// 1. Duyệt
// for (let item of premierLeague) {
//   console.log(item);
// }
// for (let index in premierLeague) {
//   console.log(index);
// }
// ForEach
premierLeague.forEach(function(team, index) {
  console.log(`${index}: ${team}`);
})
// 2. Thêm
// push
premierLeague.push("Tottenham");
console.log(premierLeague);

// splice
const length = premierLeague.length;
premierLeague.splice(length, 1, "Liverpool");

// 3. Xoá
// Bước 1: Tìm index
// Bước 2: dùng hàm xoá
// const index = premierLeague.indexOf("Liverpool");
// Splice
// premierLeague.splice(index, 1);
// 4. Sửa
// const index = premierLeague.indexOf("Man United");
// premierLeague[index] = "MU";

// Map
// const newArray = premierLeague.map(function(team, index) {
//   if(team == "Man United") {
//     return "MU"
//   }
//   return team
// })
// console.log(newArray);
// 5. Tìm kiềm
// Find
const team = premierLeague.find(function (team) {
  return team.toLowerCase() == "Man city".toLowerCase();
});
// console.log(team);
// BTVN: Tìm kiếm đội bóng sao cho chỉ cần nhập 3 chữ cái đầu
console.info(premierLeague.substring(0,3))
// 6. Lọc
// Filter
const filtered = premierLeague.filter(function (team) {
  return team == "Man City";
});
console.log(filtered);
// BTVN: Lọc các đội bóng sao cho chỉ cần nhập 3 chữ cái đầu
