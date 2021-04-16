var btnTranslate = document.querySelector("#translate-button");
var inputText = document.querySelector("#translate-input");
var outputText = document.querySelector("#translate-output");

var res = "https://api.funtranslations.com/translate/valyrian.json";
var URL = encodeURI(res);

function getTranslationURL(text) {
  return URL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("Error occurred:" + error);
  alert(error);
}

function clickHandler() {
  var translationText = inputText.value;
  fetch(getTranslationURL(translationText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
  inputText.value = "";
}

btnTranslate.addEventListener("click", clickHandler);
