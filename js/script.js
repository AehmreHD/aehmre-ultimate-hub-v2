const menuButton = document.getElementById("menuButton");
const topbarLinks = document.getElementById("topbarLinks");

menuButton.addEventListener("click", function() {
    topbarLinks.classList.toggle("open");
});
