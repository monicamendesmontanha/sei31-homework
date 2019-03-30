$(document).ready(function(){

console.log('loading...')

$("#checking-deposit").click(function(){
  let currentValue = $("#checking-balance").text().replace("$", "");

  const value = $("#checking-amount").val();
  currentValue = parseInt(currentValue) + parseInt(value);
  $("#checking-balance").text(`$ ${currentValue}`);
});


$("#checking-withdraw").click(function() {
  let currentValue = $("#checking-balance").text().replace("$", "");

  const value = $("#checking-amount").val();
  currentValue = parseInt(currentValue) - parseInt(value);
  $("#checking-balance").text(`$ ${currentValue}`);
  console.log(currentValue);

});



});
