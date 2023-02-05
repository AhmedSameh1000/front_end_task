let Form_1 = document.querySelectorAll(`#form_1`)[0];
Form_1.addEventListener("submit", function () {
	let check = document.getElementById(`checked`);
	if (check.checked == 1) {
		console.log(check.checked);
		localStorage.Name = Form_1[0].value;
		localStorage.Password = Form_1[1].value;
	} else {
		localStorage.clear();
	}
});
//-----------------------------------------

fetch("https://reqres.in/api/users/1")
	.then((response) => response.json()) // parse the response as JSON
	.then((data) => {
		let userData = data.data;
		let first_name = document.getElementById(`first_name`);
		let last_name = document.getElementById(`last_name`);
		let img_1 = document.getElementById(`img_1`);
		first_name.textContent = userData.first_name;
		last_name.textContent = userData.last_name;
		img_1.src = userData.avatar;
	});

//----------------------------------------------------
let btn_2 = document.getElementById(`btn_2`);
btn_2.addEventListener(`click`, function () {
	let my_second_id = document.getElementById(`my_second_id`).value;
	fetch(`https://reqres.in/api/users/${my_second_id}`)
		.then((response) => response.json())
		.then((data) => {
			let userData = data.data;
			let first_name = document.getElementById(`my_first_name`);
			let last_name = document.getElementById(`my_last_name`);
			let img_1 = document.getElementById(`img_2`);
			first_name.textContent = userData.first_name;
			last_name.textContent = userData.last_name;
			img_1.src = userData.avatar;
		});
});
//-------------------------------------------------------
let userData;
let my_options;
let f_name = document.getElementById("my_first_namee");
let l_name = document.getElementById("my_last_namee");
let img = document.getElementById("img_3");
let op = document.querySelectorAll("select")[0];

fetch("https://reqres.in/api/users")
	.then((response) => response.json())
	.then((data) => {
		let select = document.getElementById("select");
		userData = data.data;
		let i;
		for (i = 0; i < userData.length; i++) {
			my_options = document.createElement("option");
			my_options.value = `${userData[i].id}`;
			my_options.textContent = `${userData[i].first_name} ${userData[i].last_name}`;
			select.appendChild(my_options);
		}
	});
function showme(e) {
	e.srcElement.onclick = function () {
		if (this.value) {
			f_name.textContent = userData[this.value - 1].first_name;
			l_name.textContent = userData[this.value - 1].last_name;
			img.src = userData[this.value - 1].avatar;
		}
	};
}
/////////////////////////////////s
