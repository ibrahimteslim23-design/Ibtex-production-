const images = [
  "painting 1.jpg",
  "painting 2.jpg",
  "painting 3.jpg",
  "painting 4.jpg"
];

let current = 0;

setInterval(function () {
    current = (current + 1) % images.length;
    document.getElementById("slide").src = images[current];
}, 3000);

function nextSlide(){
    current = (current + 1) % images.length;
    document.getElementById("slide").src = images[current];
}

function prevSlide(){
    current = (current - 1 + images.length) % images.length;
    document.getElementById("slide").src = images[current];
}

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        darkModeBtn.innerHTML = "☀️";
    }

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkModeBtn.innerHTML = "🌙";
        }

    });

}