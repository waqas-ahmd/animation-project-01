var animation = bodymovin.loadAnimation({
  container: document.getElementById("player"), // Required
  path: "//res/template-1.json", // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "Animation", // Name for future reference. Optional.
});

animation.play();
