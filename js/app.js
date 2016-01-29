$(document).ready(function() {
  
  console.log("jQuery has loaded");

  var $tileArray = $("li");
  console.log($tileArray);

  var clickedIndex=0;
  var counter = 0;

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

    //try to make this into an array to consider diff sized boards without having to manually hardcode in related tiles... there must be a mathematical way!!!

  
    // for each grid in my tilesArray, assign a event listener on mouse click  
    $tileArray.each(function (i, value) { 

      $($tileArray[i]).click(function() {

        clickedIndex = this.id;
        // console.log(clickedIndex);

        move(clickedIndex);

        hasWon();




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
    }


    function hasWon(){

      var className = $($tileArray[0]).attr('class');

      //iterate through the squares in tileArray. if they have class of green then add 1 to the hasWonCounter. outside of the loop function if the hasWonCounter is equal to the length of the tileArray then you've won!

      $tileArray.each(function (i, value) {
        console.log($($tileArray[i]));


      if(className == "green"){
        console.log("success. counter will now increment.");
        counter ++;
        console.log(counter);
      }

      if(counter == $tileArray.length){
        console.log("YOU'VE WON!!!!1");
        counter = 0;
      }


    });





});












    // $.each([myArr], function( index, value ) {
    //   console.log( index + ": " + value );
    // });

      // $grid.each(function (i, value) { 

      //   $($grid[i]).click(function() {

      //     // console.log('div' + i+ ':' + $(this).attr('id')); 

      //     if($(this).attr('id') == 1){ 
      //       $(this).toggleClass("green");
      //       $($grid[1]).toggleClass("green");  
      //       $($grid[3]).toggleClass("green");            
      //     } else if ($(this).attr('id') == 2){ 
      //       $(this).toggleClass("green");
      //       $($grid[0]).toggleClass("green");  
      //       $($grid[2]).toggleClass("green");  
      //       $($grid[4]).toggleClass("green");   
      //     } else if ($(this).attr('id') == 3){ 
      //       $(this).toggleClass("green");
      //       $($grid[1]).toggleClass("green");  
      //       $($grid[5]).toggleClass("green");   
      //     } else if ($(this).attr('id') == 4){ 
      //       $(this).toggleClass("green");
      //       $($grid[0]).toggleClass("green");  
      //       $($grid[6]).toggleClass("green");   
      //       $($grid[4]).toggleClass("green");  
      //     } else if ($(this).attr('id') == 5){ 
      //       $(this).toggleClass("green");
      //       $($grid[1]).toggleClass("green");  
      //       $($grid[3]).toggleClass("green");   
      //       $($grid[5]).toggleClass("green");  
      //       $($grid[7]).toggleClass("green"); 
      //     } else if ($(this).attr('id') == 6){ 
      //       $(this).toggleClass("green");
      //       $($grid[2]).toggleClass("green");  
      //       $($grid[4]).toggleClass("green");   
      //       $($grid[8]).toggleClass("green");   
      //     } else if ($(this).attr('id') == 7){ 
      //       $(this).toggleClass("green");
      //       $($grid[7]).toggleClass("green");  
      //       $($grid[4]).toggleClass("green");     
      //     } else if ($(this).attr('id') == 8){ 
      //       $(this).toggleClass("green");
      //       $($grid[6]).toggleClass("green");  
      //       $($grid[4]).toggleClass("green");   
      //       $($grid[8]).toggleClass("green");   
      //     } else if ($(this).attr('id') == 9){ 
      //       $(this).toggleClass("green");
      //       $($grid[7]).toggleClass("green");  
      //       $($grid[5]).toggleClass("green");     
      //     } 

      //   })

      // });



