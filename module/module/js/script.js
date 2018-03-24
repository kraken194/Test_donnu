$(".squad").mouseenter(function() {
  $(".miniRight").css("visibility", "visible")
});

$(".triangle").mouseenter(function() {
  $(".miniLeft").css("visibility", "visible")
});

$(".squad").mouseenter(function() {
  $(".miniRight").animate({
    left: "10%",bottom: "40%",
  }, 500);
})

$(".triangle").mouseenter(function() {
  $(".miniLeft").animate({
    left: "8%",bottom: "40%",
  }, 500);
})
