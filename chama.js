const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //getting the values from the form fields
    const username = document.getElementById('username').ariaValueMax;
    const password = document.getElementById('password').ariaValueMax;

    //these values will be replaced upon user entering their details
    //or after creating their account

    if (username == 'yourusername' && password == 'yourpassword') {
        message.textContent = 'Welcome,Redirecting...';
        //redirecting to the home page
        setTimeout(() => {
            window.location.href = 'home.html'; //replace with the url for home page
        }, 2000);
    } else {
        message.textContent = 'invalid username or password. Please Try Again';
    }
});