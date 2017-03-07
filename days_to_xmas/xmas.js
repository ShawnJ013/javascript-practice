today = new Date();
var days = new Date(today.getFullYear(), 11, 25);
	if (today.getMonth()==11 && today.getDate()>25)
	{
		days.setFullYear(days.getFullYear()+1);
	}
	var one_day=1000*60*60*24;
	console.log(Math.ceil((days.getTime()-today.getTime())/(one_day))+
		" days left until Christmas!");