document.getElementById('registrar-btn').addEventListener("click",function(e){
var nombre_usuario = document.getElementById('nombre_usuario');
var correo_electronico = document.getElementById('correo_usuario');
var password1 = document.getElementById('password_usuario');
var password2 = document.getElementById('password_usuario2');

if(validarCorreo(correo_electronico)){
    if(password1.value == password2.value){
        var formdata = new FormData();
        formdata.append('correo_usuario_name',correo_usuario.value);
        formdata.append('nombre_usuario_name',nombre_usuario.value);
        formdata.append('password_usuario_name',password1.value);

        $.ajax({
            type: "POST",
            url: "../back-end/registro.php",
            data: formdata,
            dataType: "html",
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                console.log(response);
                alert("Usuario registrado, inicie sesion con sus credenciales")
            },
            error: function(err){
                alert("ocurrio un error");
                console.log(err);
            }
        });
    }
    else{
        alert("las contraseñas no coinciden")
    }
}
else{
    alert("El correo tiene un formato incorrecto");
}




});


function validarCorreo(input) {
    var input = $(input);
    var exprecion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    var correo = exprecion.test(input.val());

    if (correo) {
        if (input.next().length < 1)
            input.removeClass("is-invalid").addClass("is-valid").after('<strong><small class="text-success">Correo valido</small></strong>');
        else
            input.removeClass("is-invalid").addClass("is-valid").next().html('<strong><small class="text-success">Correo valido</small></strong>')
    }

    else {
        input.removeClass('is-valid').addClass("is-invalid");
        if (input.next().length < 1)
            input.after('<strong><small class="text-danger">El correo es incorrecto</small></strong>');
        else
            input.next().html('<small class="text-danger">El correo es incorrecto</small>')
    }
    return correo;
}