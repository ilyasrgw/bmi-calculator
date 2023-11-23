



const calculateBMI = () => {
    let weight = document.getElementById("weight").value;
    let height =  document.getElementById("height").value;

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    document.getElementById("output").innerHTML = "Your BMI is " + bmi;









}
