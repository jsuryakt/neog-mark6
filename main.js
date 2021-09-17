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
    alert("Enter something to translate");
  } else {
    var api = "https://api.funtranslations.com/translate/yoda.json";
    var url = api + "?text=" + input;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.error.message != "") {
          errorHandler(json.error.message);
        } else {
          var translated = json.contents.translated;
          output.innerText = translated;
        }
      })
      .catch(errorHandler);
  }
}
