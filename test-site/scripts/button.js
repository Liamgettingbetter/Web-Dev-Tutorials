var button = document.querySelector("button");
var text = document.querySelector("p");

button.addEventListener("click", update);

function update() {
	if(button.textContent === "Start machine") {
		button.textContent = "Stop machine";
		text.textContent = "The machine has started.";
	} else {
		button.textContent = "Start machine";
		text.textContent = "The machine is stopped.";
	}
}