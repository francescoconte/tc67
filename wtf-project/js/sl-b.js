 $(document).ready(function() {
   var  tcsl = 0; tcsl2 = 0; tcsl3 = 0; tcsl4 = 0; tcsl5 = 0; tcsl6 = 0;
     
     
// слайдер в блоке тц


var tcTimer;

function startTc() {
   tcTimer = setInterval(function () {
     if (tcsl == 0) {
           $('#abs1-ph1').delay( 1500 ).fadeOut(); 
           $('#abs1-ph3').delay( 1500 ).fadeOut();
           $('#abs1-ph2').delay( 2000 ).fadeIn();
           tcsl = 1;
           
       } else { if (tcsl == 1) {   
           $('#abs1-ph1').delay( 1500 ).fadeOut();  
           $('#abs1-ph2').delay( 1500 ).fadeOut();         
           $('#abs1-ph3').delay( 2000 ).fadeIn();
           tcsl = 2;
           } else{ if (tcsl == 2) {
           $('#abs1-ph2').delay( 1500 ).fadeOut();    
           $('#abs1-ph3').delay( 1500 ).fadeOut();               
           $('#abs1-ph1').delay( 2000 ).fadeIn();
           tcsl = 0;
               
               
        } }}

    
   }, 2000);
}




$("#tc1").hover(
  function () {
    $('#abs1').delay(1000).fadeIn();
    $('#abs1-ph1').fadeIn(); 
    // start to automatically cycle slides
    startTc(); 
      
  },
  function () {
    $('#abs1').delay(100).fadeOut();
      clearInterval(tcTimer);
  }
);    
     
   
 var tcTimer2;

function startTc2() {
   tcTimer2 = setInterval(function () {
     if (tcsl2 == 0) {
           $('#abs2-ph1').delay( 1500 ).fadeOut(); 
           $('#abs2-ph3').delay( 1500 ).fadeOut();
           $('#abs2-ph2').delay( 2000 ).fadeIn();
           tcsl2 = 1;
           
       } else { if (tcsl2 == 1) {   
           $('#abs2-ph1').delay( 1500 ).fadeOut();  
           $('#abs2-ph2').delay( 1500 ).fadeOut();         
           $('#abs2-ph3').delay( 2000 ).fadeIn();
           tcsl2 = 2;
           } else{ if (tcsl2 == 2) {
           $('#abs2-ph2').delay( 1500 ).fadeOut();    
           $('#abs2-ph3').delay( 1500 ).fadeOut();               
           $('#abs2-ph1').delay( 2000 ).fadeIn();
           tcsl2 = 0;
               
               
        } }}

    
   }, 2000);
}    
     
     
     
     $("#tc2").hover(
  function () {
    $('#abs2').delay(1000).fadeIn();
    $('#abs2-ph1').fadeIn();   
    // start to automatically cycle slides
    startTc2(); 
      
  },
  function () {
    $('#abs2').delay(100).fadeOut();
      clearInterval(tcTimer2);
  }
);     
     
   
     
 var tcTimer3;

function startTc3() {
   tcTimer3 = setInterval(function () {
     if (tcsl3 == 0) {
           $('#abs3-ph1').delay( 1500 ).fadeOut(); 
           $('#abs3-ph3').delay( 1500 ).fadeOut();
           $('#abs3-ph2').delay( 2000 ).fadeIn();
           tcsl3 = 1;
           
       } else { if (tcsl3 == 1) {   
           $('#abs3-ph1').delay( 1500 ).fadeOut();  
           $('#abs3-ph2').delay( 1500 ).fadeOut();         
           $('#abs3-ph3').delay( 2000 ).fadeIn();
           tcsl3 = 2;
           } else{ if (tcsl3 == 2) {
           $('#abs3-ph2').delay( 1500 ).fadeOut();    
           $('#abs3-ph3').delay( 1500 ).fadeOut();               
           $('#abs3-ph1').delay( 2000 ).fadeIn();
           tcsl3 = 0;
               
               
        } }}

    
   }, 2000);
}    
     
     
     
     $("#tc3").hover(
  function () {
    $('#abs3').delay(1000).fadeIn();
    $('#abs3-ph1').fadeIn();   
    // start to automatically cycle slides
    startTc3(); 
      
  },
  function () {
    $('#abs3').delay(100).fadeOut();
      clearInterval(tcTimer3);
  }
);    
     
     
 var tcTimer4;

function startTc4() {
   tcTimer4 = setInterval(function () {
     if (tcsl4 == 0) {
           $('#abs4-ph1').delay( 1500 ).fadeOut(); 
           $('#abs4-ph3').delay( 1500 ).fadeOut();
           $('#abs4-ph2').delay( 2000 ).fadeIn();
           tcsl4 = 1;
           
       } else { if (tcsl4 == 1) {   
           $('#abs4-ph1').delay( 1500 ).fadeOut();  
           $('#abs4-ph2').delay( 1500 ).fadeOut();         
           $('#abs4-ph3').delay( 2000 ).fadeIn();
           tcsl4 = 2;
           } else{ if (tcsl4 == 2) {
           $('#abs4-ph2').delay( 1500 ).fadeOut();    
           $('#abs4-ph3').delay( 1500 ).fadeOut();               
           $('#abs4-ph1').delay( 2000 ).fadeIn();
           tcsl4 = 0;
               
               
        } }}

    
   }, 2000);
}    
     
     
     
     $("#tc4").hover(
  function () {
    $('#abs4').delay(1000).fadeIn();
    $('#abs4-ph1').fadeIn();   
    // start to automatically cycle slides
    startTc4(); 
      
  },
  function () {
    $('#abs4').delay(100).fadeOut();
      clearInterval(tcTimer4);
  }
);          

var tcTimer5;

function startTc5() {
   tcTimer5 = setInterval(function () {
     if (tcsl5 == 0) {
           $('#abs5-ph1').delay( 1500 ).fadeOut(); 
           $('#abs5-ph3').delay( 1500 ).fadeOut();
           $('#abs5-ph2').delay( 2000 ).fadeIn();
           tcsl5 = 1;
           
       } else { if (tcsl5 == 1) {   
           $('#abs5-ph1').delay( 1500 ).fadeOut();  
           $('#abs5-ph2').delay( 1500 ).fadeOut();         
           $('#abs5-ph3').delay( 2000 ).fadeIn();
           tcsl5 = 2;
           } else{ if (tcsl5 == 2) {
           $('#abs5-ph2').delay( 1500 ).fadeOut();    
           $('#abs5-ph3').delay( 1500 ).fadeOut();               
           $('#abs5-ph1').delay( 2000 ).fadeIn();
           tcsl5 = 0;
               
               
        } }}

    
   }, 2000);
}    
     
     
     
     $("#tc5").hover(
  function () {
    $('#abs5').delay(1000).fadeIn();
    $('#abs5-ph1').fadeIn();   
    // start to automatically cycle slides
    startTc5(); 
      
  },
  function () {
    $('#abs5').delay(100).fadeOut();
      clearInterval(tcTimer5);
  }
); 
     
     
     
var tcTimer6;

function startTc6() {
   tcTimer6 = setInterval(function () {
     if (tcsl6 == 0) {
           $('#abs6-ph1').delay( 1500 ).fadeOut(); 
           $('#abs6-ph3').delay( 1500 ).fadeOut();
           $('#abs6-ph2').delay( 2000 ).fadeIn();
           tcsl6 = 1;
           
       } else { if (tcsl6 == 1) {   
           $('#abs6-ph1').delay( 1500 ).fadeOut();  
           $('#abs6-ph2').delay( 1500 ).fadeOut();         
           $('#abs6-ph3').delay( 2000 ).fadeIn();
           tcsl6 = 2;
           } else{ if (tcsl6 == 2) {
           $('#abs6-ph2').delay( 1500 ).fadeOut();    
           $('#abs6-ph3').delay( 1500 ).fadeOut();               
           $('#abs6-ph1').delay( 2000 ).fadeIn();
           tcsl6 = 0;
               
               
        } }}

    
   }, 2000);
}    
     
     
     
     $("#tc6").hover(
  function () {
    $('#abs6').delay(1000).fadeIn();
    $('#abs6-ph1').fadeIn();   
    // start to automatically cycle slides
    startTc6(); 
      
  },
  function () {
    $('#abs6').delay(100).fadeOut();
      clearInterval(tcTimer6);
  }
); 
     
     
     
     
// слайдер в блоке тц     
     
     
});
     
    