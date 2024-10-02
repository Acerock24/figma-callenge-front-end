// Obtener elementos del formulario
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

// Obtener elementos para mostrar errores
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

// Validaciones
function validateName() {
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    nameError.textContent = 'El campo Nombre no puede estar vacío.';
    return false;
  } else if (nameValue.length > 50) {
    nameError.textContent = 'El campo Nombre no puede tener más de 50 caracteres.';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  if (emailValue === '') {
    emailError.textContent = 'El campo Correo Electrónico no puede estar vacío.';
    return false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'El correo electrónico no tiene un formato válido.';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validateSubject() {
  const subjectValue = subjectInput.value.trim();
  if (subjectValue === '') {
    subjectError.textContent = 'El campo Asunto no puede estar vacío.';
    return false;
  } else if (subjectValue.length > 50) {
    subjectError.textContent = 'El campo Asunto no puede tener más de 50 caracteres.';
    return false;
  } else {
    subjectError.textContent = '';
    return true;
  }
}

function validateMessage() {
  const messageValue = messageInput.value.trim();
  if (messageValue === '') {
    messageError.textContent = 'El campo Mensaje no puede estar vacío.';
    return false;
  } else if (messageValue.length > 300) {
    messageError.textContent = 'El campo Mensaje no puede tener más de 300 caracteres.';
    return false;
  } else {
    messageError.textContent = '';
    return true;
  }
}

// Habilitar o deshabilitar el botón de enviar
function checkFormValidity() {
  if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Añadir eventos de validación
nameInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);
subjectInput.addEventListener('input', checkFormValidity);
messageInput.addEventListener('input', checkFormValidity);

// Evitar el envío del formulario si no es válido
form.addEventListener('submit', function (event) {
  if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
    event.preventDefault(); // Evita que el formulario se envíe
    checkFormValidity();
  }
});
