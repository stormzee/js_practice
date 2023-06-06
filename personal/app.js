// // // console.log("Hello world js")


// // function say_Hello(name){
// //     console.log("Hello "+ name);
// // }

// // say_Hello('sammy');

// // function printnumsTO(numbers){
// //     for(let i = 0; i<=numbers; i++){
// //         console.log(i);
// //     };
// // };


// // printnumsTO(10);

///function/block scope
// let msg = "Hello";

// if(msg === "Hello"){
    
//     var msg1 = "That's it";
// };

// console.log(msg1)


///closures
//used to prevent a var from geting out of scope
//
// let greeting = (function(){
//     let msg = 'Hello';
//     let getmsg = function(){
//         return msg;
//     };
//     return {
//         getmsg : getmsg,
//     };
// })();

// console.log(greeting.getmsg());



// function setupCounter(val){
//     return function counter(){
//         return val++;
//     };
// };


// let counter1 =  setupCounter(0);
// console.log(counter1());
// console.log(counter1());
// // console.log(setupCounter(20));
// let counter2 = setupCounter(20);
// console.log(counter2());
// console.log(counter2())



//Arrow Functions also known as lambda functions in python

// let add_two = (a, b) => {
//     return a+b;
// };
// console.log(add_two(20,10));

// let multipy_two = (num1, num2) => num1 * num2;

// let product_of = multipy_two(10,6);
// console.log(product_of);



//function prototypes..

// let greetings = {};
// greetings.say_hi = function (){
//     console.log('HI');
//     console.log(this);
// }

// greetings.say_hi();

// sam_greet = new greetings.say_hi();

// function print(name_it, word_it="programmer"){
//     console.log(name_it+' '+word_it)
// };
// print('sammy');


function Hello(){
    alert("My first js alert")
};

function sum_nums(n){
    var res = 0;
    for (let i=0;i<=n;i++){
        res +=i;
    };

    if (res>1000){
        alert(`This sum exceeds that of two numbers ${res}`);
    };
    return alert(res);
};


function countdown() {
    var count = 10;
    var countdownEl = document.getElementById("countdown");
    var enrol_link = document.getElementById("enrol");
  
    var countdownInterval = setInterval(function() {
      count--;
      countdownEl.textContent = count;
  
      if (count === 0) {
        clearInterval(countdownInterval);
        countdownEl.textContent = 'click below';
        enrol_link.style.display = 'block';
        // window.location.href = enrol_link.href
      }
    }, 1000);
  }
  
    