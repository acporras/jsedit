var page = {
    init: function () {

        $("#btnRegistrarcita").click(page.guardarCita);
        $('#horarios .select-horario').on('click', function () {
            $('.select-horario.select-horario-active').removeClass('select-horario-active');
            $(this).addClass('select-horario-active');
            $tr = $(this).closest("div");
            $("#StrFechaHoraIni").val($tr.find("#fechinsel").val());
        });
        $("#exampleModalCenter").on('hidden.bs.modal', function () {
            $(location).attr('href', _appcitas.urlapp + "/citas/chequeo");
        });

        $("form").validate({
          
            errorLabelContainer: "#ltserror",
            wrapper: "li",
            rules: {
                StrFechaHoraIni: "required"
            },
            messages: {
                StrFechaHoraIni: "Campo Hora Cita requerida."
            }
        });
        $("#btnback").click(function () {
            $("#isback").val("1");
        });
    },
    guardarCita: function () {
        if ($("form").valid()) {
            var data = jQuery.parseJSON(jsoncita);
            data.TipoCita = 1;
            data.StrFechaHoraIni = $("#StrFechaHoraIni").val();
            data.StrPersona = _appcitas.idUsuariocitas;
            data.IDENTNO = _appcitas.IDENTNO;
            util.loading(true);


            $.ajax({
                url: _appcitas.urlapp + "/api/_Cita",
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function (respuesta) {

                    if (respuesta.estado) {
                        $("#exampleModalCenter").modal('show');
                        util.loading(false);

                    }


                }, error: function (erro) {
                    console.log("error");
                }
            });
        }
    }
}