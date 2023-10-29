var navHeight = $('nav').outerHeight();
$(document).ready(function () {    
  $("main").css('margin-top', navHeight);
});

function navTo(href) {
  $('nav a.active').removeClass('active');
  
  $(`nav a[href='${href}']`).addClass('active');
}

function scrollTo(href){
  $("html, body").animate({ scrollTop: $(href).position().top - navHeight + 1}, 300);
}

$('a.nav-link').click(function (e) { 
 
  var href = $(this).attr("href");
  
  scrollTo(href);
});   


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);