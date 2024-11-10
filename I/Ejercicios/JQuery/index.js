document.getElementById('register-btn').addEventListener('click', () => {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Validaciones
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;

  // Validar Nombre y Apellidos
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(name) || name.split(' ').length < 2) {
    document.getElementById('name-error').innerText = 'Ingrese al menos dos palabras con solo letras.';
    isValid = false;
  } else {
    document.getElementById('name-error').innerText = '';
  }

  // Validar Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('email-error').innerText = 'Formato de email inválido.';
    isValid = false;
  } else {
    document.getElementById('email-error').innerText = '';
  }

  // Validar Teléfono (exactamente 9 dígitos, sin espacios)
  if (!/^\d{9}$/.test(phone)) {
    document.getElementById('phone-error').innerText = 'El teléfono debe tener exactamente 9 dígitos y no contener espacios.';
    isValid = false;
  } else {
    document.getElementById('phone-error').innerText = '';
  }

  // Validar Contraseña
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById('password-error').innerText = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.';
    isValid = false;
  } else {
    document.getElementById('password-error').innerText = '';
  }

  if (isValid) {
    document.getElementById('success-message').style.display = 'block';

    // Ocultar el formulario y mostrar la pantalla principal tras un breve delay
    setTimeout(() => {
      document.getElementById('success-message').style.display = 'none';
      
      // Resetear el formulario después del registro exitoso
      document.getElementById('form').reset();
      document.getElementById('register-form').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      
      // Mensajes de error (limpia)
      document.getElementById('name-error').innerText = '';
      document.getElementById('email-error').innerText = '';
      document.getElementById('phone-error').innerText = '';
      document.getElementById('password-error').innerText = '';
    }, 2000); 
  }
});
