function computeLoan(){
    var amount= parseInt(document.getElementById("amount").value);
    var rate= parseInt(document.getElementById("interest_rate").value);
    var months= parseInt(document.getElementById("months").value);
    
    var temp1= amount + parseInt((amount * rate * 0.01).toFixed(2)); // total amount to be paid
    var temp2= (temp1/months).toFixed(2); // amount divided upon months
    document.getElementById("payment").innerHTML= "Monthly payment: " + temp2;
}