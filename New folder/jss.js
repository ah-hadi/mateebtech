// let a = "sas";
// let arr2 = [6,7,8,9,10];

//  arr2 = a ;
// //  arr2.push(5);
// console.log(a)
// console.log(typeof arr2)

// //-------------------------------
// let a = [1, 2, 3, 4, 5, 6];
// let b = [...a];
// a.push(9);
// console.log(a);
// console.log(b);
// // -----------------------------

// let a = ["asad"];
// let b = ["toueer"];

// b = a;
// //a++;
// a.push("ali");
// //console.log(a);
// console.log(b);

// let undef = undefined;

// let a=[1,2,3,4,5];
// let b=a;
// b="jhhgsadjsag";
// console.log(b)
// console.log(a)
// const name="hadi";
// function myfunct(love) {

//      if(love){
//           const name="hadi";
//           console.log(name)
//      }
//      console.log(name)
// }
// myfunct(true)

// let whowillwin = "pakistan";

// if(true){
//      let whowillwin = "india";

//      console.log(whowillwin)
// }

// console.log(whowillwin)
// var name = "hadi";
// if(true) {
//     var name1 ="butt";
//      console.log(name1);
// }
// // myfun()
// console.log(name1);

// function fun1(b,c){
//     let a = 10;
//      function fun2(){
//         let sum = a+b+c;
//         console.log(`the sum of two nuber is. ${sum}.`);
//     }
//     fun2()
// }
// fun1(10,5)
// const newfun = fun1(10,5)
// newfun();
// console.log(fun1((10,12)))

//

//  let name = "123";
//   name ="456"
//  console.log(name)
// var a = 10;

// function f1() {
//      function n() {
//         console.log(a);
//     }
//     const a = 20;
//     n();
// }
// f1();//var f2 = f1();
// //f2(5);
// console.log(a);

// var a = 1;

// function f1() {
//     var b = 2;
//     function f2() { console.log(a, b); }

//     return f2;
// }

// var f2 = f1();
// // var b = 3;

// function f3() {
//     a = 5;
//     f2();
// }

// f3();

// var a = 10;

// function f1() {
//     return function(a) {
//         console.log(a);
//     }
//     var a = 20;
// }

// var f2 = f1();
// f2(5);

// var x = 10;

// (function() {
//     function f() { console.log(x); }

//     function g() {
//         var x = 20;
//         f();
//     }

//     g();
// });

// let a=data();
// function data(){
//    var a=3;

//     function data2(){
//         a=2;
//         function data3(){
//             a=1;
//             sum=a+a+a;

//         }
//         data3();
//     }
//     data2();
// }
// let a=data();
// console.log(a);

// const arr1=["hadi","asad","ali"];
// const arr2=["abdul","waleed","hamid"];
// const arr21=["ab","bc","cd"];
// arr2.push("farhan")
// const arr3=arr2.toString(arr2,arr21);
// console.log(arr3)

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sum = arr.copyWithin(0,2)
// // function function2(a){
// //   return a>5;
// // }
// console.log(sum)

// const arr=[1,2,3,4,5];
// const arr2=arr.slice(2,4)
// console.log(arr2)

// const arr= [2,3,4,5,6,7,8,9,10];
// result = arr.map(fun)
// function fun(a){
// return a*a;

// }
// console.log(result)

// /----------------/access array name
// const arr=[{"name":"hadi","gender":"male"},
// {"name":"ali","gender":""},
// {"name":""}
// ];
// result = arr.map(fun)
// function fun(x){
// return x.gender;
// }
// console.log(result)

// const arr = [2,3,4];
//  arr.map(fun)
// function fun(num,i){

//     for(i=1; i<=10; i++){
//         // console.log(num+i)
//       console.log(num +  "+"  + i + "=", num-i)
//     }
// }

// const arr= [5,2,1,3,0];
// arr.sort()
// console.log(arr)

// const arr= [5,2,1,3,0];
// arr.map((sort))
// function sort(i,j,min,temp){
//     for(i=0;i<arr.length;i++){
//        min=i;
//        for(j=i+1;j<arr.length;j++){
//            if(arr[j]<arr[i]){
//                min=j;
//                temp=arr[i];
//                arr[i]=arr[min];
//                arr[min]=temp;

//            }
//        }
//     }
// }

// var array =[1,2,3];
// let a11= array.map(func);
// function func(x){
//     x= x+5;
// }
// console.log(a11);

// var array =[1,2,3];
// let a11= array.map(func);
// function func(x){
//     console.log(x)
//    x= x+1;
// }
// console.log(a11);

// var array =[1,2,3];
// let a11= array.map(func);
// function func(x){
//     console.log('x1',x)
//    return x= x+5;}

// let num = [2,3,4,5]
// let num2 = [1,2,3,4,5,6,7,8,9]
// let a= num.map((tab)=>
//    num2.map((x)=>tab + "*" + x + "=" + x*tab)
//  )
// console.log(a)

// let num = [2,3,4,5]
// let num2 = [1,2,3,4,5,6,7,8,9]
// let a = num.map((num1)=>
// num2.map((digit)=>num1 + "*" + digit + "=" +num1*digit)  )
// console.log(a)

// let matrix = [
//     [2,1],
//     [6,5]
// ]
// var equalto = [
//     [3],
//     [1]
// ]
// let result= matrix.map(det)
// function det(){
//      let = matrix;
// }

// let adj = [a5[0][0]/Adet,a5[0][1]/Adet,
// a5[1][0]/Adet,a5[1][1]/Adet
// ]
// console.log(adj)

// console.log(A[0]);
// let Adet = A.map(matrixdet)
// function matrixdet(a){
//     // a =(A[0][0]) * (A[1][1]) - (A[1][0]) * (A[0][1]);
//     return a;
// }
// console.log(Adet)

// 2x+y=3
// 6x+5y=1

// var a1 = [2, 3];
// var a2 = [3, 5];
// var a3 = [7, 9];
// var A = [[2, 3],[3, 5]];
// var Ax = [
//   [7, 3],
//   [9,5],
// ];
// var Ay = [
//   [2, 7],
//   [3, 9],
// ];
// let Adet = (A[0][0] * A[1][1]) - (A[1][0] * A[0][1]);
// console.log("determinent of A",Adet);

// let Axdet = (Ax[0][0] * Ax[1][1]) - (Ax[1][0] * Ax[0][1]);
// console.log("determinent of Ax",Axdet);

// let Aydet = (Ay[0][0] * Ay[1][1]) - (Ay[1][0] * Ay[0][1]);
// console.log("determinent of Ay",Aydet);

// let x = Axdet/Adet;
// console.log("the value of x is: ",x)

// let y = Aydet/Adet;
// console.log("the value of y is: ",y)

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

//cramer

