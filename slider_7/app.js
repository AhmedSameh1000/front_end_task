let my_imgs = document.querySelectorAll(`.container img`);
let my_btn = document.querySelectorAll(`.btns div`);
let next = document.getElementById(`next`);
let prev = document.getElementById(`prev`);
let stop = document.getElementById(`stop`);
let play = document.getElementById(`play`);
let count = 0;

function next_fun() {
	my_imgs.forEach((e) => {
		e.style.zIndex = 0;
	});
	if (my_imgs.length == count) {
		count = 0;
		my_imgs[count - 1] = my_imgs[my_imgs.length - 1];
	}
	my_imgs[count].style.zIndex = 100;
	count++;
}

next.onclick = next_fun;

prev.onclick = function () {
	my_imgs.forEach((e) => {
		e.style.zIndex = 0;
	});
	if (count == 1) {
		count = my_imgs.length + 1;
		my_imgs[my_imgs.length] = my_imgs[1];
	}
	count--;
	my_imgs[count - 1].style.zIndex = 100;
};

let stop_slider;
play.onclick = function () {
	stop_slider = setInterval(next_fun, 500);
};

stop.onclick = function () {
	clearInterval(stop_slider);
};
my_btn.forEach((e) => {
	e.addEventListener("click", function () {
		my_btn.forEach((e) => {
			e.style.backgroundColor = "#aaaa";
		});
		e.style.backgroundColor = "gray";
	});
});

// Backspace
//--------------------------------------------------
function preven(ev) {
	if (ev.key != "Backspace" && isNaN(ev.key)) {
		ev.preventDefault();
	}
}

//--------------------------------------------------
// let user;
// my_form.onsubmit = function () {
// 	user = document.getElementsByTagName("input")[0].value;
// };

let my_name = document.getElementById(`my_form`)[0];
my_name.onfocus = function () {
	my_name.style.border = "1px solid blue";
};
my_name.onblur = function () {
	my_name.style.border = "1px solid black";
};

let after_name = document.getElementById(`after_name`);
my_name.onkeydown = function () {
	if (my_name.value.length < 3 || my_name.value.includes(" ")) {
		after_name.style.display = "block";
		after_name.style.color = "red";
		after_name.textContent = `invalid name`;
	} else {
		after_name.style.display = "none";
	}
};

let form = document.querySelectorAll("form")[0];
form.addEventListener(`submit`, (e) => {
	let after_pas = document.getElementById(`after_pass`);
	let pas_one = document.getElementById("one").value;
	let pas_two = document.getElementById("two").value;
	if (pas_one != pas_two) {
		after_pas.textContent = "password are not the same ";
		after_pas.style.display = "block";
		after_pas.style.color = "red";
		e.preventDefault();
	}
});
//----------------------------------------------

let my_form_task = document.querySelectorAll(`.formssss`)[0];

my_form_task.addEventListener("submit", function (e) {
	e.preventDefault();
	let my_div_container = document.getElementById("my_content");
	let my_name_inp = document.getElementById(`cont_name`).value;
	let my_age_inp = document.getElementById(`cont_age`).value;
	let my_email_inp = document.getElementById(`cont_email`).value;
	let div_name = document.createElement(`div`);
	div_name.textContent = my_name_inp;

	let div_age = document.createElement(`div`);
	div_age.textContent = my_age_inp;

	let div_email = document.createElement(`div`);
	div_email.textContent = my_email_inp;

	let card = document.createElement(`div`);
	card.className = "card";

	card.appendChild(div_name);
	card.appendChild(div_age);
	card.appendChild(div_email);
	my_div_container.appendChild(card);
});
//------------------------------------
