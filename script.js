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
// --- EMAILJS CREDENTIALS ---
// const SERVICE_ID = 'service_cxl50jr';
// const TEMPLATE_ID = 'template_rtc9fvt';
// const PUBLIC_KEY = 'b0VxpN2LhYrhV8Yw_';

// Replace with your actual EmailJS details
const serviceID = "service_jnv8boa";
const templateID = "template_rtc9fvt";

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID,templateID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('status-message').innerText = "Message sent successfully!";
        }, function(error) {
            console.error('FAILED...', error);
            document.getElementById('status-message').innerText = "Failed to send message. Please try again.";
        });
});

