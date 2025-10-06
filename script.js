AOS.init({
    duration: 1000, // Longer duration for smoother effect
    easing: 'ease-out-back', // More appealing easing
    once: true,
    delay: 50 // Slight delay on all animations
});
feather.replace();

// Mobile menu toggle
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    // Toggle the mobile menu container
    document.querySelector('.mobile-menu').classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Hide mobile menu on click
        document.querySelector('.mobile-menu')?.classList.add('hidden'); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation scroll effects: Added backdrop-filter for a modern frosted look
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('bg-opacity-95', 'backdrop-blur-sm', 'shadow-lg');
      nav.classList.remove('bg-opacity-100');
    } else {
      nav.classList.remove('bg-opacity-95', 'backdrop-blur-sm', 'shadow-lg');
      nav.classList.add('bg-opacity-100');
    }
  });

// Particles.js configuration
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 60, // Fewer particles for a cleaner look
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#d1fae5" // Light green/white color
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": true, // Enable slight animation on opacity
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true, // Enable slight animation on size
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#e0f7e9", // Light line color
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3, // Slower movement
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab" // 'Grab' is more interactive
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
            "distance": 200,
            "line_linked": {
                "opacity": 1
            }
        },
        "push": {
          "particles_nb": 4
        }
      }
    }
  });

// Initialize EmailJS with your public key
(function() {
  emailjs.init("b0VxpN2LhYrhV8Yw_"); // 🔹 replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Change button text or show status
    status.textContent = "Sending...";

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send email via EmailJS
    emailjs.send("service_cxl50jr", "template_1853bmk", params)
      .then(() => {
        status.textContent = "✅ Message sent successfully!";
        status.classList.remove("text-red-600");
        status.classList.add("text-green-600");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        status.textContent = "❌ Failed to send. Try again later.";
        status.classList.remove("text-green-600");
        status.classList.add("text-red-600");
      });
  });
});