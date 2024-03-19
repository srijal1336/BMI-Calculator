const bmiText = document.getElementById('bmi');
const descText= document.getElementById('desc');
const resetWeight = document.getElementById('Weight')
const resetHeight = document.getElementById('Height')

function Reset(){
    bmiText.textContent = 0;
    bmiText.className ="";
    descText.textContent = "N/A";
    resetWeight.innerHTML = 0;
    resetHeight.innerHTML = 0;
}

function Calculate(){

    let weight = parseFloat(document.getElementById('Weight').value);
    let height = parseFloat(document.getElementById('Height').value);

    if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0)
    {
        alert ("Please enter a valid weight and height");
        return;
    }
    let heightInMeter = height / 100 ; 
    let bmi= weight/Math.pow(heightInMeter, 2);
    let desc = interpretBMI(bmi);
     
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
