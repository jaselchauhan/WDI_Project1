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

  //set up the board. 

  var whichGrid = prompt("what size grid would you like - enter 3, 4, 5, 6, 7 or 8");

  if(whichGrid == 3){
    console.log("grid 3 chosen");
    removeGrid();
    create3X3();
  } else if (whichGrid == 4){
    console.log("grid 4 chosen");
    removeGrid();
    create4X4();
  }else if (whichGrid == 5){
    console.log("grid 5 chosen");
    removeGrid();
    create5X5();
  }else if (whichGrid == 6){
    console.log("grid 6 chosen");
    removeGrid();
    create6X6();
  }else if (whichGrid == 7){
    console.log("grid 4 chosen");
    removeGrid();
    create7X7();
  }else if (whichGrid == 8){
    console.log("grid 8 chosen");
    removeGrid();
    create8X8();
  } 

  console.log($tileArray.length);
  console.log(row_length + " is the row length");
  
  $tileArray.each(function (i, value) { 
    $tileArray = $("li");

    $($tileArray[i]).click(function() {

      console.log($tileArray.length);

      clickedIndex = this.id;
      console.log(clickedIndex + " is the clicked index");
         
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


    // $($4X4).click(function(){

    //   // removeGrid();
    //   // createDOMElement();
    //   // $tileArray = $("li");
    //   // console.log("Second array: " + $tileArray.length);

    //   create6X6();

    // });  

/*
----------------------------------------------------------------------------------------------------------------
    ____                 __  _                 
   / __/_  ______  _____/ /_(_)___  ____  _____
  / /_/ / / / __ \/ ___/ __/ / __ \/ __ \/ ___/
 / __/ /_/ / / / / /__/ /_/ / /_/ / / / (__  ) 
/_/  \__,_/_/ /_/\___/\__/_/\____/_/ /_/____/  
                                               
----------------------------------------------------------------------------------------------------------------
*/  


  function create8X8 () {
    for (i=0;i<64;i++){
      var newSquare = "<li id="+parseInt(i)+"></li>";
      $(".grid").append(newSquare);
    }
    $tileArray = $("li");
    row_length = Math.sqrt($tileArray.length); 
    $($tileArray).css("height", "11%").css("width", "11%");
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

    function createDOMElement() {
      
      for (i=0;i<16;i++){
        var newSquare = "<li id="+parseInt(i)+"></li>";
        $(".grid").append(newSquare);
      }

      $tileArray = $("li");
      // console.log($tileArray.length);

      $($tileArray).css("height", "22%").css("width", "22%");

    }

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

      for (i=0;i<currentClick.length; i++){

            var x = $tileArray[currentClick[i]].id;
            var str = "#"+x;
            var $tile = $(str);  
            $tile.toggleClass("green");

        }
    }

});


//logic for swapping grid sizes - when 3X3 is selected check the row_length global variable to see current and then either add one or two more rows by creating new li dom elements and changing the css height and width of lis. same logic applies for 4X4 and 5X5 etc - just check the exisiting row length and then add/remove the relevant amount of rows.

//use toggle() to toggle the li dom elements for grid selector


