document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').classList.toggle('hidden');
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Cuenta creada con éxito');
        } else {
            alert('Error al crear la cuenta');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});