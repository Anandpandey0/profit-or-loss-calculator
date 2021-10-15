var initialPrice = document.querySelector("#initial-Price");
var quantityStocks = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-Price");
var clickBtn = document.querySelector("#btn");
var outputBox = document.getElementById("#output");


clickBtn.addEventListener("click", calculateprofitorloss);

function calculateprofitorloss(initialprice, quantitystocks, currentprice) {
    var initialprice = Number(initialPrice.value);
    var quantitystocks = Number(quantityStocks.value);
    var currentprice = Number(currentPrice.value);
    // console.log(initialprice);
    // console.log(quantitystocks);
    // console.log(currentprice);
    if(initialprice > 0 && currentprice > 0){
        if(initialprice > currentprice){
            var loss = (initialprice - currentprice) * quantitystocks;
            var losspercentage = (loss / initialprice) * 100
            document.getElementById("output").innerHTML = "You are facing a loss of " + loss ; 
            document.getElementById("output1").innerHTML = "Loss Percentage - " +  losspercentage + "%"; 
            // console.log("Loss will be there " + loss);
        }
        else if(initialprice < currentprice){
            var profit = (currentprice - initialprice) * quantitystocks;
            var profitpercentage = (profit / initialprice) * 100
            document.getElementById("output").innerHTML = "You are facing a profit of " + profit; 
            document.getElementById("output1").innerHTML = "Profit Percentage -" + profitpercentage  + "%"; 
            // console.log("Profit will be there " + profit);
        }
        else{
        //    console.log("NO loss no profit");
        document.getElementById("output").innerHTML = "NO profit NO loss"; 
        }
    }
    else{
        document.getElementById("output").innerHTML = "Enter valid inputs"
    }
    
}
