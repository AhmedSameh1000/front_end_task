let my_form = document.getElementById(`my_form`);
let user;
my_form.onsubmit = function () {
	user = document.getElementsByTagName("input")[0].value;
};
// //---------------------------------------------------------------------
// let btn = document.getElementById(`btn`);
// btn.onclick = function good() {
// 	open(`type.html`, "_blanck", "width=600,height=400,top=200,left=300");
// };

// //--------------------------------
// let my_p = document.getElementById("PAR");
// function ChangeFont(font) {
// 	my_p.style.fontFamily = font;
// }
// function ChangeAlign(align) {
// 	my_p.style.textAlign = align;
// }
// function ChangeHeight(height) {
// 	my_p.style.lineHeight = height;
// }
// function ChangeLSpace(space) {
// 	my_p.style.letterSpacing = space;
// }
// function ChangeIndent(ident) {
// 	my_p.style.textIndent = ident;
// }
// function ChangeTransform(transfer) {
// 	my_p.style.textTransform = transfer;
// }
// function ChangeDecorate(decorate) {
// 	my_p.style.textDecoration = decorate;
// }
// function ChangeBorder(border_style) {
// 	my_p.style.borderStyle = border_style;
// }
// function ChangeBorderColor(border_color) {
// 	my_p.style.borderColor = border_color;
// }
// //----------------------------------------------

// let opacity = 1;
// let stop_interval;
// let stop_interval_2;

// function play(e) {
// 	if (e.style.opacity < 0) {
// 		opacity = 0;
// 		clearInterval(stop_interval);
// 	}

// 	clearInterval(stop_interval_2);

// 	stop_interval = setInterval(function () {
// 		e.style.opacity = opacity;
// 		opacity -= 0.1;
// 	}, 100);
// }

// function stopp(e) {
// 	if (e.style.opacity > 1) {
// 		opacity = 1;
// 		clearInterval(stop_interval_2);
// 	}
// 	clearInterval(stop_interval);
// 	stop_interval_2 = setInterval(function () {
// 		e.style.opacity = opacity;
// 		opacity += 0.1;
// 	}, 100);
// }

// //--------------------------------------------------

// let marpela = document.querySelectorAll(`.marp img`);
// let src_spicial = "imgs/marb_2.jpg";
// let src_default = "imgs/marb_1.jpg";
// let stop_this;
// let count = 0;

// function ahmed() {
// 	if (count == marpela.length - 1) {
// 		count = 0;
// 		marpela[count].src = marpela[marpela.length - 1].src;
// 		marpela[marpela.length - 1].src = src_default;
// 		marpela[count - 1].src = src_spicial;
// 	}

// 	marpela[count + 1].src = marpela[count].src;
// 	marpela[count].src = src_default;
// 	count++;
// }

// stop_this = setInterval(ahmed, 200);
// marpela.forEach((e) => {
// 	e.onmouseover = function () {
// 		clearInterval(stop_this);
// 	};
// });

// marpela.forEach((e) => {
// 	e.onmouseout = function () {
// 		stop_this = setInterval(ahmed, 200);
// 	};
// });
