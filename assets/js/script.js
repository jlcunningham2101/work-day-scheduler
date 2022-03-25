function hourlyTasks() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    
    $(".saveBtn").on("click", function () {
        var userTask = $(this).siblings(".task").val();
        var timeslots = $(this).parent().attr("id");
        localStorage.setItem(userTask, timeslots);
        var presentHour = moment().hour();
    
        $(".hour").each(function () {
            var chosenHour = parseInt($(this).attr("id").split("hour")[1]);
    
            if (chosenHour < presentHour) {
                $(this).removeClass("present");
                $(this).addClass("past");
                $(this).removeClass("future");
            }
            else if (chosenHour === presentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })