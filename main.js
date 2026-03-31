// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form — basic client-side handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (!name || !email || !message) {
    feedback.textContent = 'Please fill out all fields.';
    feedback.className = 'form__feedback error';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.className = 'form__feedback error';
    return;
  }

  // Replace this with a real form submission (e.g. fetch to an API endpoint)
  feedback.textContent = "Thanks, " + name + "! We'll be in touch soon.";
  feedback.className = 'form__feedback success';
  this.reset();
});
