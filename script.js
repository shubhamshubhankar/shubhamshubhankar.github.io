// script.js
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  // Validate form inputs
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  if (name === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  if (email === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  }

  // Email validation using regular expression
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email.');
    emailInput.focus();
    return false;
  }

  if (message === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return false;
  }

  // Form submission code (e.g., sending data to server or storing in database)
  alert('Form submitted successfully!');
  document.getElementById('contact-form').reset();
}

