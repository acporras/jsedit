var page = {
    init: function () {

        $("#VNUMDOC").blur(page.buscarusuario);

        $('.micheckbox').attr('checked');
        $("#frmnewuser").validate({

            rules: {
                contrasena: "required",
                opRadioLegal: "required",
                confirmar_contrasena: {
                    equalTo: "#contrasena"
                },
               
            },
            messages: {
                VNOMBRE: "*campo requerido",
                VAPEPAT: "*campo requerido",
                VAPEMAT: "*campo requerido",
                VDESMAIL: "*campo requerido",
                DFECNAC: "*campo requerido",
                customCheck1: "*Tratamiento de datos personales requerido",
                contrasena: "*campo requerido",
                opRadioLegal: "campo requerido",
                confirmar_contrasena: {
                    equalTo: "Debe digitar el mismo valor de la contraseña"
                    , required: "*campo requerido"
                }
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") == "opRadioLegal" ) {
                    error.insertAfter("#errorcheck");
                } else {
                    error.insertAfter(element);
                }
            }
        });
        if ($("#hdfcreate").val() == "1") {
            $("#modalcreate").modal('show');
        }
    }
    , buscarusuario: function () {

        var dni = $("#VNUMDOC").val();
        if (dni.length > 0) {


            $.ajax({
                url: _appcitas.urlapp + "/api/_DatosUsuario/" + 0 + "?DNI=" + dni,
                type: "GET",
                contentType: "application/json",
                success: function (respuesta) {

                    //var fec = moment(respuesta.DFECNAC);

                    //$("#VNOMBRE").val(respuesta.VNOMBRE);
                    //$("#VDESTELEFONO").val(respuesta.VDESTELEFONO);
                    //$("#VDESMAIL").val(respuesta.VDESMAIL);
                    //$("#VDESCELULAR").val(respuesta.VDESCELULAR);
                    //$("#VCODPERSONA").val(respuesta.VCODPERSONA);
                    //$("#VAPEPAT").val(respuesta.VAPEPAT);
                    //$("#VAPEMAT").val(respuesta.VAPEMAT);
                    //$("#NCODPAR_SEXO").val(respuesta.NCODPAR_SEXO);
                    //$("#DFECNAC").val(fec.isValid() ? fec.format("DD/MM/YYYY"):"");

                    if (respuesta.VNUMDOC == null || respuesta.VNUMDOC == "") {
                        $("#modalalert").modal('show');
                    }

                    console.log(respuesta);

                }, error: function (erro) {

                }
            });
        }
        return false;
    }
}