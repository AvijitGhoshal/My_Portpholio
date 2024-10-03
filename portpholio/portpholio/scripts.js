// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('number').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || mobileNumber === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    this.reset(); // Clear the form
});
