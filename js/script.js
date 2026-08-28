const menuButton = document.getElementById("menuButton");
const topbarLinks = document.getElementById("topbarLinks");

menuButton.addEventListener("click", function() {
    topbarLinks.classList.toggle("open");
});

const links = topbarLinks.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        topbarLinks.classList.remove("open");
    });
});
