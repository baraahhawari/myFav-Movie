// recap
// var age = prompt('Hello to my webpage, please Enter your Age!');
// // range of ages that can see the movie [18 && 26]
// if(age >= 18 && age <= 26){
//   document.write('you can see the webpage, welcome');
// }else if(age < 18 || age > 26){
//   document.write('you Cannot see my webpage, so sorry');
// }else{
//   alert('please enter your age as a number');
// }


/*
TO Do List:
- Ask the user about fav char at the minions movie
- add an image of that char based on the use input
- validator ==> keep asking the user if he choose char [Kevin, Bob]
- Ask the user how many image he/she want to see on the webpage
*/
 
var minionsName = prompt('Hello, please enter your fav char name from minions movie!');

// validator 
// i will use the and
while(minionsName !== 'bob'&& minionsName !== 'kevin'){
  minionsName = prompt('Please enter the name bob or kevin');
}

// var will save the image that the user choose
var userChoose;

if(minionsName === 'bob'){
userChoose='<img src="https://images-na.ssl-images-amazon.com/images/I/714MGKAJUxL._AC_SX466_.jpg">';
}else if (minionsName === 'kevin'){
  userChoose='<img src="https://i.pinimg.com/originals/ea/4d/b9/ea4db91c8c784aefc9d40e2bede8fa15.jpg">';
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}