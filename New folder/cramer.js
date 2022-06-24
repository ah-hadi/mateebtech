function hello() {
  var eq1 = document.getElementById("input1").value;
  let eq2 = document.getElementById("input2").value;
  let num1 = eq1[0];

  var num3 = eq1[2] + eq1[3];

  let num6 = eq1[6];
  console.log(num6);
  let num7 = eq2[0];

  var num9 = eq2[2] + eq2[3];

  let num12 = eq2[6];

  //   var a1 = [num1, num3];
  //   var a2 = [num7, num9];
  //   var a3 = [num6, num12];
  var A = [
    [num1, num3],
    [num7, num9],
  ];
  var Ax = [
    [num6, num3],
    [num12, num9],
  ];
  var Ay = [
    [num1, num6],
    [num7, num12],
  ];
  let Adet = A[0][0] * A[1][1] - A[1][0] * A[0][1];
  console.log("determinent of A", Adet);

  if (Adet == 0) {
    alert("det is not possible");
  } else {
    let Axdet = Ax[0][0] * Ax[1][1] - Ax[1][0] * Ax[0][1];
    // console.log("determinent of Ax", Axdet);

    let Aydet = Ay[0][0] * Ay[1][1] - Ay[1][0] * Ay[0][1];
    // console.log("determinent of Ay", Aydet);

    let x = Axdet / Adet;
    console.log("the value of x is: ", x);

    let y = Aydet / Adet;
    console.log("the value of y is: ", y);
  }
}
console.log("this part is for cramer rule");
