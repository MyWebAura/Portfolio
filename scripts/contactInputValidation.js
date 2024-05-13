function validateInput(inputId, errorMessageId) {
  var inputElement = document.getElementById(inputId);
  var errorMessageElement = document.getElementById(errorMessageId);
  if (inputElement.checkValidity()) {
    errorMessageElement.textContent = "";
  }
}
function validateForm() {
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var messageInput = document.getElementById("messageInput");
  var errorMessage1 = document.getElementById("name-input-error");
  var errorMessage2 = document.getElementById("email-input-error");
  var errorMessage3 = document.getElementById("message-input-error");

  if (!nameInput.checkValidity()) {
    errorMessage1.textContent = "Please enter name correctly.";
    nameInput.focus();
    return;
  }
  if (!emailInput.checkValidity()) {
    errorMessage2.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }
  if (!messageInput.checkValidity()) {
    errorMessage3.textContent = "Please write somethig as a message.";
    messageInput.focus();
    return;
  }
  setTimeout(() => {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }, 1700);
  return true;
}
let sendBtn = document.querySelector(".sendBtn");

sendBtn.addEventListener("click", () => {
  if (validateForm()) {
    sendBtn.innerHTML = "Sending...";
    setTimeout(() => {
      sendBtn.innerHTML = "Sent";
      sendBtn.style.backgroundColor = "#17ccd3";
      setTimeout(() => {
          sendBtn.innerHTML = "Send";
          sendBtn.style.backgroundColor = "";
      }, 1000);
    }, 1700);
  }
});
