function hourTracker() {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
  var currentHour = moment().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));
  $("#hour19 .description").val(localStorage.getItem("hour19"));
}
hourTracker();
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $(".saveBtn").on("click", function () {
    console.log(this);
    var currentHour = $(this).parent().attr("id");
    console.log(currentHour);
    var currentText = $(this).siblings(".description").val();
    console.log(currentText);

    localStorage.setItem(currentHour, currentText);
  });

  function testHour() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
      var thisHourBlock = parseInt($(this).attr("id").split("hour")[1]);
      if (thisHourBlock < 5) {
        thisHourBlock += 12;
      }
      if (currentHour > thisHourBlock) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      } else if (currentHour < thisHourBlock) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      } else if (currentHour == thisHourBlock) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
    });
  }
});

testHour();
