const form = document.querySelector("#enquiryForm");
const animatedItems = document.querySelectorAll(
  ".service-grid article, .timeline article, .metric-grid article, .contact-card, .enquiry-form"
);
const clickableItems = document.querySelectorAll(
  "button, .primary-button, .secondary-button, .header-action, nav a, .social-link, .service-grid article"
);

animatedItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

animatedItems.forEach((item) => observer.observe(item));

clickableItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.remove("clicked");
    void item.offsetWidth;
    item.classList.add("clicked");

    if (!item.matches(".service-grid article")) return;

    document.querySelectorAll(".service-grid article").forEach((card) => {
      if (card !== item) card.classList.remove("selected");
    });
    item.classList.toggle("selected");

    const ripple = document.createElement("span");
    ripple.className = "tap-ripple";
    const rect = item.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    item.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const service = document.querySelector("#service").value;
  const message = document.querySelector("#message").value.trim();

  if (!name || !phone || !service || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Enter a valid 10-digit phone number.");
    return;
  }

  const text = [
    "New enquiry for Meeqat Digital Consulting",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Requirement: ${message}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/919629047680?text=${encodeURIComponent(text)}`;

  alert("Redirecting to WhatsApp...");
  window.open(whatsappUrl, "_blank", "noopener");

  form.reset();
});
