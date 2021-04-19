$(document).ready(function(){
  getWidth();
  getCard();
  $('#modal1').modal();
  $('#modal1').modal('open');
  // End Prealoader
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 9000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$(window).scroll(function() { // check if scroll event happened
  if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
    $('.navbackground').removeClass('navbackgroundColor').addClass('transition')
    $(".navbackground").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
  } else {
    $(".navbackground").css("background-color", "transparent"); // if not, change it back to transparent
  }
});

  var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;
    var textArray = [
      "All future online appointments through ORS of few Hospitals, on their request, are temporarily suspended in view of the COVID-19.", 
      "Advisory for patients planning to visit NIMHANS, Bengaluru", 
      "COVID-19 Helpline No. and Dashboard of MoHFW ",
    ];
    
    // Speed (in milliseconds) of typing.
    var speedForward = 100, //Typing Speed
        speedWait = 1000, // Wait between typing and backspacing
        speedBetweenLines = 1000, //Wait between first and second lines
        speedBackspace = 25; //Backspace Speed
        typeWriter("output", textArray);

        function typeWriter(id, ar) {
          var element = $("#" + id),
              aString = ar[a],
              eHeader = element.children("h5"), //Header element
              eParagraph = element.children("p"); //Subheader element
          
          // Determine if animation should be typing or backspacing
          if (!isBackspacing) {
            
            // If full string hasn't yet been typed out, continue typing
            if (i < aString.length) {
              
              // If character about to be typed is a pipe, switch to second line and continue.
              if (aString.charAt(i) == "|") {
                isParagraph = true;
                eHeader.removeClass("cursor");
                eParagraph.addClass("cursor");
                i++;
                setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
                
              // If character isn't a pipe, continue typing.
              } else {
                // Type header or subheader depending on whether pipe has been detected
                if (!isParagraph) {
                  eHeader.text(eHeader.text() + aString.charAt(i));
                } else {
                  eParagraph.text(eParagraph.text() + aString.charAt(i));
                }
                i++;
                setTimeout(function(){ typeWriter(id, ar); }, speedForward);
              }
              
            // If full string has been typed, switch to backspace mode.
            } else if (i == aString.length) {
              
              isBackspacing = true;
              setTimeout(function(){ typeWriter(id, ar); }, speedWait);
              
            }
            
          // If backspacing is enabled
          } else {
            
            // If either the header or the paragraph still has text, continue backspacing
            if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
              
              // If paragraph still has text, continue erasing, otherwise switch to the header.
              if (eParagraph.text().length > 0) {
                eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
              } else if (eHeader.text().length > 0) {
                eParagraph.removeClass("cursor");
                eHeader.addClass("cursor");
                eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
              }
              setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
            
            // If neither head or paragraph still has text, switch to next quote in array and start typing.
            } else { 
              
              isBackspacing = false;
              i = 0;
              isParagraph = false;
              a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
              setTimeout(function(){ typeWriter(id, ar); }, 50);
              
            }
          }
        }    
  $('.carousel').carousel();

  $('.carousel.carousel-slider').carousel({
    indicators: true,
    fullWidth: true
  });
    $( ".header_button" ).hover(
        function() {
          $( this ).addClass("pulse");
        }, function() {
          $( this ).removeClass("pulse");
        }
      );
      $( ".info_button" ).hover(
        function() {
          $( this ).addClass("pulse");
        }, function() {
          $( this ).removeClass("pulse");
        }
      );


      function getWidth(){
        $(window).resize(function() {
          if ($(window).width() < 1150) {
           
            $('.icon_col').hide();
            $('.data_col').removeClass('col s11 l8 ');
            $('.data_col').addClass('col s12 l12');
          } else {
            $('.icon_col').show();
           // $('.icon_col').addClass('col s1  l4');
           $('.data_col').removeClass('col s12 l12 ');
            $('.data_col').addClass('col s11 l8');
          }
      }).resize()
        
      }

      function getCard(){
        $(window).resize(function() {

          if ($(window).width() < 950) {
            $('.carousel-item ').removeClass('card_slider');
          }

        }).resize()
      }

   
});