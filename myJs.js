var currentStep;

document.addEventListener("DOMContentLoaded", function () {
        
    if (localStorage.getItem('cupCakePage')) {        
        currentStep =   localStorage['cupCakePage'];
           
    } else {        
        currentStep = "#step1";     
    }

    $(".startbtn").on("click", function (ev) {

        ev.preventDefault();      
        $.mobile.changePage(currentStep);            
     
    });

    $('#colBut a').on("click", clickHandler);
    $(".next").on("click", clickHandler);
    $(".backbutton").on("click", clickHandler);

});

  function clickHandler(ev) {
    
    ev.preventDefault();
      
    currentStep = $(this).attr("href");
      
    $.mobile.changePage(currentStep);
      
    localStorage.setItem("cupCakePage", currentStep);
}