var video = document.querySelector("#video"),
  button = document.querySelector("#button"),
  link = document.querySelector("#show");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

link.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".video__circle").click(function() {
  $(".video__wrp").addClass('video__hide');
  $(".video__play").addClass('video__show');
})

$(".video__link").click(function() {
  $(".video__wrp").addClass('video__hide');
  $(".video__play").addClass('video__show');
})
