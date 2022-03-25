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
