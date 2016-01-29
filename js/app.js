$(document).ready(function() {
  console.log("jQuery has loaded");

  var $grid = $(".gridBoxes");

  var clickedIndex=0;

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

    // function move(clickedTileIndex){
      
    // }




  
    $grid.each(function (i, value) { 

      $($grid[i]).click(function() {

        clickedIndex = this.id;

        var relTileArr = winnersObj.winningCombos[clickedIndex].relatedTiles;

        for (i=0;i<relTileArr.length; i++){

          var x = $grid[relTileArr[i]].id;
          var str = "#"+x;
          var $tile = $(str);
          $tile.toggleClass("green");

        }
        $(this).toggleClass("green");        

      })
    })

});


//create a move function - move (clickedTileIndex)  - then 

















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



