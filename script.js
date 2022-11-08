var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");


executeButton.addEventListener("click", demonstrationFunction);

function demonstrationFunction() {

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  heading.classList.toggle("specialTitle");
  outputParagraph.classList.toggle("specialText")

  var currentInputText = inputElement.value;
  var currentInputAsNumber = parseFloat(currentInputText);
  console.log(currentInputText / 5.5);
  console.log(currentInputAsNumber / 5.5);

  var fortuneArray = ["Don’t hold onto things that require a tight grip.", "Vulnerability sounds like faith and looks like courage.", "And into the forest I go, to lose my mind and find my soul.", "Look how far you've come.", "Each time you break your own boundaries to ensure that someone else likes you, you like yourself a little less.", "Every good and perfect gift is from above.", "The art of life is not controlling what happens to us, but using what happens to us."]

  var randomIndex = Math.floor( Math.random() * fortuneArray.length );

  outputParagraph.innerHTML = currentInputText + " " + fortuneArray[randomIndex];

}

function mouseMovedFunc(eventDetails) {

  var mouseX = eventDetails.screenX;
  var mouseY = eventDetails.screenY;

  console.log("Cursor is at: " + mouseX + "," + mouseY + ".");

  executeButton.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";

}
