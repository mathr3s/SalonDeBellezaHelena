
(() => {
    'use strict'

    // Obtener todos los formularios
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function onSubmit(event) {
    event.preventDefault();
  
    var form = document.getElementById("frm_contacto");
    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return false;
    }
  
    var emailInput = document.getElementById("email");
    var emailValidationMessage = document.getElementById("emailValidation");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      emailValidationMessage.style.display = "block";
      return false;
    }
  
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
  
    return false;
  }
  
