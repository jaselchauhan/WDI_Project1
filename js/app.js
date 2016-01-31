$(document).ready(function() {

  console.log("jQuery has loaded");

  animateBackground();
  
  var $tileArray = $("li");
  var $scoreBoard = $("#score");
  var $reset = $("#reset");
  var $4X4 = $("#4X4");

  var row_length = Math.sqrt($tileArray.length); 
  var clickedIndex=0;
  var greenTileCount = 0;
  var turnCounter = 0;
  var player1score = 0;
  var startingClicks = 0;
  var startingClicksIndex = [8,15,30,50,75,100];
  var animateRelTileArray = [];

  setUpBoard();


  $('.grid').on("click", 'li', function(li) {
    console.log($(this).index());
      
      // $tileArray.each(function (i, value) { 
        // $tileArray = $("li");

        // $($tileArray[i]).click(function() {

          // var audio = {};
          // audio["walk"] = new Audio();
          // audio["walk"].src = "http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3";
          // audio["walk"].addEventListener('load', function () {
          //     audio["walk"].play();
          //   })

          clickSound();

          clickedIndex = this.id;
            
          if(!gameOver()){ 
              move(isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex);
              $(this).fadeOut(100);     
              $(this).fadeIn(200);
              hasWon();
          }
        // })
      // })

  });

    //on reset click event run resetBoard function and update the text on screen.
    $($reset).click(function() {
      resetBoard();
      $scoreBoard.html("click the board to start");
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
    if(startingClicks - turnCounter >0 ) {
      return false;
    } else {
      alert("You've run out of turns, it's player 2's turn!");
      resetBoard();
      return true;
    }
  }

  function setUpBoard(){

    var whichGrid = prompt("what size grid would you like - enter 3, 4, 5, 6, 7 or 8");

    if(whichGrid == 3){
      removeGrid();
      create3X3();
      startingClicks = startingClicksIndex[0];
    } else if (whichGrid == 4){
      removeGrid();
      create4X4();
      startingClicks = startingClicksIndex[1];
    }else if (whichGrid == 5){
      removeGrid();
      create5X5();
      startingClicks = startingClicksIndex[2];
    }else if (whichGrid == 6){
      removeGrid();
      create6X6();
      startingClicks = startingClicksIndex[3];
    }else if (whichGrid == 7){
      removeGrid();
      create7X7();
      startingClicks = startingClicksIndex[4];
    }else if (whichGrid == 8){
      removeGrid();
      create8X8();
      startingClicks = startingClicksIndex[5];
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
    
    function hasWon(){

      $tileArray.each(function (i, value) {
        if($($tileArray[i]).attr('class') === "green"){
          greenTileCount ++;
        }
      });

      $scoreBoard.html("Clicks left: "+ (startingClicks- turnCounter) + "     |     Remaining Tiles: " + remainingTiles());

      if(greenTileCount == $tileArray.length) {
        alert("YOU HAVE WON");
        player1score = turnCounter;
        resetBoard();
        console.log(player1score + " is the final score for p1");
        setUpBoard();
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
        $("#remainingTiles").html("level one");
        // $('body').ambience({ time:600, colors: ['beige','blue','pink','olive' ] })

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


