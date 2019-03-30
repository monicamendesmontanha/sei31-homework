$(document).ready(function(){

console.log('loading...')

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
});


$("#checking-withdraw").click(function() {
  let currentValue = $("#checking-balance").text().replace("$", "");
  const value = $("#checking-amount").val();

  currentValue = withdraw(parseInt(currentValue), parseInt(value));
  $("#checking-balance").text(`$${currentValue}`);
});



});
