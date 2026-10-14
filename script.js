const form = document.querySelector("#email-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  if (!email) return;
  message.textContent = "Thank you! Your email has been entered. Connect a backend to receive submissions.";
  form.reset();
});
