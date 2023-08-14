
let balanceDisplay = document.getElementById("balance-display");
let totalBalance = 0;


let depositDisplay = document.getElementById("deposit-display");
const depositInput = document.getElementById("deposit-Input");
let depositInitial = 0;
let totalDeposit =0;
document.getElementById("deposit-Btn").addEventListener("click",()=>{
    if(isNaN(depositInput.value)){
        alert("Please provide Number!")
        depositInput.value = "";
        return;

    }
    depositInitial= parseFloat(depositInput.value);
    totalDeposit+=depositInitial;
    totalBalance = parseFloat(balanceDisplay.innerText)+ depositInitial;
    depositDisplay.innerHTML = totalDeposit;
    balanceDisplay.innerText = totalBalance;
    depositInput.value = "";
})


let withdrawDisplay = document.getElementById("withdraw-display");
const withdrawInput = document.getElementById("withdraw-Input");
let withdrawInitial = 0;
let totalWithdraw = 0;
document.getElementById("withdraw-Btn").addEventListener("click",()=>{
    if(isNaN(withdrawInput.value)){
        alert("Please provide Number!")
        withdrawInput.value = "";
        return;

    }
    totalBalance = parseFloat(balanceDisplay.innerText)
    if(totalBalance<parseFloat(withdrawInput.value)){
        alert("you don't have such amount");
        withdrawInput.value = "";
        return;
    }

    withdrawInitial= parseFloat(withdrawInput.value);
    totalWithdraw+= withdrawInitial;
     totalBalance-= withdrawInitial;
    withdrawDisplay.innerHTML = totalWithdraw;
    balanceDisplay.innerText = totalBalance;
    withdrawInput.value = "";
    
})