function sendQuote() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let service = document.getElementById("service").value;
let project = document.getElementById("message").value;

let message =
"Hello IBTEX PRODUCTION\n\n" +
"My Name: " + name + "\n" +
"Phone: " + phone + "\n" +
"Email: " + email + "\n" +
"Service: " + service + "\n" +
"Project: " + project;

  let url =
"https://api.whatsapp.com/send?phone=2348129349291&text=" +
encodeURIComponent(message);

window.location.href = url;

}
