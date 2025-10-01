document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const recipientEmail = 'manandugtal@gmail.com'; // Your email from the resume

        // Construct the mailto link
        const subject = encodeURIComponent(`Portfolio Message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        // Open the user's default email client (e.g., Gmail, Outlook, etc.)
        window.location.href = mailtoLink;

        // Provide feedback to the user
        formStatus.style.color = 'green';
        formStatus.textContent = 'Opening your email client... (If nothing happens, please check your browser\'s pop-up blocker or use the email address provided above.)';
        
        // Optionally, clear the form after a slight delay
        setTimeout(() => {
             contactForm.reset();
             formStatus.textContent = '';
        }, 3000);
    });
});
