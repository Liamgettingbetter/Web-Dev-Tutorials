var list = document.querySelector("li");
list.innerHTML = "";
var greetings = ["Happy Birthday!", "Merry Christmas my love",
		"A happy Christmas to all the family",
		"You're all I want for Christmas",
		"Get well soon"];

for(var i = 0; i < greetins.length; i++) {
	var input = greetings[i];
	
	if(greetings.indexOf("Christmas") !== -1) {
		var result = input;
		var listItem = document.createElement("li");
		listItem.textContent = result;
		list.appendChild(listItem);
	}
}