$(document).ready(function(){

//console.log('loading...')

const checkStatusBalance = function(balance) {
  const currentBalance = $(balance).text().replace("$", "");

  console.log(parseInt(currentBalance))
  if(parseInt(currentBalance) === 0) {
    $(balance).css("background-color", "red");
  } else {
    $(balance).css("background-color", "grey");
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
  checkStatusBalance("#checking-balance");
});

$("#savings-deposit").click(function(){
  let currentBalance = $("#savings-balance").text().replace("$", "");
  const value = $("#savings-amount").val();

  currentBalance = deposit(currentBalance, value);
  $("#savings-balance").text(`$${currentBalance}`);
  checkStatusBalance("#savings-balance");
});

$("#checking-withdraw").click(function() {
  let currentBalance = $("#checking-balance").text().replace("$", "");
  const value = $("#checking-amount").val();

  currentBalance = withdraw(parseInt(currentBalance), parseInt(value));
  $("#checking-balance").text(`$${currentBalance}`);
  checkStatusBalance("#checking-balance");
});


$("#savings-withdraw").click(function() {
  let currentBalance = $("#savings-balance").text().replace("$", "");
  const value = $("#savings-amount").val();

  currentBalance = withdraw(parseInt(currentBalance), parseInt(value));
  $("#savings-balance").text(`$${currentBalance}`);
  checkStatusBalance("#savings-balance");
});





});
