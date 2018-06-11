//This function gets a Random Number between 1 and 101
var randomNumber = function () {
  return (Math.ceil(Math.random()*100)+1);
};

var timeInterval;

let count = 10;
let score = 0;
let a;
let b;
let result;

$(() => {

  //$CONSTANTS

  const $timer = $('#timer');
  const $message = $('#message');
  const $submit = $('#submit');
  const $submits = $('#submits');
  const $valueField = $('#valueField');
  const $match = $('#match');
  const $score = $('#score');
  const $body = $('body');
  const $go = $('#go');

  //FUNCTIONS

  //This function is the Main Game
  var mainGame = function () {

    //Setting up the value Field
    $valueField.val('');
    $valueField.focus();

    // This changes the Timer color scheme
    $timer.css({"background-color": "white", "color":"blue"});

    //This gets 2 Random Numbers and the Result
    a = randomNumber();
    b = randomNumber();
    result = a + b;
    console.log(a, b, result);

    //This print on screen the Operation to solve
    $message.text(a + ' + ' + b + ' = ' + ' ?')

    //This checks the value on Submit when Clicked
    $submit.on('click', () => {
      console.log(result, parseInt($valueField.val()) );
      //if Field is correct, add 1 to Score and run Game again
      if ( result === parseInt($valueField.val()) ) {
        score++;
        $match.text('It\'s a match!');
        // $match.delay(500).text('');
        console.log('score: ' + score);
        $score.html(score);
        count=10;
        $submit.off('click');
        $body.unbind('keypress');
        mainGame();
      }
      //if Field is empty, make an alert and nullify submit
      else if ($valueField.val() == '') {
        alert('Enter a Number');
        return false;
        $valueField.focus();
      }
      //if Value is wrong, subtract 1 to Score and run Game again
      else {
        $match.text('It\'s not a match');
        // $match.delay(500).text('');
        score--;
        console.log('score: ' + score);
        $score.html(score);
        count=10;
        $submit.off('click');
        $body.unbind('keypress');
        mainGame();
      };
    });

    //This checks the value of Submit when Enter is pressed
    $body.bind('keypress', (e) => {
      if (e.which == 13) {
        console.log(result, parseInt($valueField.val()) );
        //if Field is correct, add 1 to Score and run Game again
        if ( result === parseInt($valueField.val()) ) {
          $match.text('It\'s a match!');
          // $match.delay(500).text('');
          score++;
          console.log('score: ' + score);
          $score.html(score);
          count=10;
          $body.unbind('keypress');
          $submit.off('click');
          mainGame();
        }
        //if Field is empty, make an alert and nullify submit
        else if ($valueField.val() == '') {
          alert('Enter a Number');
          return false;
          $valueField.focus();
        }
        //if Value is wrong, subtract 1 to Score and run Game again
        else {
          $match.text('It\'s not a match');
          // $match.delay(500).text('');
          score--;
          console.log('score: ' + score);
          $score.html(score);
          count=10;
          $body.unbind('keypress');
          $submit.off('click');
          mainGame();
        };
      }
    });

  };

  // EVENT LISTENER TO START THE GAME

  //This Event Listener changes Layout, starts the Timer and the mainGame
  $go.on('click', () => {

    score = 0;
    $score.html(score);
    $submits.show();
    $body.find('#valueField').focus();
    $go.hide();

    //This controls the 10 seconds Timer
    count = 10;
    timeInterval = setInterval(() => {
      if (count>=0) {
        $timer.text(count);
        count--;
      }
      else {
        $message.text('Stop!');
        $submits.hide();
        $timer.css({"background-color": "blue", "color":"white"});
        $go.css({"background-color": "blue", "color":"white"}).show().text("Play again?");
        clearInterval(timeInterval);
      }
    }, 1000);

    mainGame();
  });

});
