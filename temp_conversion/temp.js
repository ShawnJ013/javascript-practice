var report = function(celsius, fahrenheit) {
	document.getElementById("result").innerHTML = (cellsius + "/xBOC" + fahrenheit + "/xBOF");
};
document.getElementById("f_to_c").onClick = function() {
	var f = document.getElementById("temperature").value;
	report((f - 32) / 1.8, f);
};
document.getElementById("c_to_f").onClick = function() {
	var c = document.getElementById("temperature").value;
	report(c, 1.8 * c + 32);
};