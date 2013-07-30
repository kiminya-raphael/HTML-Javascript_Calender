var days = new Array("Su", "Mo", "Tu", "We", "Th", "Fr", "Sa");
var months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var monthLen = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var dateFormat = "n/j/Y";
var today = new Date();
var yr = today.getFullYear(); 
var mo = today.getMonth();
var da = today.getDate();
function createCalender() {
  try{
	if(document.getElementById("aCal") == null) {
		eCalender = document.createElement("div");
		eCalender.setAttribute("id", "aCal");
		document.body.appendChild(eCalender);
	}
	populateCalender();
	}
	catch(err){alert(err);}
}

function populateCalender(){

		var aCal = "<table border='1'><tr><td ><a  class='btn' href='javascript: PrevMonth();' title='Previous Month'>&lt;&lt;</a></td>"+
		"<td class=\"cellMonth\" width=\"80%\" colspan=\"5\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"+months[mo]+" "+yr+"</b> </td>"+
		"<td ><a class='btn' href=\"javascript: NextMonth();\" title=\"Next Month\">&gt;&gt;</a></td></tr>"+
		"<tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>";

	
		//var aDay = days[aDate.getDay()];
				
			var dt = 1;	//current date to insert (starting from 1)
			var aDate = new Date(yr,mo,dt);
			while(dt<=monthLen[mo]){	//while date doesn't exceed length of month
				aCal = aCal + "<tr>";	//new row for each week (Su - Sa)
				for(var td=0; td<7;td++){
					var xx = aDate.getDay();
					if(xx==td && dt<=monthLen[mo]){
						aCal = aCal+"<td> <a class='days' href=\"javascript: getDate("+dt+");\">"+dt+"</a></td>";
						dt++;	// move to next date once current date is placed on calender
						aDate = new Date(yr,mo,dt);
					}
					else{
						aCal = aCal+"<td class='blanks'> </td>";
					}
					
				}
				aCal = aCal + "</tr>";
				
			}
			
		
		/* create row; add data according to which day first date starts;
		*  add rows	until last date (in month.length) is reached	*/
		
		aCal=aCal+"</table>";
		eCalender.innerHTML=aCal;
		
}
function PrevMonth() {
	mo--;
	if(mo==-1) {
		mo = 11;
		yr--;
	}
	populateCalender();
}

function NextMonth() {
	mo++;
	if(mo==12) {
		mo = 0;
		yr++;
	}
	populateCalender();
}


function getDate(day) {
	try{
	}
	catch(err){alert(err);}
	}




