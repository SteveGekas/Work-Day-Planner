
$(document).ready(function () {
  //gets the date for now (whenever you open the app)
  var toDayDate = moment().format("dddd, MMMM Do YYYY");
  //console.log(toDayDate);
  $("#currentDay").append(toDayDate);

  var nowHour = moment().format("hh A");
  //console.log(hour);

  //set variables in array
  var workDay = {
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": ""
  }


  $("#b9").click(function () {
    var text = $(".9").val();
    workDay[9] = text;;
    localStorage.setItem(9, JSON.stringify(text));
    //console.log(text)
  });

  $("#b10").click(function () {
    var text = $(".10").val();

    workDay[10] = text
    localStorage.setItem(10, JSON.stringify(text));
    //console.log(text)
  });

  $("#b11").click(function () {
    var text = $(".11").val();

    workDay[11] = text
    localStorage.setItem(11, JSON.stringify(text));
    //console.log(text)
  });

  $("#b12").click(function () {
    var text = $(".12").val();

    workDay[12] = text
    localStorage.setItem(12, JSON.stringify(text));
    //console.log(text)
  });

  $("#b1").click(function () {
    var text = $(".1").val();

    workDay[1] = text
    localStorage.setItem(1, JSON.stringify(text));
    //console.log(text)
  });

  $("#b2").click(function () {
    var text = $(".2").val();

    workDay[2] = text
    localStorage.setItem(2, JSON.stringify(text));
    //console.log(text)
  });

  $("#b3").click(function () {
    var text = $(".3").val();

    workDay[3] = text
    localStorage.setItem(3, JSON.stringify(text));
    //console.log(text)
  });

  $("#b4").click(function () {
    var text = $(".4").val();

    workDay[4] = text
    localStorage.setItem(4, JSON.stringify(text));
    //console.log(text)
  });

  $("#b5").click(function () {
    var text = $(".5").val();

    workDay[5] = text
    localStorage.setItem(5, JSON.stringify(text));
    //console.log(text)
  });

  var recallText = JSON.parse(window.localStorage.getItem(9))
    $('.9').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(10))
    $('.10').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(11))
    $('.11').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(12))
    $('.12').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(1))
    $('.1').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(2))
    $('.2').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(3))
    $('.3').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(4))
    $('.4').val(recallText);

    var recallText = JSON.parse(window.localStorage.getItem(5))
    $('.5').val(recallText);


localStorage.clear();

  for (i = 9; i < 18; i++) {
    var checkTime = "nowHour" + i
    //console.log(checkTime)

    $(checkTime).css("background-color", "grey")
  }
  //for loop for future hours
  for (i = 9; i < 18; i++) {
    var checkTime = "#time" + i
    //console.log(checkTime)
    if (i > nowHour) {
      $(checkTime).css("background-color", "green")
    }
  }
  //if statement for past hours
  if ("#showTime" === nowHour) {
    $("#time").css("background-color", "red");
  }





})



