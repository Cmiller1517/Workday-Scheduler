// --- dayJS ---///
var today = dayjs();
$("#currentDay").text(today.format('MMM D, YYYY'));

// --- Saves the time block and tasks inputs ---  //
$(".saveBtn").onclick(function() {
let hour = $(this).parent().attr("id");
let task = $(this).siblings(".description").val();
localStorage.setItem(hour,hourlyTask);

});

// -- Checks the scheduler time vs real time to track the styling in the hour blocks ---//
function logTime() {   
    $(".time-block").each(function(){
        var currentTime = parseInt($(this).attr("id").split("hour-")[1]);
  
        if (currentTime === dayjs().hour()){
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future");      
        }
        if (currentTime < dayjs().hour()){
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");      
        }
        if (currentTime > dayjs().hour()){
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
        }
      }
    }

// ---- LOGS TASKS TO LOCAL STORAGE---//
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));