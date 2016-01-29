$(document).ready(function() {

  console.log("jQuery has loaded");

  var $tileArray = $("li");
  var row_length = Math.sqrt($tileArray.length); 

  var clickedIndex=0;
  var GreenSquarecounter = 0;
  var turnCounter = 0;
  var player1score = 0;

  var $scoreBoard = $("#score");
  var $reset = $("#reset");




    $tileArray.each(function (i, value) { 

      $($tileArray[i]).click(function() {

        clickedIndex = this.id;   
        $( "h1").fadeToggle( "slow", "linear" );
        $(this).fadeOut(70);     
        $(this).fadeIn(200);  

        move(isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex);

        hasWon();

        $scoreBoard.html(turnCounter);
      })
    })

    $($reset).click(function() {
      resetBoard();
      $scoreBoard.html(turnCounter);

    });

    function hasWon(){

      $tileArray.each(function (i, value) {

        var hasClass = $($tileArray[i]).attr('class');  

        if(hasClass === "green"){
          GreenSquarecounter ++;
        }
      });

      if(GreenSquarecounter == $tileArray.length) {
        alert("YOU HAVE WON");
        player1score = turnCounter;
        resetBoard();
        console.log(player1score + " is the final score for p1");
        return true;
      }
        GreenSquarecounter = 0;
    };

    function resetBoard() {

      $tileArray.each(function (i, value) {

        var removeGreen = $($tileArray[i]).removeClass("green");
        turnCounter = 0;
        GreenSquarecounter = 0;

      });
    }

    function isTopRow (clickedIndex){
     
      if(parseInt(clickedIndex) <= row_length-1){
        return true;
      } else {
        return false;
      }
    }

    function isBottomRow(clickedIndex){
      if(parseInt(clickedIndex) > $tileArray.length - (row_length+1)) {
        return true;
      } else {
        return false;
      }
    }

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


    function move (isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex) {

      var myArray = [];
      console.log(myArray);

      var indexAsNumber = parseInt(clickedIndex);
      myArray.push(indexAsNumber);
      

      if(isTopRow(clickedIndex)==true && isLeftColumn(clickedIndex)==true){
        // console.log("top row condition true. zeroth index logged");
        var rel1 = indexAsNumber + 1;
        var rel4 = indexAsNumber + row_length;
        myArray.push(rel1,rel4);
        console.log(myArray);
        turnCounter ++;
      } else if (isTopRow(clickedIndex)==true && isRightColumn(clickedIndex)==true) {
          var rel2 = indexAsNumber -1;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel2,rel4);
          console.log(myArray);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex)==true && isLeftColumn(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel3 = indexAsNumber - row_length;
          myArray.push(rel1,rel3);
          console.log(myArray);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex)==true && isRightColumn(clickedIndex)==true){
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          myArray.push(rel2,rel3);
          console.log(myArray);
          turnCounter ++;
      } else if (isTopRow(clickedIndex)==true) {
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel1,rel2,rel4);
          console.log(myArray);
          turnCounter ++;
      } else if (isBottomRow(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          myArray.push(rel1,rel2,rel3);
          console.log(myArray);
          turnCounter ++;
      } else if (isLeftColumn(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel1,rel3,rel4);
          console.log(myArray);
          turnCounter ++;
      } else if (isRightColumn(clickedIndex)==true){
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel2,rel3,rel4);
          console.log(myArray);
          turnCounter ++;
      } else {
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel1,rel2,rel3,rel4);
          console.log(myArray);
          turnCounter ++;
      }

      for (i=0;i<myArray.length; i++){

            var x = $tileArray[myArray[i]].id;
            var str = "#"+x;
            var $tile = $(str);
            $tile.toggleClass("green");

        }
      console.log(turnCounter + " turns had by player 1");
    }

});


      //work out how player 2 will play - player 1 goes first and after the first click a timer starts counting down. player 1's turn will end once the timer has run out, at which point their turn score will be logged to compare against player 2's if neither manages to win) . if the timer runs out before the hasWon function has returned true then player ones turn has ended and its onto player two.

      //add timer function which starts from the first mouse click. then wokrk out how the game is actually won - ie by least number of moves? or by best time with completed
      // add a reset board button 





