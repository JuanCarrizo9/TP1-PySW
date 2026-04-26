// CONTACTO - Validacion y envio con jQuery

$(document).ready(function() {

    // VALIDAR NOMBRE
    $('#nombre').on('input', function() {
        var valor = $(this).val().trim();
        if (valor.length === 0) {
            setError($(this), $('#error-nombre'), 'El nombre es obligatorio');
        } else if (valor.length < 3) {
            setError($(this), $('#error-nombre'), 'Minimo 3 caracteres');
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(valor)) {
            setError($(this), $('#error-nombre'), 'Solo se permiten letras');
        } else {
            setValid($(this), $('#error-nombre'));
        }
        verificarFormulario();
    });

    // VALIDAR EMAIL
    $('#email').on('input', function() {
        var valor = $(this).val().trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (valor.length === 0) {
            setError($(this), $('#error-email'), 'El email es obligatorio');
        } else if (!emailRegex.test(valor)) {
            setError($(this), $('#error-email'), 'Ingresa un email valido');
        } else {
            setValid($(this), $('#error-email'));
        }
        verificarFormulario();
    });

    // VALIDAR TELEFONO (opcional)
    $('#telefono').on('input', function() {
        var valor = $(this).val().trim();
        if (valor.length > 0 && !/^[\d\s\-\+\(\)]+$/.test(valor)) {
            setError($(this), $('#error-telefono'), 'Solo numeros, espacios y guiones');
        } else if (valor.length > 0 && valor.replace(/\D/g, '').length < 7) {
            setError($(this), $('#error-telefono'), 'Minimo 7 digitos');
        } else {
            setValid($(this), $('#error-telefono'));
        }
        verificarFormulario();
    });

    // VALIDAR ASUNTO
    $('#asunto').on('change', function() {
        if (!$(this).val()) {
            setError($(this), $('#error-asunto'), 'Selecciona un asunto');
        } else {
            setValid($(this), $('#error-asunto'));
        }
        verificarFormulario();
    });

    // VALIDAR MENSAJE + CONTADOR
    $('#mensaje').on('input', function() {
        var valor = $(this).val();
        var largo = valor.length;

        // Contador
        $('#char-counter').text(largo + ' / 500')
            .removeClass('warning danger')
            .addClass(largo >= 450 ? 'danger' : largo >= 350 ? 'warning' : '');

        if (valor.trim().length === 0) {
            setError($(this), $('#error-mensaje'), 'El mensaje es obligatorio');
        } else if (valor.trim().length < 10) {
            setError($(this), $('#error-mensaje'), 'Minimo 10 caracteres');
        } else {
            setValid($(this), $('#error-mensaje'));
        }
        verificarFormulario();
    });

    // VALIDAR TERMINOS
    $('#terminos').on('change', function() {
        $('#error-terminos').text($(this).is(':checked') ? '' : 'Debes aceptar los terminos');
        verificarFormulario();
    });

    // HELPERS
    function setError(input, errorEl, msg) {
        input.removeClass('is-valid').addClass('is-invalid');
        errorEl.text(msg);
    }

    function setValid(input, errorEl) {
        input.removeClass('is-invalid').addClass('is-valid');
        errorEl.text('');
    }

    function verificarFormulario() {
        var ok = $('#nombre').hasClass('is-valid')
            && $('#email').hasClass('is-valid')
            && !$('#telefono').hasClass('is-invalid')
            && $('#asunto').hasClass('is-valid')
            && $('#mensaje').hasClass('is-valid')
            && $('#terminos').is(':checked');
        $('#btnEnviar').prop('disabled', !ok);
    }

    // ENVIO
    $('#formContacto').on('submit', function(e) {
        e.preventDefault();
        $('#formOverlay').addClass('active');
        $('#btnEnviar').prop('disabled', true);

        setTimeout(function() {
            $('#formOverlay').removeClass('active');
            $('#formContacto')[0].reset();
            $('#formContacto .form-control, #formContacto .form-select').removeClass('is-valid is-invalid');
            $('#char-counter').text('0 / 500').removeClass('warning danger');
            $('.error-msg').text('');
            $('#btnEnviar').prop('disabled', true);

            var modal = new bootstrap.Modal($('#modalConfirmacion')[0]);
            modal.show();
        }, 2000);
    });

});
