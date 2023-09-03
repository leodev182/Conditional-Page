//----------Sticker Page

function countStickers() {
  //-----DOM y Variables
  const card1 = document.getElementById("stick1").value;
  const card2 = document.getElementById("stick2").value;
  const card3 = document.getElementById("stick3").value;
  const respuestaParrafo = document.querySelector("#respuesta");

  const cardUno = Number(card1);
  const cardDos = Number(card2);
  const cardTres = Number(card3);

  //----- Método

  const answer = cardUno + cardDos + cardTres;
  console.log(typeof respuestaParrafo);

  if (answer > 10) {
    respuestaParrafo.style.backgroundColor = "red";
    respuestaParrafo.style.fontSize = "large";
    respuestaParrafo.innerHTML = "LO SIENTO!!! LLEVAS DEMASIADOS STICKERS";
  } else if (answer == 0) {
    respuesta.innerHTML = "No llevas Stickers?";
  } else {
    respuestaParrafo.innerHTML =
      "Perfecto! llevas" + " " + answer + " " + "Stickers";
    respuestaParrafo.style.backgroundColor = "white";
  }
}

//----------Password Page

function btnConfirm() {
  //-----DOM y Variables
  const selectOne = document.querySelector("#num1").value;
  const selectTwo = document.querySelector("#num2").value;
  const selectThree = document.querySelector("#num3").value;
  const showAnswer = document.getElementById("showAnswer");
  const showDisplay = document.getElementById("showDisplay");
  const passLocation = document.getElementById("passwordLocation");

  //----- Método

  const unlock = selectOne + selectTwo + selectThree;

  if (unlock == 911) {
    showAnswer.style.fontSize = "xx-large";
    showAnswer.innerHTML = "Password 1 CORRECTO";
    showDisplay.style.backgroundImage = "url(assets/img/candadoAbierto.png)";
    passLocation.style.display = "none";
  } else if (unlock == 714) {
    showAnswer.style.fontSize = "xx-large";
    showAnswer.innerHTML = "Password 2 CORRECTO";
    showDisplay.style.backgroundImage = "url(assets/img/candadoAbierto.png)";
    passLocation.style.display = "none";
  } else {
    showDisplay.style.backgroundImage = "url(assets/img/loose.gif)";
    passLocation.style.display = "none";
    showAnswer.style.fontSize = "xx-large";
    showAnswer.style.color = "red";
    showAnswer.innerHTML = "Password INCORRECTO";
  }

  console.log(unlock);
}
