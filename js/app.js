$(document).ready(function() {

  console.log("jQuery has loaded");

  var $tileArray = $("li");
  var row_length = Math.sqrt($tileArray.length); 

  var clickedIndex=0;
  var counter = 0;
  var turnCounter = 0;


  var winnersObj = {"winningCombos":[

    {"clickedTile":0, "relatedTiles":[1,3]},
    {"clickedTile":1, "relatedTiles":[0,2,4]},
    {"clickedTile":2, "relatedTiles":[1,5]},
    {"clickedTile":3, "relatedTiles":[0,4,6]},
    {"clickedTile":4, "relatedTiles":[1,3,5,7]},
    {"clickedTile":5, "relatedTiles":[2,4,8]},
    {"clickedTile":6, "relatedTiles":[3,7]},
    {"clickedTile":7, "relatedTiles":[4,6,8]},
    {"clickedTile":8, "relatedTiles":[5,7]}

    ]} 

    // for each grid in my tilesArray, assign a event listener on mouse click  
    $tileArray.each(function (i, value) { 

      $($tileArray[i]).click(function() {

        clickedIndex = this.id;
        // console.log(clickedIndex + " from main function call")

        // move(clickedIndex);

        // hasWon();

        // arrayRelationships();

        isTopRow(clickedIndex);

        isBottomRow(clickedIndex);

        isLeftColumn(clickedIndex);

        isRightColumn(clickedIndex);

      })
    })

    function move(clickedIndex){

      var clicked = $tileArray[clickedIndex].id;

      var clickStr = "#"+clicked;
      var $clickedTile = $(clickStr);

      $clickedTile.toggleClass("green");
      
      var relTileArr = winnersObj.winningCombos[clickedIndex].relatedTiles;

      for (i=0;i<relTileArr.length; i++){

        var x = $tileArray[relTileArr[i]].id;
        var str = "#"+x;
        var $tile = $(str);
        $tile.toggleClass("green");
      }
      turnCounter ++;
      console.log("You have had " + turnCounter + " turns!");
    }


    function hasWon(){

      //iterate through the squares in tileArray. if they have class of green then add 1 to the hasWonCounter. outside of the loop function if the hasWonCounter is equal to the length of the tileArray then you've won!

      $tileArray.each(function (i, value) {

        var hasClass = $($tileArray[i]).attr('class');  

        if(hasClass === "green"){
          counter ++;
        }
      });

      if(counter == $tileArray.length) {
        alert("YOU HAVE WON");
        resetBoard();
        return true;
      }
        counter = 0;
    };

    function resetBoard() {

      $tileArray.each(function (i, value) {

        var removeGreen = $($tileArray[i]).removeClass("green");
        turnCounter = 0;
        counter = 0;

      });
    }

    function isTopRow (clickedIndex){
     
      if(parseInt(clickedIndex) <= row_length-1){
        console.log("in top row");
        return true;
      } else {
        console.log("not on top row");
        return false;
      }
    }

    function isBottomRow(clickedIndex){
      if(parseInt(clickedIndex) > $tileArray.length - (row_length+1)) {
        console.log("in bottom row");
        return true;
      } else {
        console.log("not in bottom row");
        return false;
      }
    }

    function isLeftColumn(clickedIndex){

      if(parseInt(clickedIndex) ==0 ){
        console.log("zeroeth index, in left column");
        return true;
      }
      else if(parseInt(clickedIndex)%(row_length) ==0){
        console.log("is in left column");
        return true;
      } else {
        console.log("is not in left column");
        return false;
      }
    }

    function isRightColumn(clickedIndex){

      if(parseInt(clickedIndex) === $tileArray.length -1 ){
        console.log("last element in array");
        return true;
      }

      else if((parseInt(clickedIndex) + 1) % row_length == 0){
        console.log("in right column");
        return true;
      } else {
        console.log("is not in right column");
        return false;
      }
    }



    function arrayRelationships () {

      //get the index of the clicked tile. then for this also find its related tiles by finding their indexes. Store these all indexes including the clicked tile index into an array which will be used to iterate over and add the toggle class functionality.
      var myArray = [];

      var indexAsNumber = parseInt(clickedIndex);
      myArray.push(indexAsNumber);
      
      //before pushing all relative tiles to an array, run 4 functions on the clickedIndex to find out where it is on the board and then only pass the relevant rel1, rel2, rel3 and rel4 into the array based upon the results of the functions



      var rel1 = indexAsNumber + 1;
      var rel2 = indexAsNumber -1;
      var rel3 = indexAsNumber - row_length;
      var rel4 = indexAsNumber + row_length;






      myArray.push(rel1,rel2,rel3,rel4);
      console.log(myArray);

      for (i=0;i<myArray.length; i++){

        //conditions which I need to account for - if on top row, bottom row, left row or right row do something different, otherwise iterate through all items myArray and toggle their class.

        // for top row - if the index number in question is less than the rowLength (i.e.3 atm) then you know its on the top row. 

        // for the bottom row -  

        // for the left hand side - 

        //for the right hand side - 

        // for the remaining conditions

        if(myArray[i] < 0 || myArray[i] > $tileArray.length -1 ){
          console.log(myArray[i] + " isn't being considered as it's not on the board");
          // console.log(myArray.length + " is the length of the array");
       
        // } else if (myArray[i] % row_length === 0){ 
        //     console.log("this tile is on");
        // }

            var x = $tileArray[myArray[i]].id;
            var str = "#"+x;
            var $tile = $(String(str));
            $tile.toggleClass("green");

        }

      }
    }

    function checkifLeftRow() {




    }




});

      //try to make this into an array to consider diff sized boards without having to manually hardcode in related tiles... there must be a mathematical way!!!

      //work out how player 2 will play - player 1 goes first and after the first click a timer starts counting down. player 1's turn will end once the timer has run out, at which point their turn score will be logged to compare against player 2's if neither manages to win) . if the timer runs out before the hasWon function has returned true then player ones turn has ended and its onto player two. 





