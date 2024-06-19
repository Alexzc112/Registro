document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password2').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault();
    }
});
