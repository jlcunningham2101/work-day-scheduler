function hourlyTasks() {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $(".saveBtn").on("click", function () {
    var userTask = $(this).siblings(".task").val();
    var timeslots = $(this).parent().attr("id");
    localStorage.setItem(userTask, timeslots);
  });
  var presentHour = moment().hour();

  $(".hour").each(function () {
    var chosenHour = parseInt($(this).attr("id").split("hour")[1]);

    if (chosenHour < presentHour) {
      $(this).removeClass("present");
      $(this).addClass("past");
      $(this).removeClass("future");
    } else if (chosenHour === presentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  $("#clock-8 .task").val(localStorage.getItem("8AM"));
  $("#clock-9 .task").val(localStorage.getItem("9AM"));
  $("#clock-10 .task").val(localStorage.getItem("10AM"));
  $("#clock-11 .task").val(localStorage.getItem("11AM"));
  $("#clock-12 .task").val(localStorage.getItem("12PM"));
  $("#clock-13 .task").val(localStorage.getItem("1PM"));
  $("#clock-14 .task").val(localStorage.getItem("2PM"));
  $("#clock-15 .task").val(localStorage.getItem("3PM"));
  $("#clock-16 .task").val(localStorage.getItem("4PM"));
  $("#clock-17 .task").val(localStorage.getItem("5PM"));
}

hourlyTasks();
