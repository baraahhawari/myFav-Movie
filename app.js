// // i am consoling my name
// // console.log('hello baraah');
// // console.log('hello bashar');

// // single line of comment

// /* 
// multiple lines of comments
// */

// /*
// Datatype:
// 1. Strings 
//   - ==> text inside ' ' or " "
//   - what I write what I see

// 2. Numbers 
//   - integers
//   - folat .... etc

// 3. Boolean
//   - True 
//   - False
// */

// // string 
// console.log('my name is Riziq');
// console.log('Hello Heros 102d29 +*^$% 1224 عربي');

// // Numbers
// console.log(1);
// console.log(1+3+8);

// // Boolean
// console.log(true);
// console.log(false);


// /*
// Operators

// 1. Arithmatic Operators:
//   + (add)  
//   - (substract)   
//   *(multiply)  
//   /(devide)  
//   % (mode, reminder)  
//   ** (power to)

// Variable:
// var in js is used to store values
// var theName='Sanaa';
// */

// // addition
// console.log('adding',1+2+6+100);
// // substract
// console.log('substract',499-9-44);
// // multiply
// console.log(6*8);
// // devide
// console.log(500/10);
// // mode
// console.log(8%2);
// console.log(5%2);

// // power
// console.log(2**100);
// // concatination ==> I will use it to add 2 strings together , add space btw the words
// console.log('hello' +' '+ 'Ibrahim');
// // , in the console to add strings with space

// // Variable
// var theName='Sultan';
// console.log(theName);
// // rule to name the var [start only with letters, underscore and $]
// var $sultanIdea='hello underscore';
// console.log( $sultanIdea);


// /*
// 1. Asignment Operators:
// = ==> assign the value to var
// += ==> 
// -= ==> 

// 2. Comparison Operators [True or False]
// == (the value)
// === (the value and the Datatype)
// <
// >
// <=
// >=
// !=
// !==
// */ 

// // =
// var $sultanIdea='hello underscore';

// // +=
// var theNumber=3;
// // console.log(theNumber+=theNumber);
// console.log(theNumber=theNumber + theNumber); //6

// // the value comparing 
// console.log(34 == '34'); //true

// // the value and Datatype
// console.log(3 === '3'); // false
// console.log(3 === 3); // true

// // !=
// console.log(3 != '3'); //false
// console.log(3 !== '3'); //true


/*
If statment:
if(condition){
  the if block code
}

*/

// if 

// if(8 == '8'){
//   console.log('the if block excuted');
//   console.log('correct');
// }

// if else  
// if(8 === '8'){
//   console.log('the if block excuted');
//   console.log('correct');
// } else {
//   console.log('the else block excuted');
//   console.log('not correct');
// }

// var numOne=12;
// if (numOne ===1){
//   console.log('the number is ', 1);
// }else{
//   console.log('the number is not', 1, 'it is ', numOne);
// }

// // alert 
// alert('Hello Alert');

// // prompt
// var userName = prompt('please enter your name');
// console.log(userName);

// prompt, alert and if statment

// var userAge=prompt('please enter your Age');

// if(userAge >= 18){
//   alert('you can see my website');
// }else{
//   alert('sorry you are under age');
//   alert('please come back when you are 18');
// }

// this will write the msg in the html, not in the console
// document.write('hello I am from javascript file, you will see me in the html');

// document.write('<h3>'+' h3 from js file '+'</h3>');


// if prompt document.write

var timeNow= prompt('please enter the time now');

if(timeNow >= 18){
  document.write('Good Evening');
  document.write('<img src="https://i.pinimg.com/originals/6c/04/c6/6c04c6b013470efcb9474cf8e8f0456e.jpg">');
}else if(timeNow >= 12){
  document.write('Good Afternoon');
  document.write('<img src="https://i.pinimg.com/originals/4e/86/86/4e8686f7ef038e941f81bc7504e6ab66.png">')
}else if (timeNow >= 0){
  document.write('Good Morning');
  document.write('<img src="https://miro.medium.com/max/1600/1*oqFofdQ4wai3BkHAY6M-Rw.jpeg">')

}