// alert("hello");
let header = $(".footer-links-wrapper h3");

// console.log(header.next());

header.click(function () {
  if ($(window).width() <= 768) {
    header.next("ul").not($(this).next()).slideUp();
    header.not($(this)).removeClass("expanded");
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  }
});

$(window).resize(function () {
  if ($(window).width() > 768) {
    header.next("ul").show();
  }
});
