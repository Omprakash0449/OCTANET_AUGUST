const signinForm = document.getElementById('signin-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your authentication logic here
    console.log(`Username: ${username}, Password: ${password}`);
});