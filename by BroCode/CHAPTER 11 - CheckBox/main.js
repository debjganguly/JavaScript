const checkbox = document.getElementById("checkbox");
const visa = document.getElementById("visabtn");
const masterCard = document.getElementById("mastercardbtn");
const payPal = document.getElementById("paypalbtn");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const result = document.getElementById("result");

submit.onclick = function () {
    if(checkbox.checked) {
        subresult.textContent = "You have successfully subscribed to our newsletter!";
    } else {
        subresult.textContent = "You have not subscribed to our newsletter.";
    }
    if(visa.checked) {
        result.textContent = "You have selected Visa.";
    } else if(masterCard.checked) {
        result.textContent = "You have selected MasterCard.";
    } else if(payPal.checked) {
        result.textContent = "You have selected PayPal.";
    } else {
        result.textContent = "You have not selected any payment method.";
    }
}