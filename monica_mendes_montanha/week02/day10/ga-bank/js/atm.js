$(document).ready(function(){

console.log('loading...')

const checkStatusBalance = function() {
  const currentValue = $("#checking-balance").text().replace("$", "");

  if(parseInt(currentValue) === 0) {
    $("#checking-balance").css("background-color", "red");
  } else {
    $("#checking-balance").css("background-color", "grey");
  }
};

const deposit = function(currentValue, value) {
  return parseInt(currentValue) + parseInt(value);
};

const withdraw = function(currentValue, value) {
  if(value > currentValue) {
    return currentValue;
  } else {
    return currentValue - value;
  }
};

$("#checking-deposit").click(function(){
  let currentValue = $("#checking-balance").text().replace("$", "");
  const value = $("#checking-amount").val();

  currentValue = deposit(currentValue, value);
  $("#checking-balance").text(`$${currentValue}`);
  checkStatusBalance();
});


$("#checking-withdraw").click(function() {
  let currentValue = $("#checking-balance").text().replace("$", "");
  const value = $("#checking-amount").val();

  currentValue = withdraw(parseInt(currentValue), parseInt(value));
  $("#checking-balance").text(`$${currentValue}`);
  checkStatusBalance();
});


});
