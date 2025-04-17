$(document).ready(function() {
  $(".thumbnails img").click(function() {
    var newSrc = $(this).attr("src").replace("150x100", "600x400");
    $("#main").attr("src", newSrc);
  });
});