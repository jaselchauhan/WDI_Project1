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

        // move(clickedIndex);

        hasWon();


        // isTopRow(clickedIndex);

        // isBottomRow(clickedIndex);

        // isLeftColumn(clickedIndex);

        // isRightColumn(clickedIndex);

        move2(isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex);

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
      // console.log("You have had " + turnCounter + " turns!");
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


    function move2 (isTopRow,isBottomRow,isLeftColumn,isRightColumn, clickedIndex) {

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
      } else if (isTopRow(clickedIndex)==true && isRightColumn(clickedIndex)==true) {
          var rel2 = indexAsNumber -1;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel2,rel4);
          console.log(myArray);
      } else if (isBottomRow(clickedIndex)==true && isLeftColumn(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel3 = indexAsNumber - row_length;
          myArray.push(rel1,rel3);
          console.log(myArray);
      } else if (isBottomRow(clickedIndex)==true && isRightColumn(clickedIndex)==true){
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          myArray.push(rel2,rel3);
          console.log(myArray);
      } else if (isTopRow(clickedIndex)==true) {
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel1,rel2,rel4);
          console.log(myArray);
      } else if (isBottomRow(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          myArray.push(rel1,rel2,rel3);
          console.log(myArray);
      } else if (isLeftColumn(clickedIndex)==true){
          var rel1 = indexAsNumber + 1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel1,rel3,rel4);
          console.log(myArray);
      } else if (isRightColumn(clickedIndex)==true){
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel2,rel3,rel4);
          console.log(myArray);
      } else {
          var rel1 = indexAsNumber + 1;
          var rel2 = indexAsNumber -1;
          var rel3 = indexAsNumber - row_length;
          var rel4 = indexAsNumber + row_length;
          myArray.push(rel1,rel2,rel3,rel4);
          console.log(myArray);
      }

      for (i=0;i<myArray.length; i++){

            var x = $tileArray[myArray[i]].id;
            var str = "#"+x;
            var $tile = $(str);
            $tile.toggleClass("green");

        }
    }

});


      //work out how player 2 will play - player 1 goes first and after the first click a timer starts counting down. player 1's turn will end once the timer has run out, at which point their turn score will be logged to compare against player 2's if neither manages to win) . if the timer runs out before the hasWon function has returned true then player ones turn has ended and its onto player two. 





