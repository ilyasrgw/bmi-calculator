
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  calculateBMI();

}
);

function calculateBMI() {
  
  let weight = parseFloat(document.getElementById('weight').value) ;
  let height = parseFloat(document.getElementById('height').value) / 100 ; 
  let bmi = weight / (height * height);
  let bmiResult = "Your BMI is " + bmi.toFixed(2);

  let resultElement = document.getElementById('result');
  resultElement.textContent = bmiResult;
  if (bmi < 18.5) {
    message = "Underweight";
    resultElement.style.color = "#ffc44d";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    message = "Normal weight";
    resultElement.style.color = "#0be881";
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    message = "Overweight";
    resultElement.style.color = "#ff884d";
  }

  else if (bmi >= 30) {
    message = "Obese";
    resultElement.style.color = "#ff5e57";
  }

  document.getElementById("message").textContent = message;

}


let resetBMI = () => {
  height.value = "";
  weight.value = "";

  document.getElementById("result").innerHTML = "";
  document.getElementById("message").textContent = "";
}

 
