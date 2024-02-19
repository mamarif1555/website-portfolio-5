// function hndleSelect(){
//   console.log("Start...")
// }


const allBtn = document.getElementsByClassName("add-btn");


let count = 0;

for(const btn of allBtn){
  btn.addEventListener("click", function (e){
    count = count + 1;
    setInerText("set-count",count)
  })
}

function setInerText(id, value) {
  document.getElementById(id).innerText = value;
}