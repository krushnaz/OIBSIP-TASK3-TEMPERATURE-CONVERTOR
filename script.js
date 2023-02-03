function celciusToFahrenheit(degree) {
	displayResult.innerHTML = `${(degree * 1.8 + 32).toFixed(2)} Â°F`;
}
function celciusTokelvin(degree) {
	displayResult.innerHTML = `${(degree + 273.15).toFixed(2)} Â°K`;
}
function FahrenheitToCelcius(degree) {
	displayResult.innerHTML = `${(((degree - 32) * 5) / 9).toFixed(2)} Â°C`;
}
function FahrenheitToKelvin(degree) {
	displayResult.innerHTML = `${((5 / 9) * (degree + 459.67)).toFixed(2)} Â°K`;
}
function kelvinToCelcius(degree) {
	displayResult.innerHTML = `${(degree - 273.15).toFixed(2)} Â°C`;
}
function KelvinToFahrenheit(degree) {
	displayResult.innerHTML = `${(1.8 * (degree - 273.15) + 32).toFixed(2)} Â°F`;
}
const inputDegree = document.querySelector(".input-degree");

const degreeType = document.getElementById("degree-type");

const convertType = document.getElementById("convert-type");

const convertBtn = document.querySelector(".convert-btn");

const displayResult = document.querySelector(".display-result");

const convertForm = document.querySelector(".convert-form");

const errorMsg = document.querySelector(".error");

window.addEventListener("load", () => {
	inputDegree.value = "";
	displayResult.innerHTML = "";
});

convertForm.addEventListener("submit", (e) => {
	e.preventDefault();
	setTimeout(() => {
		let num = inputDegree.valueAsNumber;
		errorMsg.innerHTML = "";
		displayResult.innerHTML = "";

		if (Number.isNaN(num)) {
			errorMsg.innerHTML = "please write a valid number!";
			return;
		}
		if (degreeType.value === convertType.value) {
			errorMsg.innerHTML = "please choose 2 different temperature units.";
			return;
		}
		if (degreeType.value === "celsius" && convertType.value === "fahrenheit") {
			celciusToFahrenheit(num);
		} else if (
			degreeType.value === "celsius" &&
			convertType.value === "kelvin"
		) {
			celciusTokelvin(num);
		} else if (
			degreeType.value === "fahrenheit" &&
			convertType.value === "celsius"
		) {
			FahrenheitToCelcius(num);
		} else if (
			degreeType.value === "fahrenheit" &&
			convertType.value === "kelvin"
		) {
			FahrenheitToKelvin(num);
		} else if (
			degreeType.value === "kelvin" &&
			convertType.value === "celsius"
		) {
			kelvinToCelcius(num);
		} else if (
			degreeType.value === "kelvin" &&
			convertType.value === "fahrenheit"
		) {
			KelvinToFahrenheit(num);
		}
	}, 450);
});