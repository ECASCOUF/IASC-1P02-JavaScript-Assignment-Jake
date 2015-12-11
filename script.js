//This is for the Number Calculator
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;
document.write(today);

function runClear() {
  document.frm.result.value ="";
  }
  function run1() {
  document.frm.result.value +="1";
  }
  function run2() {
  document.frm.result.value +="2";
  }
  function run3() {
  document.frm.result.value +="3";
  }
  function run4() {
  document.frm.result.value +="4";
  }
  function run5() {
  document.frm.result.value +="5";
  }
  function run6() {
  document.frm.result.value +="6";
  }
  function run7() {
  document.frm.result.value +="7";
  }
  function run8() {
  document.frm.result.value +="8";
  }
  function run9() {
  document.frm.result.value +="9";
  }
  function run0() {
  document.frm.result.value +="0";
  }
  function add() {
  document.frm.result.value +="+";
  }
  function subtract() {
  document.frm.result.value +="-";
  }
  function multiply() {
  document.frm.result.value +="*";
  }
  function divide() {
  document.frm.result.value +="/";
  }
  function equal() {
  var evalo = eval(document.frm.result.value)
  document.frm.result.value = evalo;
  }
//This is for the Word Calculator
function add2() {
document.frm2.choose.value ="+";
}
function subtract2() {
document.frm2.choose.value ="-";
}
function multiply2() {
document.frm2.choose.value ="*";
}
function divide2() {
document.frm2.choose.value ="/";
}


function equal2() {
  var userOne = document.getElementById('wordOne');
  if(userOne.value == "one") {var firstValue = "1"}
  else if(userOne.value == "two") {var firstValue = "2"}
  else if(userOne.value == "three") {var firstValue = "3"}
  else if(userOne.value == "four") {var firstValue = "4"}
  else if(userOne.value == "five") {var firstValue = "5"}
  else{firstValue = "0"}

  var userTwo = document.getElementById('wordTwo');
  if(userTwo.value == "one") {var secondValue = "1"}
  else if(userTwo.value == "two") {var secondValue = "2"}
  else if(userTwo.value == "three") {var secondValue = "3"}
  else if(userTwo.value == "four") {var secondValue = "4"}
  else if(userTwo.value == "five") {var secondValue = "5"}
  else{secondValue = "0"}
    document.frm2.result2.value = eval(firstValue + document.frm2.choose.value +  secondValue);
  }

  function runReset() {
  document.frm2.choose.value ="";
  document.frm2.result2.value ="";
  document.frm2.wordOne.value ="";
  document.frm2.wordTwo.value ="";
  }
