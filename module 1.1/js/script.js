$(".squad").mouseenter(function() {
  $(".miniRight").css("visibility", "visible")
});

$(".triangle").mouseenter(function() {
  $(".miniLeft").css("visibility", "visible")
});


$(".squad").mouseenter(function() {
  $(".miniRight").animate({ left: "10%",bottom: "90%", }, 500);
  $(".miniRight").animate({ left: "10%",bottom: "10%", }, 500);
})

$(".triangle").mouseenter(function() {
  $(".miniLeft").animate({left: "90%",bottom: "10%",}, 500);
  $(".miniLeft").animate({left: "10%",bottom: "5%",}, 500);
})
