const progressBar = document.getElementById("progressBar");
const content = document.getElementById("container");

window.addEventListener("scroll", () => {
  var totalHeight = document.body.scrollHeight - window.innerHeight;

  // Get the current scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate the progress
  var progress = (scrollPosition / totalHeight) * 100;

  // Update the width of the progress bar
  progressBar.style.width = progress + "%";
});
