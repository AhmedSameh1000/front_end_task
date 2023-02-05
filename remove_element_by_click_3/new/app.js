// function print() {
// 	function add(x, c) {
// 		let num_1 = +prompt("inter num 1");
// 		let num_2 = +prompt("inter num 2");
// 		return num_1 + num_2;
// 	}
// 	console.log(add());
// }

// function print2(num_1, num_1) {
// 	return num_1 + num_1 < 100 ? true : false;
// }
// console.log(print2(10, 1));

// function is_int(str) {
// 	return +str;
// }
// console.log(is_int("777"));

// function print_sort(stringg) {
// 	return stringg.split("").sort().join("");
// }
// console.log(print_sort("ahmeds"));

// function print_pyramid(num_of_row) {
// 	for (let i = 1; i <= num_of_row; i++) {
// 		let str = "";
// 		for (let j = 1; j <= i; j++) {
// 			str += "*";
// 		}
// 		console.log(str);
// 	}
// }
// print_pyramid(5);

let all_div = document.querySelectorAll(".card div");
all_div.forEach((ele) => {
	ele.onclick = function () {
		ele.style.display = "none";
	};
});
