$(".save-btn").on("click", function() {
    var taskIndex = $(this).attr("data-taskIndex");
    var inputLine = $(".srch .long")[taskIndex]
    var inputField = $(inputLine).children('input')
    var inputVal = inputField.val()
});   
















// window.onload = init;

//  function {
     
//  };
 
// var inputValJson=JSON.stringify(inputVal);
// localStorage.setItem("submit", inputValJson);
// var newInputValJson = localStorage.getItem("sumbit");
// var newInputVal = JSON.parse(newInputValJson);

// console.log();

