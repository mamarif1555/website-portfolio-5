function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


// const cards = document.querySelectorAll('.cat');
// // console.log(cards)
// for(let i = 0; i < cards.length; i++) {

//     const card = cards [i];
//     // console.log(element)
//     card.addEventListener("click",function(){
//         // console.log("fffffffff")

//         const title = card.querySelector("button")
//         console.log(title)
//     })

// }

// //    console.log(title) 
//     const title = wow.querySelector("button")
//     console.log(title)
//     })

let = totalOffer = 0;
let = totalOffer2 = "Couple 20";

const allBonus = document.getElementById("bonus")

allBonus.addEventListener("click",function(){
    

    const couponElement = document.getElementById("bonus-input").value
    const coponCode = document.getElementById("Coupon2").value
    
    if(totalOffer >= 2200){
      if(coponCode === "Couple 20"){

      }else{
        alert("Invalid Coupon Number !")
      }
    }else{
        alert("Please give valid coupon no !")
    }
})
