$(document).ready(function() {

  console.log("jQuery load pass on presentation.html");

  animateBackground();

  var $content = $('#presentationContent');

  $content.children('p').hide();

  
  $content.click(function(){
      console.log("the button is responding to a click");
      $content.children('p').slideToggle();
  });


  function animateBackground(){
  $('body').ambience({
    time:3000, 
    colors: ['black','darkgrey','darkblue', 'cyan','black','darkgrey','cyan','darkblue','cyan'],
    speed:"fast"
    }
    );  
  };


});





