function calculateBMI() {
    var name = document.getElementById('name').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var bmi = weight / ((height / 100) ** 2);
    var status = '';

    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi < 24.9) {
        status = 'Normal weight';
    } else if (bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }

    document.getElementById('your_name').innerText = name;
    document.getElementById('bmiResult').innerText = bmi.toFixed(2);
    document.getElementById('bmiStatus').innerText = status;
}
