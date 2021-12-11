/* Contact form submission result handling */

var form = document.getElementById("contact-form");
var container = document.getElementById("contact-form-container");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contact-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      form.hidden = true;
      status.innerHTML = "Thank you for your message!";
      container.classList.add("border-success");
      form.reset();
    })
    .catch((error) => {
      form.hidden = true;
      status.innerHTML = "Oops! There was a problem submitting your form.";
      container.classList.add("border-danger");
    });
}

form.addEventListener("submit", handleSubmit);

/* End of contact form script */