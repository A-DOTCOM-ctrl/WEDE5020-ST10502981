// WEDE5020 Part 3 - ST10502981 - Delicious Bakery - All JS Features

document.addEventListener("DOMContentLoaded", function() {
  
  // 1. LEAFLET MAP - Required for marks
  const mapDiv = document.getElementById("map");
  if (mapDiv) {
    var map = L.map('map').setView([-33.9249, 18.4241], 13); // Cape Town
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([-33.9249, 18.4241]).addTo(map)
      .bindPopup('<b>Delicious Bakery</b><br>Freshly baked daily in Cape Town')
      .openPopup();
  }

  // 2. FAQ ACCORDION - Required for marks
  const accordions = document.querySelectorAll(".accordion-btn");
  accordions.forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });

  // 3. LIGHTBOX GALLERY - Required for marks
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    document.querySelectorAll(".gallery-img").forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  // 4. SEARCH / FILTER - Required for marks (filters product cards)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", function() {
      const filter = this.value.toLowerCase();
      const items = document.querySelectorAll(".product-card");
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
      });
    });
  }

  // 5. FORM VALIDATION - Required for marks (enquiry.html)
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Support both id="email" and id="email1" - you have email1
      const nameEl = document.getElementById("name");
      const emailEl = document.getElementById("email") || document.getElementById("email1");
      const phoneEl = document.getElementById("phone");
      const messageEl = document.getElementById("message");

      const name = nameEl ? nameEl.value.trim() : "";
      const email = emailEl ? emailEl.value.trim() : "";
      const phone = phoneEl ? phoneEl.value.trim() : "";
      const message = messageEl ? messageEl.value.trim() : "";
      
      if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all required fields *");
        return;
      }
      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
      }
      if (phone.length < 10) {
        alert("Please enter a valid phone number (10 digits).");
        return;
      }
      alert("Thank you " + name + "! Your cake enquiry has been received. We will contact you within 24 hours.");
      enquiryForm.reset();
    });
  }
});