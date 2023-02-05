var draggedElem;
var s = true;
function dragStart(draggable) {
	if (draggable.name != "a" && draggable.name != "A") {
		return false;
	}
	console.log(draggable.name);
	draggedElem = draggable;
	console.log(draggedElem);
}

function drop(droppableItem) {
	droppableItem.appendChild(draggedElem);
}
//////////////////////
function hear_show() {
	console.log("hear");
}

function show_face() {
	console.log("face");
}
function show_nose() {
	console.log("nose");
}
function shows() {
	console.log("Ear");
}
function show_mouth() {
	console.log("mouth");
}
// function show_mouth() {
// 	console.log("mouth");
// }
// function show_Ear() {
// 	console.log("Ear");
// }
