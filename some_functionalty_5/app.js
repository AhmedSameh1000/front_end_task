// function show_time() {
// 	let date = new Date();
// 	document.write(`${date.toISOString()}`);
// }
// //-----------------------------------------------
// var wind;
// function open_wind() {
// 	setTimeout(function () {
// 		wind = window.open("http://google.com");
// 	}, 3000);
// }
// //--------------------------------------------------
// function close_wind() {
// 	wind.close();
// }
// //---------------------------------------------------
// function isEvenOrOdd(num) {
// 	return /[02468]/.test(num);
// }
// console.log(isEvenOrOdd(13));

////---------------------------------------
//-------------------------------------------

// function show_data() {
// 	let my_name;
// 	function get_name() {
// 		my_name = prompt("please enter your name");
// 		if (!/^[a-zA-Z]/.test(my_name)) {
// 			alert(`enter valid name`);
// 			setTimeout(get_name, 3000);
// 		} else {
// 			alert(`operation your name completed successfully`);
// 		}
// 	}
// 	get_name();
// 	console.log(my_name);

// 	let my_phone;
// 	function get_phone() {
// 		my_phone = prompt("please enter your phone");
// 		if (!/^\d{8}$/.test(my_phone)) {
// 			alert(`enter valid phone number`);
// 			setTimeout(get_phone, 3000);
// 		} else {
// 			alert(`operation your phone completed successfully`);
// 		}
// 	}
// 	get_phone();
// 	console.log(my_phone);

// 	let my_mobile;
// 	function get_mobile_num() {
// 		my_mobile = prompt("please enter your mobile number");
// 		if (!/^(01)(0|1|2|5)[0-9]{8}$/.test(my_mobile)) {
// 			alert(`enter valid mobile number`);
// 			setTimeout(get_mobile_num, 3000);
// 		} else {
// 			alert(`operation your mobile number completed successfully`);
// 		}
// 	}
// 	get_mobile_num();
// 	console.log(my_mobile);

// 	let my_Email;
// 	function get_Email() {
// 		my_Email = prompt("please enter your Email");
// 		if (!/[a-zA-Z]@[0-9]{3}.com/.test(my_Email)) {
// 			alert(`enter valid Email`);
// 			setTimeout(get_Email, 3000);
// 		} else {
// 			alert(`operation your Email completed successfully`);
// 		}
// 	}
// 	get_Email();
// 	console.log(my_Email);

// 	let All_color = { r: "red", g: "green", b: "blue" };
// 	let color;
// 	function get_color() {
// 		color = prompt("please enter color (r): red  (g): green (b):blue");
// 	}
// 	get_color();
// 	let date = new Date();

// 	document.write(`
// <h1>entering your data</h1>
// <hr>
// <h1 style="color: ${
// 		All_color[color]
// 	};"> welcome dear <span style="color:black;">${my_name}</span></h1>
// <h1 style="color: ${
// 		All_color[color]
// 	};">your telephone number is <span style="color:black;">${my_phone}</span></h1>
// <h1 style="color: ${
// 		All_color[color]
// 	};"> your mobile number is <span style="color:black;">${my_mobile}</span></h1>
// <h1 style="color: ${
// 		All_color[color]
// 	};"> your Email Address is <span style="color:black;">${my_Email}</span></h1>
// <h1 style="color: ${
// 		All_color[color]
// 	};"> today is <span style="color:black;">${date.getDate()}</span></h1>
// <h1 style="color: ${
// 		All_color[color]
// 	};"> we are in month <span style="color:black;">${date.getMonth()}</span></h1>
// <h1 style="color: ${
// 		All_color[color]
// 	};"> and year <span style="color:black;">${date.getFullYear()}</span></h1>
// <h1 style="color: ${
// 		All_color[color]
// 	};"> today is <span style="color:black;">${date.toLocaleString()}</span></h1>
// `);
// }
// show_data();

//------------------------------------------------------
//------------------------------------------------------

let students = [
	{ name: "mohammed", grade: 60 },
	{ name: "ahmed", grade: 70 },
	{ name: "sara", grade: 96 },
	{ name: "sameh", grade: 40 },
	{ name: "said", grade: 55 },
];
// let student = students.find(
// 	(student) => student.grade > 90 && student.grade <= 100
// );
// console.log(student);
// //------------------------------------------------
let students_less_than60 = students.filter((s) => {
	return s.grade < 60;
});
// console.log(students_less_than60);
//---------------------------------------------
let new_obj = new Object({ name: `osama`, grade: 70 });
students.push(new_obj);

// for (let i in students) {
// 	console.log(students[i]);
// }
// //---------------------------------------------
// console.log("#".repeat(25));
// students.pop();
// for (let i of students) {
// 	console.log(i);
// }
// //---------------------------------------------
// students.sort((a, b) => (a.name > b.name ? 1 : -1));
// console.log("#".repeat(25));
// for (let i of students) {
// 	console.log(i);
// }
// //--------------------------
// students.splice(
// 	2,
// 	0,
// 	{ name: "abdall", grade: 80 },
// 	{ name: "sami", grade: 44 }
// );
// console.log("#".repeat(25));
// for (let i of students) {
// 	console.log(i);
// }
// //-----------------------------------------
// students.splice(3, 1);
// console.log("#".repeat(25));
// for (let i of students) {
// 	console.log(i);
// }
