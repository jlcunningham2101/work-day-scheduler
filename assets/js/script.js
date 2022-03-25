var task = "";
var taskBar = $(".taskBar");
var saveButtonEl = $("saveBtn");

var datetime = null,
  date = null;

var update = function () {
  date = moment(new Date());
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  dueTime();
};

$(document).ready(function () {
  datetime = $("#currentDay");
  update();
  setInterval(update, 1000);
});

saveButtonEl.click(function (event) {
  event.preventDefault();
  console.log($(this).siblings("textarea").val());
  console.log($(this).attr("id"));
  localStorage.setItem($(this).attr("id"), $(this).siblings("textarea").val());
});
