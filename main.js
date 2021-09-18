var button = document.querySelector("#translate-btn");
var output = document.querySelector("#output-area");

button.addEventListener("click", translateToMinion);

function errorHandler(error) {
  alert("Error: " + error);
}

function translateToMinion() {
  var input = document.querySelector("#input-area").value;
  console.log(input);
  if (input == "") {
    output.innerText = "";
    alert("Enter something to translate");
  } else {
    var api = "https://api.funtranslations.com/translate/minion.json";
    var url = api + "?text=" + input;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
          var translated = json.contents.translated;
          output.innerText = translated;
      })
      .catch(errorHandler);
  }
}
