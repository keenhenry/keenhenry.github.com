/* */
function clock()
{
	var today = new Date();
	
	var hour = today.getHours();
	var min =  today.getMinutes();
	var sec =  today.getSeconds();

	// add a zero in front of numbers < 10
	min = checkTime(min); 
	sec = checkTime(sec);

	document.getElementById('clock').innerHTML =	hour + ":" + min + ":" + sec;
	var ptr = setTimeout('clock()', 500);
}

function checkTime(n)
{
	if (n < 10)
		n = "0" + n;
	return n;
}
