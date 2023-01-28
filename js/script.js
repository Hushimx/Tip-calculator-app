let li = document.querySelectorAll("ul li");
let bill = document.getElementById("bill")
let tipamount = document.querySelector(".tipamount");
let total = document.querySelector(".total")
let numpp = document.getElementById("numpp")
let custom = document.getElementById("custom");
let reset = document.getElementById("reset");
let tippr = 0;
li.forEach(function(e){
    if(e.classList.contains("active")){
        tippr = e.getAttribute("data");
    }
    e.onclick = function(ee){
        li.forEach(function(e){
          e.classList.remove("active")  
        })
        e.classList.add("active");
        tippr = e.getAttribute("data");
        calc()


    }
})

function calc(){
    if(tippr > 0){
        let tip = ((bill.value / 100) * tippr).toFixed(2)
        tipamount.innerHTML = tip
        if(numpp.value > 1 ){
            total.innerHTML = (+bill.value / +numpp.value + +tip).toFixed(2)
        }else{
            total.innerHTML = (+bill.value + +tip).toFixed(2)

        }

    }else{
        console.log("select tip ")
    }
}

bill.addEventListener("input",calc)
numpp.addEventListener("input",calc)

custom.oninput = function(e){
e.target.parentElement.setAttribute("data",custom.value)
tippr = e.target.parentElement.getAttribute("data");
calc();

}

reset.onclick = function(e){
    tipamount.innerHTML = 0.00.toFixed(2);
    total.innerHTML = 0.00.toFixed(2);
    bill.value = "";
    bill.innerHTML = "";
    numpp.value = ""
    numpp.innerHTML = ""


}