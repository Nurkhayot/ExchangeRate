var form = document.querySelector(".js-form");
var nameInput = document.querySelector(".js-input");
var selectName = document.querySelector(".select");
var selectName1 = document.querySelector(".select1");
var mesName = document.querySelector(".js-message");

// FORM FUNCTION
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // USD
  if (selectName1.value === "USD" && selectName.value == "USD") {
    mesName.textContent = `${nameInput.value} $`;
  } else if (selectName1.value === "USD" && selectName.value == "UZ") {
    mesName.textContent = `${nameInput.value * 10630} SUM`;
  } else if (selectName1.value === "USD" && selectName.value == "EUR") {
    mesName.textContent = `${(nameInput.value * 0.8454).toFixed(2)} EUR`;
  } else if (selectName1.value === "USD" && selectName.value == "RUB") {
    mesName.textContent = `${(nameInput.value * 75.16).toFixed(2)} RUB`;
  }
  // EURO
  else if (selectName1.value === "EUR" && selectName.value == "EUR") {
    mesName.textContent = `${nameInput.value} EUR`;
  } else if (selectName1.value === "EUR" && selectName.value == "USD") {
    mesName.textContent = `${(nameInput.value * 1.1828).toFixed(2)} USD`;
  } else if (selectName1.value === "EUR" && selectName.value == "RUB") {
    mesName.textContent = `${(nameInput.value * 88.905).toFixed(2)} RUB`;
  } else if (selectName1.value === "EUR" && selectName.value == "UZ") {
    mesName.textContent = `${(nameInput.value * 12000).toFixed(2)} UZ`;
  }

  //RUB
  else if (selectName1.value === "RUB" && selectName.value == "RUB") {
    mesName.textContent = `${nameInput.value} RUB`;
  } else if (selectName1.value === "RUB" && selectName.value == "USD") {
    mesName.textContent = `${(nameInput.value * 0.0133).toFixed(2)} USD`;
  } else if (selectName1.value === "RUB" && selectName.value == "EUR") {
    mesName.textContent = `${(nameInput.value * 0.0112).toFixed(2)} EUR`;
  } else if (selectName1.value === "RUB" && selectName.value == "UZ") {
    mesName.textContent = `${(nameInput.value * 141.72).toFixed(2)} UZ`;
  }

  //UZ
  else if (selectName1.value === "UZ" && selectName.value == "UZ") {
    mesName.textContent = `${nameInput.value} UZ`;
  } else if (selectName1.value === "UZ" && selectName.value == "USD") {
    mesName.textContent = `${(nameInput.value * 0.000094).toFixed(2)} USD`;
  } else if (selectName1.value === "UZ" && selectName.value == "EUR") {
    mesName.textContent = `${(nameInput.value * 0.000079).toFixed(2)} EUR`;
  } else if (selectName1.value === "UZ" && selectName.value == "RUB") {
    mesName.textContent = `${(nameInput.value * 0.0071).toFixed(2)} RUB`;
  }
});
