document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Validation for Full name
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullName)) {
        message.style.color = 'red';
        message.textContent = 'Full name can only contain letters and spaces.';
        return;
    }

    // Email validation 
    if (!email.includes('@') || !email.includes('.')) {
        message.style.color = 'red';
        message.textContent = 'Please enter a valid email address.';
        return;
    }

    // Mobile number validation (10 digits starting with 8, 9, or 7)
    const mobileRegex = /^[789][0-9]{9}$/;
    if (!mobileRegex.test(mobile)) {
        message.style.color = 'red';
        message.textContent = 'Mobile number must be 10 digits and start with 7, 8, or 9.';
        return;
    }

    // Username validation
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    if (!usernameRegex.test(username)) {
        message.style.color = 'red';
        message.textContent = 'Username must be 3-15 alphanumeric characters.';
        return;
    }

    // Password validation (at least 8 characters, containing at least one letter and one number)
    if (password.length < 8) {
        message.style.color = 'red';
        message.textContent = 'Password must be at least 8 characters long.';
        return;
    }
    if (!/[A-Za-z]/.test(password)) {
        message.style.color = 'red';
        message.textContent = 'Password must contain at least one letter.';
        return;
    }
    if (!/[0-9]/.test(password)) {
        message.style.color = 'red';
        message.textContent = 'Password must contain at least one number.';
        return;
    }

    // Display success message
    message.style.color = 'purple';
    message.textContent = `User ${username} registered successfully!`;
});
