let go_out = document.getElementById("close");
let my_img = document.getElementById("my_img");
let div = document.getElementById("content");

go_out.onclick = function () {
	div.style.width = "150px";
};

my_img.onclick = function () {
	div.style.width = "700px";
};
