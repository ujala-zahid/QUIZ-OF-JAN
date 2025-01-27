function switchForm(className, e) {
     e.preventDefault();
     const allForm = document.querySelectorAll('form');
     const form = document.querySelector(`form.${className}`);
     
     // Remove 'active' class from all forms
     allForm.forEach(item => {
         item.classList.remove('active');
     });
     
     // Add 'active' class to the current form
     form.classList.add('active');
 }
 
 // RegExp for strong password validation
 let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
 
 // Get all form elements
 const loginForm = document.querySelector('.login');
 const registerForm = document.querySelector('.register');
 
 // Register form submit event
 registerForm.addEventListener('submit', function(e) {
     e.preventDefault();
 
     const email = registerForm.querySelector('#register-email').value;
     const password = registerForm.querySelector('#register-password').value;
     const confirmPassword = registerForm.querySelector('#Confirmpass').value;
 
     // Email validation
     if (!email.includes('@')) {
         alert("Email is not valid");
         return;
     }
 
     // Password validation (strength check using regexp)
     if (!regexp.test(password)) {
         alert("Password must be strong and at least 8 characters long, containing upper/lowercase, a number, and a special character.");
         return;
     }
 
     // Confirm Password match validation
     if (password !== confirmPassword) {
         alert("Passwords do not match");
         return;
     }
 
     // Success message
     alert("Registration successful!");
     // Optionally, reset the form
     registerForm.reset();
 });
 
 // Login form submit event
 loginForm.addEventListener('submit', function(e) {
     e.preventDefault();
 
     const email = loginForm.querySelector('#login-email').value;
     const password = loginForm.querySelector('#login-password').value;
 
     // Email validation
     if (!email.includes('@')) {
         alert("Email is not valid");
         return;
     }
 
     // Password validation (strength check using regexp)
     if (!regexp.test(password)) {
         alert("Password must be strong and at least 8 characters long, containing upper/lowercase, a number, and a special character.");
         return;
     }
 
     // Success message
     alert("Login successful!");
     // Optionally, reset the form
     loginForm.reset();
 });
 