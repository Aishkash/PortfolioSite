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
const SERVICE_ID = 'service_cxl50jr';
const TEMPLATE_ID = 'template_rtc9fvt';
const PUBLIC_KEY = 'b0VxpN2LhYrhV8Yw_';

// Initialize EmailJS with your Public Key
emailjs.init(PUBLIC_KEY);



const contactForm = document.getElementById('contact-form');
const statusMessage = document.getElementById('status-message');
const submitButton = document.getElementById('submit-button');


contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // 1. Update UI for sending state
    submitButton.innerHTML = '<i data-feather="loader" class="mr-2 h-5 w-5 animate-spin"></i> Sending...';
    submitButton.disabled = true;
    statusMessage.textContent = 'Sending message...';
    statusMessage.classList.remove('text-red-600', 'text-green-600');
    statusMessage.classList.add('text-gray-500');


    // 2. Send the form data using EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, contactForm)
        .then((response) => {
            // Success
            console.log('SUCCESS!', response.status, response.text);
            
            // Clear form and show success message
            contactForm.reset();
            statusMessage.textContent = 'Message sent successfully! Thank you. 😊';
            statusMessage.classList.remove('text-gray-500');
            statusMessage.classList.add('text-green-600');
            
            // 3. Reset button after a delay
            setTimeout(() => {
                submitButton.innerHTML = '<i data-feather="send" class="mr-2 h-5 w-5"></i> Send Message';
                submitButton.disabled = false;
                feather.replace(); // Re-initialize icons
                statusMessage.textContent = '';
            }, 3000);
            
        }, (error) => {
            // Failure
            console.error('FAILED...', error);
            
            // Show failure message
            statusMessage.textContent = 'FAILED to send. Please check your network and try again.';
            statusMessage.classList.remove('text-gray-500');
            statusMessage.classList.add('text-red-600');
            
            // 3. Reset button immediately
            submitButton.innerHTML = '<i data-feather="send" class="mr-2 h-5 w-5"></i> Send Message';
            submitButton.disabled = false;
            feather.replace(); // Re-initialize icons
        });
});

// NOTE: Ensure feather.replace() is called globally on page load 
// to render the send icon and the loader animation.