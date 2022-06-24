
// function hello() {
//   var eq1 = document.getElementById("input1").value;
//   let eq2 = document.getElementById("input2").value;

//   let num1 = eq1[0];
//   let num2 = eq1[1];
//   var num3 = eq1[2] + eq1[3];
//   let num4 = eq1[4];
//   let num5 = eq1[5];
//   let num6 = eq1[6];
//   let num7 = eq2[0];
//   let num8 = eq2[1];
//   var num9 = eq2[2] + eq2[3];
//   let num10 = eq2[4];
//   let num11 = eq2[5];
//   let num12 = eq2[6];
//   var a1 = [num1, num3];
//   var a2 = [num7, num9];
//   var a3 = [num6, num12];
//   var a4 = [
//     [a1[0], a1[1]],
//     [a2[0], a2[1]],
//   ];
//   var a5 = [
//     [a2[1], -a1[1]],
//     [-a2[0], a1[0]],
//   ];

//   let Adet = a4[0][0] * a4[1][1] - a4[1][0] * a4[0][1];
//   console.log("determinent of A", Adet);
//   if(Adet==0){
//     alert("det is not possible")
//   }
//   else{
//     let inv = [
//         a5[0][0] * a3[0] + a5[0][1] * a3[1],
//         a5[1][0] * a3[0] + a5[1][1] * a3[1],
//       ];

//       let f1 = [inv[0] / Adet, inv[1] / Adet];
//       console.log("the value of x = " + f1[0]);
//       console.log("the value of y = " + f1[1]);
//   }

// }



