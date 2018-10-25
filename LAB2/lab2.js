    // START, setting variables for counting correct answers and brings the DIV from HTML.
    var res;
    var content = document.getElementById("content");
    var correct = 0;

    // Start getting the info from API and checks status.
    document.addEventListener('DOMContentLoaded', function() {
    var req = new XMLHttpRequest;

    req.onreadystatechange = function() {
      if (req.readyState == 4){
        if (req.status == 200) {
          res = req.response;
          showQuest()

          // The IF statement checks how many correct answers the player got and gives feedback.
          if (correct === 5) {
              content.innerHTML ='You had ' +correct+ ' correct answers of 5 possible, you\'ve earned a gold star!';
            }
            else if (correct >= 3 ) {
              content.innerHTML ='You had ' +correct+ ' correct answers of 5 possible, you\'ve earned a silver star!';
            }
            else if (correct >= 1) {
              content.innerHTML = 'You had ' +correct+ ' correct answers of 5 possible, you\'ve earned a bronze star!';
            }
            else {
              content.innerHTML ='You had 0 correct answers, go and WATCH some movies!!';
            }
          }
        }
      };

      // Link to the API
    req.open("GET", "https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean")
    req.responseType = 'json';
    req.send();
     });


      // Create a prompt window wich displays the questions and collects the answer.
     function showQuest(){
      for ( var i=0; i < res.results.length; i ++ ) {

        // Converting the text to readable HTML in the prompt.
          var decodeHTML = function (html) {
            var txt = document.createElement('textarea');
            txt.innerHTML = html;
            return txt.value;

          };
          // Creating variables for Q&A and start counting +1p for each correct answer.
        var question = decodeHTML(res.results[i].question);
        var correctAnswer = res.results[i].correct_answer;
        var quest1 = prompt(question);

          if ( quest1.toUpperCase() === correctAnswer.toUpperCase() ){
            correct += 1;
          }
       }
     }
