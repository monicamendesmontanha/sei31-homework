$(document).ready(function() {
  //console.log('loading...')

  const checkStatusBalance = function(balance) {
    const currentBalance = $(balance)
      .text()
      .replace("$", "");

    if (parseInt(currentBalance) === 0) {
      $(balance).css("background-color", "red");
    } else {
      $(balance).css("background-color", "grey");
    }
  };

  $("#checking-deposit").click(function() {
    let currentBalance = $("#checking-balance")
      .text()
      .replace("$", "");
    const value = $("#checking-amount").val();

    currentBalance = parseInt(currentBalance) + parseInt(value);

    $("#checking-balance").text(`$${currentBalance}`);
    checkStatusBalance("#checking-balance");
  });

  $("#savings-deposit").click(function() {
    let currentBalance = $("#savings-balance")
      .text()
      .replace("$", "");
    const value = $("#savings-amount").val();

    currentBalance = parseInt(currentBalance) + parseInt(value);

    $("#savings-balance").text(`$${currentBalance}`);
    checkStatusBalance("#savings-balance");
  });

  $("#checking-withdraw").click(function() {
    let currentCheckingBalance = parseInt(
      $("#checking-balance")
        .text()
        .replace("$", "")
    );
    let currentSavingsBalance = parseInt(
      $("#savings-balance")
        .text()
        .replace("$", "")
    );

    const withdrawValue = parseInt($("#checking-amount").val());

    if (withdrawValue <= currentCheckingBalance) {
      currentCheckingBalance = currentCheckingBalance - withdrawValue;
    } else {
      if (withdrawValue <= currentCheckingBalance + currentSavingsBalance) {
        let remaining = withdrawValue;
        remaining = currentCheckingBalance - withdrawValue;
        currentCheckingBalance = 0;
        currentSavingsBalance = currentCheckingBalance + currentSavingsBalance - (remaining*-1);
      }
    }

    $("#checking-balance").text(`$${currentCheckingBalance}`);
    $("#savings-balance").text(`$${currentSavingsBalance}`);
    checkStatusBalance("#checking-balance");
    checkStatusBalance("#savings-balance");
  });

  $("#savings-withdraw").click(function() {
    let currentBalance = parseInt(
      $("#savings-balance")
        .text()
        .replace("$", "")
    );
    const value = parseInt($("#savings-amount").val());

    if (value <= currentBalance) {
      currentBalance = currentBalance - value;
    }

    $("#savings-balance").text(`$${currentBalance}`);
    checkStatusBalance("#savings-balance");
  });
});
