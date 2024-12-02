document.getElementById("imc-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const gender = document.getElementById("gender").value;
  // Reemplazamos la coma por un punto para que funcione correctamente en el cálculo
  const weight = parseFloat(document.getElementById("weight").value.replace(",", "."));
  const height = parseFloat(document.getElementById("height").value.replace(",", "."));
  const resultDiv = document.getElementById("result");

  if (isNaN(weight) || isNaN(height)) {
    resultDiv.innerHTML = "<p>¿En serio? Por favor, ingresa números válidos para peso y altura.</p>";
    return;
  }

  const imc = weight / (height * height);
  let resultMessage = "";
  let funnyMessage = "";

  if (imc < 18.5) {
    resultMessage = "¡Cuidado! Estás más flaco que el Wi-Fi de mi abuela.";
    funnyMessage = gender === "female" 
      ? "Come más, que te vas a volar con el viento. 🤪" 
      : "Estás tan flaco que un resfriado te derrumba, come algo. 🍕";
  } else if (imc < 24.9) {
    resultMessage = "¡Buen trabajo! Estás en el peso perfecto para hacer ejercicio... si es que alguna vez decides hacerlo.";
    funnyMessage = "Sigue así, pero cuidado, que el espejo no te haga sentir demasiado bien. 😎";
  } else if (imc < 29.9) {
    resultMessage = "¡Ya basta! Estás en sobrepeso. Deberías dejar de usar el 'poco a poco' como excusa para no hacer ejercicio.";
    funnyMessage = gender === "female" 
      ? "Ponte a hacer ejercicio o te van a llamar 'tía chubby'. 😬"
      : "Tu barriga ya tiene su propio código postal. 🏠 ¡Vamos al gimnasio!";
  } else {
    resultMessage = "¡Ay, madre! Estás en obesidad. ¿Te has visto en el espejo últimamente o no tienes uno?";
    funnyMessage = gender === "female" 
      ? "Te quiero mucho, pero esa pancita ya tiene vida propia. ¿Una ensalada por favor? 🥗"
      : "¡Oye, colega! Si sigues así, vas a tener que hacer ejercicio solo para levantarte de la cama. 🛏️";
  }

  resultDiv.innerHTML = `
    <h3>${resultMessage}</h3>
    <p>Tu IMC es: ${imc.toFixed(2)}</p>
    <p class="message">${funnyMessage}</p>
  `;
});
