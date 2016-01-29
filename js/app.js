$(document).ready(function() {

  console.log("jQuery has loaded");

  var $tileArray = $("li");

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

        // hasWon();

        arrayRelationships();

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

    function arrayRelationships () {

      //get the index of the clicked tile. then for this also find its related tiles by finding their indexes. Store these all indexes including the clicked tile index into an array which will be used to iterate over and add the toggle class functionality.
      var myArray = [];
      
      var row_length = Math.sqrt($tileArray.length); 

      var indexAsNumber = parseInt(clickedIndex);
      myArray.push(indexAsNumber);
      var p = typeof indexAsNumber;

      var rel1 = indexAsNumber + 1;
      var rel2 = indexAsNumber -1;
      var rel3 = indexAsNumber - row_length;
      var rel4 = indexAsNumber + row_length;

      myArray.push(rel1,rel2,rel3,rel4);
      console.log(myArray);

      for (i=0;i<myArray.length; i++){

        // console.log(myArray[i]);

        //conditions which I need to account for - if on top row, bottom row, left row or right row do something different, otherwise iterate through all items myArray and toggle their class.

        // for top row - if the index number in question is less than the rowLength (i.e.3 atm) then you know its on the top row. 

        // for the bottom row -  

        // for the left hand side - 

        //for the right hand side - 

        if(myArray[i] < 0 || myArray[i] > $tileArray.length){
          // console.log(myArray[i] + " isn't being considered as it's not on the board");
          // console.log(myArray.length + " is the length of the array");
        } else{

            var x = $tileArray[myArray[i]].id;
            var str = "#"+x;
            var $tile = $(str);
            $tile.toggleClass("green");
        }

      }
    }

    function checkifLeftRow() {




    }




});

      //try to make this into an array to consider diff sized boards without having to manually hardcode in related tiles... there must be a mathematical way!!!

      //work out how player 2 will play - player 1 goes first and after the first click a timer starts counting down. player 1's turn will end once the timer has run out, at which point their turn score will be logged to compare against player 2's if neither manages to win) . if the timer runs out before the hasWon function has returned true then player ones turn has ended and its onto player two. 





