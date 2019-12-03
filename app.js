document.getElementById("submit").addEventListener("click", calculator)
let i = 0;
let a = 0;
let p = 0;
function calculator(e) {
    e.preventDefault();
    let i = document.getElementById("interest_rate").value
    let a = document.getElementById("amount").value
    let p = document.getElementById("period").value
    let answer;
    if (i > 1) {
        i /= 100;
    };
    answer = a / ((1 + i) ** p);
    console.log(answer)
    document.getElementById("answer").value = parseFloat(answer).toFixed(2);
    ;
}