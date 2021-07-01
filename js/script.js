var animation = bodymovin.loadAnimation({
  container: document.getElementById("player"),
  path: "./res/template-1.json",
  renderer: "svg",
  loop: true,
  autoplay: false,
  name: "Animation",
});

animation.play();
