const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");

// Check Local Storage for Theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.remove("dark");
  toggleBtn.textContent = "🌙";
} else {
  // Default to dark
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// Scroll Spy (Highlight Active Nav Link)
const sections = document.querySelectorAll("section, header"); // Include header for "Home"
const navLinksList = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150; // Offset for navbar height
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinksList.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message, I'll get back to you soon!");
  this.reset();
});

// Hero Animation on Load
window.addEventListener("load", () => {
  const heroElements = document.querySelectorAll(".hero-animate");
  heroElements.forEach(el => el.classList.add("show"));
});