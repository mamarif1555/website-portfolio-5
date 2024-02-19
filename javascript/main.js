
const allBtn = document.getElementsByClassName("add-btn");


let count = 0;

for(const btn of allBtn){
  btn.addEventListener("click", function (e){
    count = count + 1;
    const placeName = e.target.parentNode.childNodes[3].innerText;
    const setPrice = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[5].childNodes[1].childNodes[3].innerText;
  const setContainer = document.getElementById("set-count-container");







     const seatSection = document.getElementById("tickets-section")
     console.log("First")







  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h2.innerText = placeName;
  const h3 = document.createElement("h2");
  h3.innerText = setPrice;

  e.target.parentNode.childNodes[3].style.backgroundColor = "green"
 

  h1.appendChild(h2);
  h1.appendChild(h3);

const sets = document.getElementById("set-avalable").innerText
const numberConvarted = parseInt(sets)
if(numberConvarted - 1 < 0){
  alert("seat is not available")
  return;
}

document.getElementById("set-avalable").innerText = numberConvarted - 1;
  setContainer.appendChild(h1);
  totalSetCostPrice("set-price",parseInt(setPrice));
  grandTotalSetPrice("set-all-price",parseInt(setPrice));

  setInerText("set-count",count)
  })
}

function totalSetCostPrice(id,value){
  const totalSetCost =document.getElementById(id).innerText
  const stringToNumberConverted = parseInt(totalSetCost)
  const sum = stringToNumberConverted + parseInt(value);
  setInerText("set-price",sum)
}

function grandTotalSetPrice(category){
  const totalSetCost =document.getElementById("set-price").innerText
  const stringToNumberConverted = parseInt(totalSetCost)
  
          

}


function setInerText(id, value) {
  document.getElementById(id).innerText = value;
}