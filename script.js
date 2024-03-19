const bmiText = document.getElementById('bmi');
const descText= document.getElementById('desc');
const form= document.querySelector('#calculator');

form.addEventListener('Submit', onformSubmit);
form.addEventListener('Reset', onFormReset);

function onFormReset(){
    bmiText.textContent = 0;
    bmiText.className ="";
    descText.textContent = "N/A";
}

function onformSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0)
    {
        alert ("Please enter a valid weight and height");
        return;
    }
    const heightInMeter = height / 100 ; 
    const bmi= weight/Math.pow(heightInMeter, 2);
    const desc = interpretBMI(bmi);
     
    if(desc === undefined) {
        alert("An error occurred while interpreting BMI");
        return;
    }

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = desc;
    descText.innerHTML = `You are <strong>${desc}</strong>`;
}

function interpretBMI(bmi) {
    if (bmi < 18.5){
        return "underweight";
    } else if (bmi < 25){
        return "healthy";
    } else if(bmi < 30){
        return "overweight";
    } else {
        return "obese";
    }
}