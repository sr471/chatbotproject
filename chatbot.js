
function enter(event){
	var x = event.keyCode;
	if(x == 13){
		speak();
	}
}

var reHi = ["hi", "hello", "Bonjor","Nǐ hǎo", "Ciao", "Hallo"];


var questions = {
	"hi": ["Hi!", "hello", "Bonjor","Nǐ hǎo", "Ciao", "Hallo"],
	"how are you": "Good",
	"what's the weather": "sun",
	"how was your day": "so-so",
	"what time is it": "It is " + timeJR,
	

}
var unknown =["What?", "I don't speak stupid"];


function speak()
{
	var userInput = $("#input").val();
	var boxContent = $("#chat-area").html();

	if( questions[userInput] == undefined){
	 document.getElementById("chat-area").innerHTML += userInput + "<br>";
	var	response = unknown[Math.floor((Math.random() * unknown.length))] + "<br>";
	}

	else{
 document.getElementById("chat-area").innerHTML += userInput + "<br>";
  console.log("bruh");
	var match = questions[userInput];
  var response = match[Math.floor((Math.random() * match.length))] + "<br>";
}

  $("#chat-area").append(response);

}

var date = new Date();
var time = date.getHours();
var weekDay = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();

var timeConversion = {
 1: "1:00 AM",
 2: "2:00 AM",
 3: "3:00 AM",
 4: "4:00 AM",
 5: "5:00 AM",
 6: "6:00 AM",
 7: "7:00 AM",
 8: "8:00 AM",
 9: "9:00 AM",
 10: "10:00 AM",
 11: "11:00 AM",
 12: "12:00 PM",
 13: "1:00 PM",
 14: "2:00 PM",
 15: "3:00 PM",
 16: "4:00 PM",
 17: "5:00 PM",
 18: "6:00 PM",
 19: "7:00 PM",
 20: "8:00 PM",
 21: "9:00 PM",
 22: "10:00 PM",
 23: "11:00 PM",
 24: "12:00 AM"
}

var timeJR = timeConversion[time];

var weekDayConversion = {
 0: "Sunday",
 1: "Monday",
 2: "Tuesday",
 3: "Wednesday",
 4: "Thursday",
 5: "Friday",
 6: "Saturday"
}

var otherWeekday = weekDayConversion[weekDay];

var monthConversion = {
 0: "January",
 1: "February",
 3: "March",
 3: "April",
 4: "May",
 5: "June",
 6: "July",
 7: "August",
 8: "September",
 9: "October",
 10: "November",
 11: "December"
}

var otherMonth = monthConversion[month];
