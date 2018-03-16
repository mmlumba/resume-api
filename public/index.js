const email = document.getElementById("email");
const phone = document.getElementById("phone");
let curlUrlId = document.getElementById("curl-url");
curlUrlId.innerHTML = window.location.href + "resume";
email.textContent = "some@email.com"; // where env var goes later
phone.textContent = "123-456-7899"; // where env var goes later