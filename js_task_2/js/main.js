//Conditional branching: if, '?'
//task 1

if ("0") {
    alert( 'Hello' );
  }
//It will be showen cause "0" => true 

//task 2

let number = prompt('Type a number');
if (number > 0) {
    number = 1;
} else if (number == 0) {
    number =0;
} else if (number < 0) {
    number = -1;
} else {
    number = 'Not A Number'
}
alert(number);

//task 3

/*let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/

  let result = (a + b < 4) ? 'Below' : 'Over';

//task 4 

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login':
    '';



//task 5 
//Check the range between
//Write an “if” condition to check that age is between 14 and 90 inclusively.

let age = prompt('Enter your age');
let message2;
if (age >= 14 && age <= 90) {
    message2 = 'Accepted age';
}
alert(message2);

//task 6
 //Check the range outside
 let age = prompt('Enter your age'),
    message3;
if (age <= 14 || age >= 90) {
    message3 = 'Not Accepted age';
}
alert(message3);

//task 7 
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
//output will be  first then second

//task 8

let password,
    position = prompt('enter your role');

if (position == 'Admin') {
    password = prompt('Enter your password');
    switch(password) {
        case 'TheMaster': alert('Welcome');break;
        case '': alert('canceled');break;
        case 'Esc': alert('canceled');break;
        default :alert('I don’t know you');break;
    }
} else if (position == '' || 'Esc') {
    alert('Canceled');
} else {
    alert('I dont know you');
}

//task 9

/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
 */

 if (browser == 'Edge') {
    alert( "You've got the Edge!" );
 } else if (browser == 'Chrome' || browser == 'Chrome' || browser == 'Firefox' ||  browser == 'Safari' || browser == 'Opera' ) {
    alert( 'Okay we support these browsers too' );
 } else {
    alert( 'We hope that this page looks ok!' );
 }

 //task 10

 /* 
 let a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
}
 */

let a = +prompt('a?', '');
switch(a){
    case 0 : alert( 0 );break;
    case 1 : alert( 1 );break;
    case 2 : 
    case 3 : alert( '2,3' );break;
}