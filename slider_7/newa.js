let input = document.getElementById("ans");
function EnterNumber(num) {
	input.value += num;
}

function EnterOperator(operator) {
	input.value += operator;
}
function EnterClear() {
	input.value = "";
}

function EnterEqual() {
	input.value = eval(input.value);
}
