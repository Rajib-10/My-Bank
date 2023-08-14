document.getElementById("submit-btn").addEventListener("click",()=>{
    const text = document.getElementById("input-email").value;
    const pass = document.getElementById("input-password").value;
    if(text==="rajib@gmail.com" && pass==="rajib"){
        location.href = "bank.html";
    }else{
        alert("Invalid user");
    }
})




