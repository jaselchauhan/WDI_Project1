$(document).ready(function() {

  console.log("jQuery has loaded");

  animateBackground();

  var $tileArray = $("li");
  var row_length = Math.sqrt($tileArray.length); 

  var clickedIndex=0;
  var greenTileCount = 0;
  var turnCounter = 0;
  var player1score = 0;

  var $scoreBoard = $("#score");
  var $reset = $("#reset");

    $tileArray.each(function (i, value) { 

      $($tileArray[i]).click(function() {

      clickedIndex = this.id;   
         
        move(isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex);

        $(this).fadeOut(250);     
        $(this).fadeIn(300); 

        hasWon();

        $scoreBoard.html("Clicks so far: "+turnCounter);
      })
    })

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

  //create functions to change the grid size on a button click - players can choose from 3X3, 4X4, 5X5 and 6X6

  //calculates the remaining tiles to go green and returns the results for use in hasWon function
    function remainingTiles () {
      console.log($tileArray.length - greenTileCount);
       return $tileArray.length - greenTileCount;
    }

    //animates the tiles on click
    function animateTiles(clickedIndex) {
      $(this).fadeOut(70);     
      $(this).fadeIn(200); 
    }

    //ambient background changer using a plug in.
    function animateBackground(){
    $('body').ambience();  
    };
    

    function hasWon(){

      $tileArray.each(function (i, value) {
        if($($tileArray[i]).attr('class') === "green"){
          greenTileCount ++;
        }
      });

      $("#remainingTiles").html("Remaining tiles: "+remainingTiles());

      if(greenTileCount == $tileArray.length) {
        alert("YOU HAVE WON");
        player1score = turnCounter;
        resetBoard();
        console.log(player1score + " is the final score for p1");
        return true;
      }
        greenTileCount = 0;
    };


    function resetBoard() {

      $tileArray.each(function (i, value) {

        var removeGreen = $($tileArray[i]).removeClass("green");
        turnCounter = 0;
        greenTileCount = 0;
        $("#remainingTiles").html("level one");

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
      console.log(currentClick);

      var indexAsNumber = parseInt(clickedIndex);
      currentClick.push(indexAsNumber);

      if(isTopRow(clickedIndex)==true && isLeftColumn(clickedIndex)==true){
        var rel1 = indexAsNumber + 1;
        var rel4 = indexAsNumber + row_length;
        currentClick.push(rel1,rel4)
        turnCounter ++;
      } else if (isTopRow(clickedIndex)==true && isRightColumn(clickedIndex)==true) {
          var rel2 = indexAsNumber -1;
          var rel4 = indexAsNumber + row_length;
          currentClick.push(rel2,rel4);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex)==true && isLeftColumn(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel3 = indexAsNumber - row_length;
          currentClick.push(rel1,rel3);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex)==true && isRightColumn(clickedIndex)==true){
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          currentClick.push(rel2,rel3);
          turnCounter ++;
      } else if (isTopRow(clickedIndex)==true) {
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel4 = indexAsNumber + row_length;
          currentClick.push(rel1,rel2,rel4);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          currentClick.push(rel1,rel2,rel3);
          turnCounter ++;
      } else if (isLeftColumn(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          currentClick.push(rel1,rel3,rel4);
          turnCounter ++;
      } else if (isRightColumn(clickedIndex)==true){
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          currentClick.push(rel2,rel3,rel4);
          turnCounter ++;
      } else {
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          currentClick.push(rel1,rel2,rel3,rel4);
          turnCounter ++;
      }

      for (i=0;i<currentClick.length; i++){

            var x = $tileArray[currentClick[i]].id;
            var str = "#"+x;
            var $tile = $(str);
            $tile.toggleClass("green");

        }
      // console.log(turnCounter + " turns had by player 1");
    }

});






