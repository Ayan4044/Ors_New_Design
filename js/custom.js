$(document).ready(function(){

  $(window).load(function () { // makes sure the whole site is loaded
    // $('#status').fadeOut(); // will first fade out the loading animation
    // $('#preloader').delay(50).fadeOut(100); // will fade out the white DIV that covers the website.
    // $('body').delay(50).css({
    //   'overflow': 'visible'
    // });

    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
          $(this).remove();
          $('#modal1').modal();
          $('#modal1').modal('open');
      });
  }

  
  })


  var arrLang = new Array();
        arrLang['en'] = new Array();
        arrLang['hi'] = new Array();
        arrLang['en']['home'] = ' Home';
        arrLang['en']['appointment'] = 'Appointment';
        arrLang['en']['dashboard'] = 'Dashboard';
        arrLang['en']['mainHeader'] = 'Online  Patient Registration System';
        arrLang['en']['mainHeaderContent'] = 'Now getting an OPD appointment, lab reports and blood availability in any government hospital has become online & easy.';
        arrLang['en']['boookAppoinment'] = 'Book Appointment Now';
        arrLang['en']['boookTeleconsulation'] = 'Book Teleconsultation Appointment';
        arrLang['en']['bloodAvailability'] = 'Blood Availability';
        arrLang['en']['payment'] = 'Payment';
        arrLang['en']['features'] = 'FEATURES';
        arrLang['en']['featureContent'] = ' Online Registration System (ORS) is a framework to link various hospitals across the country for Aadhaar based online registration and appointment system, where counter based OPD registration and appointment system through Hospital Management Information System (HMIS) has been digitalized. The application has been hosted on the cloud services of NIC. Portal facilitates online appointments with various departments of different Hospitals using eKYC data of Aadhaar number, if patient\'s mobile number is registered with UIDAI. And in case mobile number is not registered with UIDAI it uses patient\'s name. New Patient will get   appointment as well as Unique Health Identification (UHID) number. If Aadhaar number is already linked with UHID number, then appointment number will be given and UHID will remain the same.';
        arrLang['en']['appintmentProcess'] = 'Simple Appointment Process';
        arrLang['en']['appintmentProcessContent'] = 'For your first visit to the hospital, registration and appointment with the doctor are made simpler. All you have to do is verify yourself using Aadhaar Number, Select Hospital and Department, Select  date of Appointment and receive SMS for Appointment';
        arrLang['en']['hospitlaOnboarding'] = 'Hospital On Boarding';
        arrLang['en']['hospitlaOnboardingContnet'] = 'Hospitals can come on board this platform and provide their appointment slots for online booking by patients.   The system facilitates Hospitals to easily manage their registration and appointment process and monitor the flow of patients';
        arrLang['en']['dashboardReports'] = 'Dashboard Reports';
        arrLang['en']['dashboardContent'] = 'Total number of Hospitals for which appointment can be taken through web along with their departments for which online appointments can be taken can be seen in reports.  Detail reports showing information about New and Old patients taking appointments through this portal can be seen';
        arrLang['en']['whyOnBoard'] = 'Every Hospital has moved online, why stay behind?';
        arrLang['en']['Manual'] = 'ORS OnBoarding Manual';
        arrLang['en']['joinFree'] = 'Hospital Join Free';
        arrLang['en']['login'] = 'Hospital Login';
        arrLang['en']['numofHosp'] = 'Number of Hospitals';
        arrLang['en']['appointmentsToday'] = 'Appointments Taken Today';
        arrLang['en']['totalAppointments'] = 'Total Online Appointments';
        arrLang['en']['faq'] = 'Faqs';
        arrLang['en']['feedBack'] = 'Feedback';
        arrLang['en']['contact'] = 'Contact';
        arrLang['en']['modalOfficers'] = 'List of Modal Officers';
        arrLang['en']['lang'] = 'Languages';
        arrLang['en']['hin'] = 'Hindi';
        arrLang['en']['en'] = 'English';
       


        arrLang['hi']['home'] = ' होमपेज';
        arrLang['hi']['appointment'] = 'अपॉइंटमेंट';
        arrLang['hi']['dashboard'] = 'डैशबोर्ड';
       // arrLang['hi']['appointment'] = 'Make an Appointment';
        arrLang['hi']['mainHeader'] = 'ऑनलाइन रोगी पंजीकरण प्रणाली';
        arrLang['hi']['mainHeaderContent'] = 'अब ओपीडी नियुक्ति, लैब रिपोर्ट और किसी भी सरकारी अस्पताल में रक्त की उपलब्धता ऑनलाइन और आसान हो गई है।';
        arrLang['hi']['boookAppoinment'] = 'अब बुक अपॉइंटमेंट';
        arrLang['hi']['boookTeleconsulation'] = 'टेलीकॉन्स्लेशन अपॉइंटमेंट बुक करें';
        arrLang['hi']['bloodAvailability'] = 'रक्त की उपलब्धता';
        arrLang['hi']['payment'] = 'भुगतान';
        arrLang['hi']['features'] = 'विशेषताएं';
        arrLang['hi']['featureContent'] = ' ऑनलाइन पंजीकरण प्रणाली (ओआरएस) आधार आधारित ऑनलाइन पंजीकरण और नियुक्ति प्रणाली के लिए देश भर के विभिन्न अस्पतालों को जोड़ने की एक रूपरेखा है, जहां अस्पताल प्रबंधन सूचना प्रणाली (एचएमआईएस) के माध्यम से काउंटर आधारित ओपीडी पंजीकरण और नियुक्ति प्रणाली को डिजिटल किया गया है। आवेदन को एनआईसी की क्लाउड सेवाओं पर होस्ट किया गया है। पोर्टल आधार संख्या के eKYC डेटा का उपयोग करके विभिन्न अस्पतालों के विभिन्न विभागों के साथ ऑनलाइन नियुक्तियों की सुविधा देता है, यदि रोगी का मोबाइल नंबर UIDAI के साथ पंजीकृत है। और यदि मोबाइल नंबर UIDAI के पास पंजीकृत नहीं है, तो वह रोगी के नाम का उपयोग करता है। नई पेशेंट को अप्वाइंटमेंट के साथ-साथ यूनीक हेल्थ आइडेंटिफिकेशन (UHID) नंबर मिलेगा। अगर आधार नंबर पहले से ही UHID नंबर से जुड़ा हुआ है, तो नियुक्ति नंबर दिया जाएगा और UHID वही रहेगा।';
        arrLang['hi']['appintmentProcess'] = 'सरल नियुक्ति प्रक्रिया';
        arrLang['hi']['appintmentProcessContent'] = 'अस्पताल में आपकी पहली यात्रा के लिए, डॉक्टर के साथ पंजीकरण और नियुक्ति को सरल बनाया गया है। आपको बस अपना आधार नंबर, अस्पताल और विभाग का चयन करके खुद को सत्यापित करना है, नियुक्ति की तारीख का चयन करें और नियुक्ति के लिए एसएमएस प्राप्त करें';
        arrLang['hi']['hospitlaOnboarding'] = 'अस्पताल ऑन-बोर्डिंग';
        arrLang['hi']['hospitlaOnboardingContnet'] = 'अस्पताल इस प्लेटफ़ॉर्म पर आ सकते हैं और रोगियों द्वारा ऑनलाइन बुकिंग के लिए अपनी नियुक्ति स्लॉट प्रदान कर सकते हैं। यह प्रणाली अस्पतालों को आसानी से उनके पंजीकरण और नियुक्ति प्रक्रिया का प्रबंधन करने और रोगी के प्रवाह की निगरानी करने की सुविधा प्रदान करती हैs';
        arrLang['hi']['dashboardReports'] = 'डैशबोर्ड रिपोर्टों';
        arrLang['hi']['dashboardContent'] = 'कुल कितने अस्पताल हैं जिनकी नियुक्ति वेब के माध्यम से उनके विभागों के साथ की जा सकती है जिसके लिए ऑनलाइन नियुक्तियां की जा सकती हैं। इस पोर्टल के माध्यम से नियुक्ति लेने वाले नए और पुराने रोगियों के बारे में जानकारी दिखाने वाली विस्तार रिपोर्ट देखी जा सकती है';
        arrLang['hi']['whyOnBoard'] = 'हर अस्पताल ऑनलाइन चला गया, क्यों पीछे रहे?';
        arrLang['hi']['Manual'] = 'ओआरएस ऑनबीयरिंग मैनुअल';
        arrLang['hi']['joinFree'] = 'अस्पताल में निशुल्क';
        arrLang['hi']['login'] = 'अस्पताल लॉगिन';
        arrLang['hi']['numofHosp'] = 'अस्पतालों की संख्या ';
        arrLang['hi']['appointmentsToday'] = 'आज ही नियुक्त किए गए';
        arrLang['hi']['totalAppointments'] = 'कुल ऑनलाइन नियुक्ति';
        arrLang['hi']['faq'] = 'पूछे जाने वाले प्रश्न';
        arrLang['hi']['feedBack'] = 'प्रतिपुष्टि';
        arrLang['hi']['contact'] = 'संपर्क करें';
        arrLang['hi']['modalOfficers'] = 'मॉडल अधिकारियों की सूची';
        arrLang['hi']['lang'] = 'भाषा';
        arrLang['hi']['hin'] = 'हिंदी';
        arrLang['hi']['en'] = 'अंग्रेज़ी';
       

  getWidth();
  getCard();
 
  //language translator
  $(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');
        console.log("Language Changed")

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
});


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