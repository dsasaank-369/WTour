$(document).ready(function() {


    setTimeout(function(){
        $('#loading').hide();
    }, 3000);

});



let aero=document.getElementById("aero");
window.addEventListener('scroll',function () {
     var temp=window.scrollY;
     aero.style.left=temp *0.33 + 'px';
})

$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

		$(this).addClass('transition');
	}, function(){

		$(this).removeClass('transition');
	});
});



$(document).ready(function(){

  var div1 = $("#divToShowHide1");
  var div2 = $("#divToShowHide3");

  $(window).scroll(function () {
   var windowpos = $(window).scrollTop();

   if (windowpos >=  200) {
     div1.css("visibility","visible");
     div2.css("visibility","visible");

   }

   else {
    div1.css("visibility","hidden");
    div2.css("visibility","hidden");
   }

 });
});


$(document).ready(function(){

  var div3 = $("#divToShowHide2");
  var div4 = $("#divToShowHide4");

  $(window).scroll(function () {
   var windowpos = $(window).scrollTop();

   if (windowpos >=  280) {
     div3.css("visibility","visible");
     div4.css("visibility","visible");

   }

   else {
    div3.css("visibility","hidden");
    div4.css("visibility","hidden");
   }

 });
});

$(document).ready(function(){
    $(window).scroll(function () {
      if($(window).scrollTop()<360)
      {

          $(".arrow").css("visibility","hidden");}

          else
          {
            $(".arrow").css("visibility","visible");
          }
        });
        });

        $( document ).ready(function() {
        $('.arrow').on('click', function(){
          $('html, body').animate({ scrollTop:'0px',display:'none'},{duration: 500,easing: 'linear'});

        });
        });
