// Page loadinmg animation
if (".loader".length) {
  // show Preloader until the website ist loaded
  $(window).on("load", function() {
    $(".loader").fadeOut("slow");
    scrollFunction();
  });
}

/* Onpage linkng smooth effect */
$('a[href^="#"]').on("click", function(event) {
  var target = $($(this).attr("href"));

  if ($(this).attr("href") === "#carouselExampleCaptions") {
    return;
  }

  if (target.length) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: target.offset().top
      },
      1000
    );
  }
});

// Sticky Header
$(window).scroll(scrollFunction);

function scrollFunction() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".top-nav").addClass("light-header");
  } else {
    $(".top-nav").removeClass("light-header");
  }
}
