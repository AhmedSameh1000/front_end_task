// let user_name = prompt("please enter your user name");

// if (
// 	user_name.charAt(0) != "@" &&
// 	user_name.charAt(user_name.length - 1) != "@" &&
// 	user_name.includes("@")
// ) {
// 	console.log("valid");
// } else {
// 	console.log("not valid");
// }

//---------
//-------------
// function charCount(c = "", word = "") {
// 	let count = 0;
// 	for (let i = 0; i < word.length; i++) {
// 		if (c == word[i]) {
// 			count++;
// 		}
// 	}
// 	return count;
// }
// console.log(charCount("a", "ahmed sameh ali mohame"));
//-------------

//----------------
// let nums = [];
// for (let i = 1; i <= 3; i++) {
// 	nums[i] = prompt(`insert num ${i}`);
// }
// document.write(`<h1> Adding--multiplying and dividion  values</h1>`);
// document.write(`<\hr>`);
// document.write(
// 	`<h2 style="color: red;">sum of ${nums.length - 1} values ${nums[1]} + ${
// 		nums[2]
// 	} + ${nums[3]} = ${+nums[1] + +nums[2] + +nums[3]}</h2>`
// );
// document.write(
// 	`<h2 style="color: red;">multiplication of ${nums.length - 1} values ${
// 		nums[1]
// 	} *
//     ${nums[2]} * ${nums[3]} = ${+nums[1] * +nums[2] * +nums[3]}</h2>`
// );
// document.write(
// 	`<h2 style="color: red;">division of ${nums.length - 1} values ${nums[1]} / ${
// 		nums[2]
// 	} / ${nums[3]} = ${+nums[1] / +nums[2] / +nums[3]}</h2>`
// );
//----------------
//----------------------

// let nums = [];
// for (let i = 0; i < 5; i++) {
// 	nums[i] = prompt(`insert num ${i}`);
// }
// document.write(`<h1> Sorting</h1>`);
// document.write(`<\hr>`);
// document.write(`<h2 style="color: red;"> you have entered values ${nums}</h2>`);
// document.write(
// 	`<h2 style="color: red;"> your values after sorted descending ${nums.sort(
// 		(a, b) => b - a
// 	)}</h2>`
// );
// document.write(
// 	`<h2 style="color: red;"> your values after sorted ascending ${nums.sort(
// 		(a, b) => a - b
// 	)}</h2>`
// );
//----------------------
//--------------------------
// let circle_radius = prompt("please enter radius", "Type Radius Here");
// alert(`total area of circle = ${Math.PI * circle_radius * circle_radius}`);
//--------------------------
//-----------------------------
// let root = prompt("value to calcualte square root", "please enter value here");
// alert(`square root of ${root} is ${Math.sqrt(root)}`);
//-----------------------------
//---------------------------------
// let cos_value = 90;
// document.write(`<h1>cos ${cos_value} is ${Math.cos(cos_value)} </h1>`);
//---------------------------------
//------------------------------------
// function print_day(date) {
// 	let days = [
// 		"sunday",
// 		"monday",
// 		"tuesday",
// 		"wednesday",
// 		"thursday",
// 		"friday",
// 		"saturday",
// 	];
// 	let d = new Date(date).getDay();
// 	for (let i = 0; i < days.length; i++) {
// 		if (d == i) {
// 			console.log(days[i]);
// 		}
// 	}
// }
// print_day(Date.now());
// let date = new Date("2023-111-13");
// console.log(date == "Invalid Date");

//-------------------------------------
//-----------------------------------------
function get_date_from_user() {
	let date = prompt("Please enter your birth date");
	let color = prompt("Please choose a color (r) red, (b) blue, (g) green");
	let my_colors = {
		r: "red",
		b: "blue",
		g: "green",
	};
	function CustomException(message) {
		const error = new Error(message);
		return error;
	}
	function get_Date(date) {
		let my_date = new Date(date);
		if (my_date == "Invalid Date" || my_date.toString().length <= 8) {
			throw new CustomException(`${alert("not valid date")}`);
		} else {
			return my_date;
		}
	}
	get_Date(date);
	function handel__date_Error(date) {
		try {
			get_Date(date);
		} catch (e) {
			e.message;
		}
	}
	handel__date_Error(date);
	document.write(
		`<h1 style='color: ${my_colors[color]}; font-weight: bold;'>his Birth Date ${date} and color he chosed ${my_colors[color]}</h1>`
	);
	console.log(`current Date ${date} and color he chosed ${my_colors[color]}`);
	return date;
}
get_date_from_user();
//-----------------------------------------
