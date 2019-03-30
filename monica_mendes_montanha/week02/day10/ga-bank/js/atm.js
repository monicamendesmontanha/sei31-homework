$(document).ready(function(){

console.log('loading...')

$("#checking-deposit").click(function(){
  let currentValue = $("#checking-balance").text().replace("$", "");
  //console.log(currentValue)

  const value = $("#checking-amount").val();
  currentValue = parseInt(currentValue) + parseInt(value);
  $("#checking-balance").text(`$ ${currentValue}`);
  console.log(currentValue)
});

});
