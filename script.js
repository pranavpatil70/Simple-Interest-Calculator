function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = p * y * r /100;
    var amount = parseInt(p) + parseFloat(interest);
    var result = document.getElementById('result');
    if (p <= 0) {
        alert("Please enter a positive number!");
    }
    else {
        result.innerHTML = `If you deposit $<mark>${p}</mark>,<br>
        at an interest rate of <mark>${r}%</mark>,<br>
        You will receive an amount of $<mark>${amount.toFixed(2)}</mark>,<br>
        in the year <mark>${y}</mark><br>`;    }
}
        
function updateRate(){
    let rateval = document.getElementById('rate').value;
    document.getElementById("rate_val").innerText = rateval;
}