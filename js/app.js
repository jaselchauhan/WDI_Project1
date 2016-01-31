$(document).ready(function() {

  console.log("jQuery has loaded");

  animateBackground();
  
  //declare all jQuery DOM variables here.
  var $tileArray = $("li");
  var $scoreBoard = $("#score");
  var $reset = $("#reset");
  var $4X4 = $("#4X4");
  var $selectThree = $("#threeBythree");
  var $selectFour = $("#fourByfour");
  var $selectFive = $("#fiveByfive");
  var $selectSix = $("#sixBysix");
  var $selectSeven = $("#sevenByseven");
  var $selectEight = $("#eightByeight");
  var $p1score = $("#afterReset");
  var $gridSizeSelector = $(".gridSizeSelector");

  //declare other variables here
  var row_length = Math.sqrt($tileArray.length); 
  var clickedIndex=0;
  var greenTileCount = 0;
  var turnCounter = 0;
  var player1score = 0;
  var startingClicks = 0;
  var startingClicksIndex = [8,15,35,50,75,100];
  var animateRelTileArray = [];
  var livesCounter = 3;
  var whichPlayer = 0;

 //main code block. runs on each lite click.
  $('.grid').on("click", 'li', function(li) {
      
          clickSound();

          clickedIndex = this.id;

          console.log(whichPlayer);
            
          if(!gameOver()){ 
              move(isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex);
              $(this).fadeOut(100);     
              $(this).fadeIn(200);
              hasWon();
          } else if (!!gameOver) {
            console.log("testing condition for if game over is true");
          }

          //should there be an else statement here for if game over is true??
  });

  // click event listeners below

    //on reset click event run resetBoard function and update the text on screen.
    $($reset).click(function() {
      resetBoard();
      $scoreBoard.html("----------");
      livesCounter -=1;
      console.log("you have " + livesCounter + " lives remaining..");
      $gridSizeSelector.show();
      $('#welcome').delay(1000).fadeIn();
      // $('#welcome').delay(1000).fadeOut();
    });

    //sets board up as 3by3
    $($selectThree).click(function() {
      prepBoard();
      create3X3();
      startingClicks = startingClicksIndex[0];

    });

    //sets board up as 4X4
    $($selectFour).click(function() {
      prepBoard();
      create4X4();
      startingClicks = startingClicksIndex[1];

    });

    //sets board up as 5X5
    $($selectFive).click(function() {
      prepBoard();
      create5X5();
      startingClicks = startingClicksIndex[2];

    });

    //sets board up as 6X6
    $($selectSix).click(function() {
      prepBoard();
      create6X6();
      startingClicks = startingClicksIndex[3];

    });

    //sets board up as 7X7
    $($selectSeven).click(function() {
      prepBoard();
      create7X7();
      startingClicks = startingClicksIndex[4];

    });

    //sets board up as 8X8
    $($selectEight).click(function() {
      prepBoard();
      create8X8();
      startingClicks = startingClicksIndex[5];

    });


/*
----------------------------------------------------------------------------------------------------------------
    ____                 __  _                 
   / __/_  ______  _____/ /_(_)___  ____  _____
  / /_/ / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
 / __/ /_/ / / / / /__/ /_/ / /_/ / / / (__  ) 
/_/  \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/  
                                               
----------------------------------------------------------------------------------------------------------------
*/  

  function prepBoard(){
    resetBoard();
    $scoreBoard.html("----------");
    removeGrid();
    $('#welcome').delay(400).fadeOut();
  };

  function clickSound(){

    var audio = document.getElementById("clickSound");
    audio.play();
  }                

  function whichPlayer(gameOver) {
    if(gameOver){
      return "player2";
    } else {
      return "player1";
    }
  }

  function gameOver(){

    if(livesCounter<=0){
      alert("you have run out of lives, please try again");
      // $("#title").html("GAME. OVER. " + player1score + " is the final score for p1");
      $('#welcome').delay(400).fadeIn();
      resetBoard();
      livesCounter =3;
      return true;
    }

    if(startingClicks - turnCounter > 0 ) {
      return false;
    } else {
      // $(".grid").fadeOut(20);
      // $("#title").html("GAME. OVER. " + player1score + " is the final score for p1");
      $p1score.html("you've run out of clicks... try again. Lives remaining: " + (livesCounter -1));
      $('#welcome').delay(400).fadeIn();
      $('#welcome').delay(4000).fadeOut();

      // $(".grid").fadeIn(200);
      livesCounter-=1;
      resetBoard();
      return true;
    }
  }

  function create8X8 () {
    for (i=0;i<64;i++){
      var newSquare = "<li id="+parseInt(i)+"></li>";
      $(".grid").append(newSquare);
      //why doesn't this work????
      $("grid").fadeOut(10);
      $("grid").fadeIn(1000);
    }
    $tileArray = $("li");
    row_length = Math.sqrt($tileArray.length); 
    $($tileArray).css("height", "10%").css("width", "10%");
  }

  function create7X7 () {
    for (i=0;i<49;i++){
      var newSquare = "<li id="+parseInt(i)+"></li>";
      $(".grid").append(newSquare);
    }

    $tileArray = $("li");
    row_length = Math.sqrt($tileArray.length);
    $($tileArray).css("height", "12%").css("width", "12%");

  }

  function create6X6 () {
    for (i=0;i<36;i++){
      var newSquare = "<li id="+parseInt(i)+"></li>";
      $(".grid").append(newSquare);
    }

    $tileArray = $("li");
    row_length = Math.sqrt($tileArray.length);
    $($tileArray).css("height", "14%").css("width", "14%");

  }

  function create5X5 () {
    for (i=0;i<25;i++){
      var newSquare = "<li id="+parseInt(i)+"></li>";
      $(".grid").append(newSquare);
    }

    $tileArray = $("li");
    row_length = Math.sqrt($tileArray.length);
    $($tileArray).css("height", "18%").css("width", "18%");

  }

  function create4X4 () {
    for (i=0;i<16;i++){
      var newSquare = "<li id="+parseInt(i)+"></li>";
      $(".grid").append(newSquare);
    }

    $tileArray = $("li");
    row_length = Math.sqrt($tileArray.length);
    $($tileArray).css("height", "23%").css("width", "23%");

  }


  function create3X3 () {
    for (i=0;i<9;i++){
      var newSquare = "<li id="+parseInt(i)+"></li>";
      $(".grid").append(newSquare);
    }

    $tileArray = $("li");
    row_length = Math.sqrt($tileArray.length);
    $($tileArray).css("height", "31%").css("width", "31%");

  }
  //deletes the DOM elements which currently exist. Use in conjuction with create Grid functions so you effectively remove and add new DOM elements. I think this is what is breaking my current game logic - investigate further.
    function removeGrid() {
      $tileArray.each(function (i, value) { 
        $tileArray[i].remove();
      });
    }  

  //calculates the remaining tiles to go green and returns the results for use in hasWon function
    function remainingTiles () {
       return $tileArray.length - greenTileCount;
    }

    //animates the tiles on click
    function animateTiles(clickedIndex) {
      $(this).fadeOut(70);     
      $(this).fadeIn(200); 
    }

    //ambient background changer using a plug in.
    function animateBackground(){
    $('body').ambience({
      time:3000, 
      colors: ['black','darkgrey','darkblue', 'cyan','black','darkgrey','darkblue','cyan']}
      );  
    };

    function whoseTurn(whichPlayer){
      if(whichPlayer%2==0){
        return "p2";
      } else {
        return "p1";
      }
    }
    
    function hasWon(){

      $tileArray.each(function (i, value) {
        if($($tileArray[i]).attr('class') === "green"){
          greenTileCount ++;
        }
      });

      $scoreBoard.html("clicks left: "+ (startingClicks- turnCounter) + "     |     remaining tiles: " + remainingTiles() + "  |  lives remaining: " + livesCounter );

      if(greenTileCount == $tileArray.length) {
        // $(".grid").fadeOut(200);
        // $(".grid").toggleClass("green");
        // $(".grid").fadeIn(200);
        // $(".grid").fadeOut(200);
        // $(".grid").toggleClass("green");
        // $(".grid").fadeIn(200);
        // $(".grid").fadeOut(20);
        $('#welcome').delay(400).fadeIn();
        $(".grid").fadeOut(2000);
        $(".grid").fadeIn(20);
        // $(".grid").fadeIn(1000);
        // $(".grid").fadeOut(450);
        // $(".grid").fadeIn(800);
        // $(".grid").fadeOut(250);
        // $(".grid").fadeIn(600);
        player1score = turnCounter;
        resetBoard();
        // console.log(player1score + " is the final score for p1");
        // $("p").hide();
        $gridSizeSelector.hide();
        $('#welcome').delay(4000).fadeOut();
        $p1score.html("you've won! " + player1score + " is the final score for " + whoseTurn() + "...next player's go");

        $("#title").html(whoseTurn() + " scored " + player1score + "!...next player's go");
        whichPlayer +=1;
        $("#title").delay(4000).html("litesweeper");

        // setUpBoard();
        return true;
      }
        greenTileCount = 0;
    };

    // resets the board back to red and the counters back to 0
    function resetBoard() {

      $tileArray.each(function (i, value) {

        var removeGreen = $($tileArray[i]).removeClass("green");
        turnCounter = 0;
        greenTileCount = 0;
        $("#title").html("litesweeper");
        // $("#remainingTiles").html("level one");

      });
    }

    //checks if clicked square is on the top row of the grid and returns a boolean statement to be passed into move function
    function isTopRow(clickedIndex) {
    
      if(parseInt(clickedIndex) <= row_length-1){
        return true;
      } else {
        return false;
      }
    }
    //checks if clicked square is on the bottom row of the grid and returns a boolean statement to be passed into move function
    function isBottomRow(clickedIndex){
      if(parseInt(clickedIndex) > $tileArray.length - (row_length+1)) {
        return true;
      } else {
        return false;
      }
    }
    //checks if clicked square is in the left of the grid and returns a boolean statement to be passed into move function
    function isLeftColumn(clickedIndex){

      if(parseInt(clickedIndex) ==0 ){
        return true;
      }
      else if(parseInt(clickedIndex)%(row_length) ==0){
        return true;
      } else {
        return false;
      }
    }
    //checks if clicked square is in the right of the grid and returns a boolean statement to be passed into move function
    function isRightColumn(clickedIndex){

      if(parseInt(clickedIndex) === $tileArray.length -1 ){
        return true;
      }

      else if((parseInt(clickedIndex) + 1) % row_length == 0){
        return true;
      } else {
        return false;
      }
    }

    //logic for turning the right grids to green 
    function move (isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex) {

      var currentClick = [];

      var indexAsNumber = parseInt(clickedIndex);
      currentClick.push(indexAsNumber);

      var rel1 = indexAsNumber + 1;
      var rel2 = indexAsNumber -1;
      var rel3 = indexAsNumber - row_length;
      var rel4 = indexAsNumber + row_length;



      if(isTopRow(clickedIndex) && isLeftColumn(clickedIndex)){
        currentClick.push(rel1,rel4);
        turnCounter ++;
      } else if (isTopRow(clickedIndex) && isRightColumn(clickedIndex)) {
          currentClick.push(rel2,rel4);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex) && isLeftColumn(clickedIndex)){
          currentClick.push(rel1,rel3);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex) && isRightColumn(clickedIndex)){
          currentClick.push(rel2,rel3);
          turnCounter ++;
      } else if (isTopRow(clickedIndex)) {
          currentClick.push(rel1,rel2,rel4);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex)){
          currentClick.push(rel1,rel2,rel3);
          turnCounter ++;
      } else if (isLeftColumn(clickedIndex)){
          currentClick.push(rel1,rel3,rel4);
          turnCounter ++;
      } else if (isRightColumn(clickedIndex)){
          currentClick.push(rel2,rel3,rel4);
          turnCounter ++;
      } else {
          currentClick.push(rel1,rel2,rel3,rel4);
          turnCounter ++;
      }

      animateRelTileArray = currentClick;

      for (i=0;i<currentClick.length; i++){

            var x = $tileArray[currentClick[i]].id;
            var str = "#"+x;
            var $tile = $(str);  
            $tile.fadeOut(300);
            $tile.toggleClass("green");
            $tile.fadeIn(300);

        }
    }

});



//     $('#welcome')
//         .css('background-color', '')
// // background-color: rgba(41, 242, 44, 0.6)
//         .css('background-color', 'rgba(41,242,44,0.6)');

