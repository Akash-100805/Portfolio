// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when a nav item is clicked
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Calculate the target position with offset for the fixed navbar
        const navbarHeight = document.querySelector("#navbar").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        // Smooth scroll to the target
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Contact form submission with EmailJS
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Basic form validation
      if (!name || !email || !message) {
        alert("Please fill in all fields")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address")
        return
      }

      // Here you would typically use EmailJS to send the email
      // For demonstration purposes, we'll just show a success message
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()

      /* 
            // Uncomment and configure this section when you have EmailJS set up
            emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
            
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };
            
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }, function(error) {
                    alert('Oops! Something went wrong. Please try again later.');
                    console.error('EmailJS error:', error);
                });
            */
    })
  }

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 50) {
      navbar.style.padding = "0.5rem 2rem"
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.padding = "1rem 2rem"
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
    }
  })

  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".qualification-card, .skill-item, .project-card")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      } else {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
      }
    })
  }

  // Initial call to animate elements in view
  animateOnScroll()

  // Call the animation function on scroll
  window.addEventListener("scroll", animateOnScroll)
})

