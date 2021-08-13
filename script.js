let index = 0;

var questions = quiz.sort(function () {
         return 0.5 - Math.random();
});
let attempt = 0;
let score = 0;
let wrong = 0;
$(function () {

  let totaltime = 60;
  let mini = 0;
  let sec = 0;
  let counter = 0;
  let timer = setInterval(function () {
      counter++;
      mini = Math.floor((totaltime - counter) / 60);
      sec = totaltime - (mini * 60) - counter;
      $(".timerbox span").text(mini + ":" + sec);
      
        if (counter == totaltime){
          clearInterval(timer);
          showResult(0);
      }
  }, 1000);
    
    
    $(".header1 span").text("1" + "/" + (questions.length));
    printquestion(index);

});


 function printquestion(i) {
     
     $(".questionbox").text(questions[i].question);
     $(".optionbox span").eq(0).text(questions[i].option[0]);
     $(".optionbox span").eq(1).text(questions[i].option[1]);
     $(".optionbox span").eq(2).text(questions[i].option[2]);
     $(".optionbox span").eq(3).text(questions[i].option[3]);
}

function checkAnswer(option)
{
   attempt++;
   let optionclicked = $(option).data("opt");
   if (optionclicked == questions[index].answer){
      $(option).addClass("right");
      score++;
}
   else {
     $(option).addClass("wrong");
     wrong++;
}
  $(".scorebox span").text(score);

  $(".optionbox span").attr("onclick", "");
  
}

function shownext() {
   
   if(index >=(questions.length - 1)) {
     alert("Test Ended");
     showResult();
     return;
}
   index++;
   $(".header1 span").text((index+1) + "/" + (questions.length));
   $(".optionbox span").removeClass();
   $(".optionbox span").attr("onclick","checkAnswer(this)");
   printquestion(index);
   }
  
function showResult(j) {
   if(
      j==1 && 
      index < (questions.length - 1) &&
      !confirm(
           "Quiz has not finished yet. press cancel to continue quiz"
      )
){
    return;
}
   $("#questionscreen").hide();
   $("#resultscreen").show();
   $("#totalquestion").text(questions.length);
   $("#attemptquestion").text(attempt);
   $("#correctanswer").text(score);
   $("#wronganswer").text(wrong);
   
}



