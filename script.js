function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

// EmailJS integration
emailjs.init("PZi7W7AxBLsWTtTLp");

const contactForm = document.getElementById("contact-form");

// Create a toast function
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = `toast ${type}`; // success or error
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const serviceID = "service_rkyotuj";
  const templateID = "template_9g5sh5d";

  // Disable button while sending
  const submitBtn = contactForm.querySelector("button[type=submit]");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  emailjs.sendForm(serviceID, templateID, this).then(
    function () {
      showToast("✅ Message sent successfully!", "success");
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    },
    function (error) {
      showToast("⚠️ Failed to send message. Try again.", "error");
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  );
});
