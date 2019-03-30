$(document).ready(function(){

console.log('loading...')

const checkStatusBalance = function() {
  const currentBalance = $("#checking-balance").text().replace("$", "");

  if(parseInt(currentBalance) === 0) {
    $("#checking-balance").css("background-color", "red");
  } else {
    $("#checking-balance").css("background-color", "grey");
  }
};

const deposit = function(currentBalance, value) {
  return parseInt(currentBalance) + parseInt(value);
};

const withdraw = function(currentBalance, value) {
  if(value > currentBalance) {
    return currentBalance;
  } else {
    return currentBalance - value;
  }
};

$("#checking-deposit").click(function(){
  let currentBalance = $("#checking-balance").text().replace("$", "");
  const value = $("#checking-amount").val();

  currentBalance = deposit(currentBalance, value);
  $("#checking-balance").text(`$${currentBalance}`);
  checkStatusBalance();
});


$("#checking-withdraw").click(function() {
  let currentBalance = $("#checking-balance").text().replace("$", "");
  const value = $("#checking-amount").val();

  currentBalance = withdraw(parseInt(currentBalance), parseInt(value));
  $("#checking-balance").text(`$${currentBalance}`);
  checkStatusBalance();
});


});
