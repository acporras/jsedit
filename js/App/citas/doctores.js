var page = {
    init: function () {

        $("#loadmedicos").click(page.loadMedicos);
        page.pagecou = 1;
        page.IntCodEspe = $("#IntCodEspe").val();

        //Medicos
        $('#medicos').on('click', '.select-medico', function () {
            $('.select-medico.medico-active').removeClass('medico-active');
            $(this).addClass('medico-active');
            $cont = $(this).closest('div');
            var idmed = $($cont.find("#id")).val();
            var Nombre = $($cont.find("#NombreMED")).val();
            var ApellidoPat = $($cont.find("#ApellidoPatMED")).val();
            var ApellidoMat = $($cont.find("#ApellidoMatMED")).val();
            $("#Nombre").val(Nombre);
            $("#ApellidoPat").val(ApellidoPat);
            $("#ApellidoMat").val(ApellidoMat);
            $("#StrCodMed").val(idmed);
            page.loadHorarios(idmed);
        });

        $("form").validate({
            ignore: 'hidden',
            errorLabelContainer: "#ltserror",
            wrapper: "li",
            rules: {
                StrCodMed: "required",
                StrFecha: "required"
            },
            messages: {
                StrCodMed: "Campo medicó requerido.",
                StrFecha: "Campo Fecha Cita requerida."
            }
        });
        if (selecmedico != "") {
            $("#StrCodMed").val(selecmedico);
            page.loadHorarios(selecmedico);
        }

    },
    loadHorarios: function (medicoID) {
        $.ajax({
            url: _appcitas.urlapp + "/api/_ListaHorario/" + medicoID,
            type: "GET",
            contentType: "application/json",
            success: function (respuesta) {
                var diasdisp = [];
                var ndiasdisp = [];
                if (respuesta.length > 0) {

                    $.each(respuesta, function (i, obj) {

                        diasdisp.push(obj.NumDia);
                    });



                    for (var i = 0; i < 7; i++) {
                        var exist = false;
                        for (var j = 0; j < diasdisp.length; j++) {
                            if (diasdisp[j] == i) {
                                exist = true;
                                break;
                            }
                        }
                        if (!exist) {
                            ndiasdisp.push(i);
                        }
                    }
                    console.log(diasdisp);
                    console.log(ndiasdisp);
                    $('#datepicker').datepicker("setDaysOfWeekDisabled", ndiasdisp);
                    $('#datepicker').datepicker("setStartDate", new Date());
                } else {
                    $('#datepicker').datepicker("setDaysOfWeekDisabled", [0, 1, 2, 3, 4, 5, 6]  ); 
                }

            }, error: function (erro) {
                alert(erro);
            }
        });
        return false;
    },
    loadMedicos: function () {

        $.ajax({
            url: _appcitas.urlapp + "/api/_Medico/" + page.IntCodEspe + "?page=" + (page.pagecou + 1),
            type: "GET",
            contentType: "application/json",
            success: function (respuesta) {

                if (respuesta.length > 0) {
                    page.pagecou = page.pagecou + 1;
                    $.each(respuesta, function (i, obj) {

                        page.crearitemmedico(obj);
                    });

                }

            }, error: function (erro) {
                alert(erro);
            }
        });
        return false;
    }
    , crearitemmedico: function (item) {
        var template = '  <div class="col-md-2 col-sm-4 select-medico">'
            + '<img class="rounded-circle b-primary-1 img-fluid p-2" height="150px" width="150px" src="' + _appcitas.urlapp + '/img/reservar/doctor.jpg" alt="doctor">'
            + '    <p class="pt-2 h7 font-weight-bold">'
            + item.Nombre
            + '<input type="hidden" value="' + item.MedicoID + '" id="id" /> '
            + '<input type= "hidden" value= "' + item.Nombre + '" id= "NombreMED" />'
            + '<input type="hidden" value="' + item.ApellidoPat + '" id="ApellidoPatMED" />'
            + '<input type="hidden" value="' + item.ApellidoMat + '" id="ApellidoMatMED" />'
            + '<span class="text-primary" id="namemed">' + item.ApellidoPat + ' ' + item.ApellidoMat + '</span>'
            + '    </p>'
            + '</div>';

        $("#contbtnload").before(template);

    }


};