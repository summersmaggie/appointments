$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = "<p>Name: " + $("input#name").val() + "</p>";
    var description = "<p>Description: " + $("input#description").val() + "</p>";
    var date = "<p>Date: " + $("input#date").val() + "</p>";
    var starttime = "<p>Start time: " + $("input#starttime").val() + "</p>";
    var endtime = "<p>End time: " + $("input#endtime").val() + "</p>";

    $(".schedule").append(name + description + date + starttime + endtime);
    $(".return").show();
    
    event.preventDefault();
  });
});
