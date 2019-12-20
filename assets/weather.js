
var searchButton = $(".save-btn")

function getWeather(){

    var myKey = "0a4173aac6f19f5152e686336c4ee7e9"
    var taskIndex = $(this).attr("data-taskIndex");
    var inputLine = $(".srch .long")[taskIndex]
    var inputField = $(inputLine).children('input')
    var inputVal = inputField.val()
    var citySearch = $("#city").val();
    
    localStorage.setItem("history", citySearch);
    var li = $("<li>").text(citySearch);
    $("#states").prepend(li);
    //set and refresh onload

   

    

}
searchButton.on("click", getWeather)





