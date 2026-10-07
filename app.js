// let inputBox = document.getElementById("inputBox");
// let Btn = document.querySelectorAll("button");

// let num1 = "";
// let operator = "";
// Btn.forEach(function(btn){
//     btn.addEventListener("click",function(){
//         let value = btn.innerHTML;
//         switch(value){
//             case"AC":
//             inputBox.value = "";
//             break;

//             case"DEL":
//             inputBox.value = inputBox.value.slice(0,-1);

//             case"+":
//             case"-":
//             case"*":
//             case"/":
//             case"%":

//             num1 = Number(inputBox.value);
//             operator = value;
//             inputBox.value = "";
//             break;

//             case "=":

//         }
//     })
// })

// var num1 = prompt("Enter a 1st number")
// var num2 = prompt("Enter a 2nd number")
// var opr = prompt("Select a amoung +,-,x,/")
// switch(opr){
//     // if(opr == "+")
//     case "+":
//         var res = parseFloat(num1) + parseFloat(num2)
//         console.log(`${num1} + ${num2} = ${res}`)
//         break;
//         // if(opr == "-")
//          case "-":
//         var res = parseFloat(num1) - parseFloat(num2)
//         console.log(`${num1} - ${num2} = ${res}`)
//         break;
//         // if(opr == "x")
//            case "x":
//         var res = parseFloat(num1) * parseFloat(num2)
//         console.log(`${num1} x ${num2} = ${res}`)
//         break;
//         // if(opr == "/")
//            case "/":
//         var res = parseFloat(num1) / parseFloat(num2)
//         console.log(`${num1} / ${num2} = ${res}`)
//         break;

//           default:
//             console.error("PLease Enter a Valid Operator ")
//     }
//  const num1  = document.getElementById("num1");
//  const num2  = document.getElementById("num2");
//  const opr = document.getElementById("operator");
//  const btn = document.getElementById("calculate");
//  const result = document.getElementById("result")
//  btn.addEventListener("click",()=>{
//    let number1 = parseFloat(num1.value);
//    let number2 = parseFloat(num2.value);
//    let opr = operator.value
//    let res;
//    switch(opr){
//       case "+":
//          res = number1 + number2;
//          break;
//           case "-":
//          res = number1 - number2;
//              break;
//           case "x":
//          res = number1 * number2;
//              break;
//           case "/":
//          res = number1 / number2;
//              break;
//       default:
//          result.innerHTML = "Please select a Operator"
//          return;
//    }
//    result.innerHTML = "Result : " + res;
//  })
let string = "";
let buttons = document.querySelectorAll(".button")
Array.from(buttons).forEach((button) => {
   button.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {
         string = eval(string)
         document.querySelector('input').value = string;
      }
      else if (e.target.innerHTML == "C") {
         string = ""
         document.querySelector('input').value = string;

      }
      else {
         console.log(e.target);
         string = string + e.target.innerHTML;
         document.querySelector('input').value = string;
      }


   })
})
