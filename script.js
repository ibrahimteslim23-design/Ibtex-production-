const images = [
  "painting 1.jpg",
  "painting 2.jpg",
  "painting 3.jpg",
  "painting 4.jpg"
];

let current = 0;

const slide = document.getElementById("slide");

if (slide) {
    setInterval(function () {
        current = (current + 1) % images.length;
        slide.src = images[current];
    }, 3000);
}

function nextSlide() {
    const slide = document.getElementById("slide");
    if (!slide) return;

    current = (current + 1) % images.length;
    slide.src = images[current];
}

function prevSlide() {
    const slide = document.getElementById("slide");
    if (!slide) return;

    current = (current - 1 + images.length) % images.length;
    slide.src = images[current];
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

function sendQuote() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    let text = `Hello IBTEX PRODUCTION,

I would like to request a quotation.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Project Details:
${message}`;

  let url = "https://api.whatsapp.com/send?phone=2348129349291&text=" + encodeURIComponent(text);

window.location.href = url;

}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn){
    menuBtn.addEventListener("click", function(){
      if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
} else {
    navLinks.style.display = "block";
      }
    });
}

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

fades.forEach(section=>{
    observer.observe(section);
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}