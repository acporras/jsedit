var page = {
    init: function () {

        $("#btnRegistrarcita").click(page.guardarCita);
        //Medicos
        $('#horarios .select-horario').on('click', function () {
            $('.select-horario.select-horario-active').removeClass('select-horario-active');
            $(this).addClass('select-horario-active');
            $tr = $(this).closest("div");
            $("#StrFechaHoraIni").val($tr.find("#fechinsel").val());
        });
        $("#exampleModalCenter").on('hidden.bs.modal', function () {
            $(location).attr('href', _appcitas.urlapp + "/citas/cita");
        });
        $("form").validate({
            ignore: 'hidden',
            errorLabelContainer: "#ltserror",
            wrapper: "li",
            rules: {
                StrFechaHoraIni: "required",
                StrFecha: "required"
            },
            messages: {
                StrFechaHoraIni: "Campo Hora Cita requerida.",
                StrFecha: "Campo Fecha Cita requerida."
            }
        });

    },
    guardarCita: function () {

        if ($("form").valid()) {



            var data = {};
            data.StrPersona = _appcitas.idUsuariocitas;
            data.IDENTNO = _appcitas.IDENTNO;
            data.IntCodEspe = $("#IntCodEspe").val();
            data.StrEspe = $("#StrEspe").val();
            data.Cobertura = $("#Cobertura").val();
            data.StrCodMed = $("#StrCodMed").val();
            data.Nombre = $("#Nombre").val();
            data.ApellidoPat = $("#ApellidoPat").val();
            data.ApellidoMat = $("#ApellidoMat").val();
            data.StrFecha = $("#StrFecha").val();
            data.StrFechaHoraIni = $("#StrFechaHoraIni").val();
            data.TipoCita = 0;

            util.loading(true);


            $.ajax({
                url: _appcitas.urlapp + "/api/_Cita",
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function (respuesta) {

                    if (respuesta.estado) {
                        $("#exampleModalCenter").modal('show');
                        $("#CITAID").val(respuesta.Cita.CITAID);
                        util.loading(false);

                    }


                }, error: function (erro) {
                    console.log("error");
                }
            });
        }
    }
};