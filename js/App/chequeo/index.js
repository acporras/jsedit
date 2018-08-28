var page = {
    init: function () {
        $("#frmcobertura").on("click", "[id*=addnew]", page.addNewDependiente);
        $.validator.messages.required = '* Campo Requerido.';
        $.validator.messages.email = '* Por favor digite un Email valido.';
        $("form").validate({
        });

        $(document).on('focus', '[id*=f_nacimiento]', function () {

            $("[id*=f_nacimiento]").removeClass('hasDatepicker');
            $(this).datepicker({
                dateFormat: 'dd-MM-yyyy',
                language: 'es',
                startView: "decade",
                autoclose: true
            });

        });

        $(document).on('focus', '[id*=STRFECHA]', function () {

            $("[id*=STRFECHA]").removeClass('hasDatepicker');
            $(this).datepicker({
                dateFormat: 'dd-MM-yyyy',
                language: 'es',
                startDate: new Date(),
                daysOfWeekDisabled: "0",
                autoclose: true
            });
           

        });
        $("#customCheck1").click(function () {
            if ($("#customCheck1").is(':checked')) {
                page.llenarpaciente();
                $("#istitular").val(1);
            }
            else {

                $("#istitular").val(0);
            }
        });


        $("#btnfirst").click(function () {
            $("[name*=Nombres]").removeAttr("required");
            $("[name*=f_nacimiento]").removeAttr("required");
            $("[name*=Documento]").removeAttr("required");
            $("[name*=Celular]").removeAttr("required");
            $("[name*=Telefonofijo]").removeAttr("required");
            $("[name*=Email]").removeAttr("required");
            $("[name*=customCheck1]").removeAttr("required");
        });
        $("#frmcobertura").on("click", "#btnsecond", function () {
            var countdep = $("[id*=divdependiente]").length;

            $frmtitular = $(".istitular");
            if ($frmtitular && $("form").valid()) {
                $($frmtitular).find("[name*=Nombres]").attr("name", "Nombre");
                $($frmtitular).find("[name*=f_nacimiento]").attr("name", "f_nacimiento");
                $($frmtitular).find("[name*=Documento]").attr("name", "IDENTNO");
                $($frmtitular).find("[name*=Celular]").attr("name", "Celular");
                $($frmtitular).find("[name*=Telefonofijo]").attr("name", "Telefonofijo");
                $($frmtitular).find("[name*=Email]").attr("name", "Email");
                $($frmtitular).find("[name*=Cobertura]").attr("name", "Cobertura");
                $($frmtitular).find("[name*=STRHORAINI]").attr("name", "StrFechaHoraIni");
                $($frmtitular).find("[name*=STRFECHA]").attr("name", "StrFecha");           
                

                
            }
            $("[name*=opRadioLegal]").attr("name", "");   
            $("[name*=Cobertura]").attr("required", "");
            $("[name*=Nombres]").attr("required", "");
            $("[name*=f_nacimiento]").attr("required", "");
            $("[name*=Documento]").attr("required", "");
            $("[name*=Celular]").attr("required", "");

            //if (countdep == 1) {
            //    $("#divdependiente").find("[name*=STRFECHA]").val($('#my_hidden_input').val());
            //} else {
            //    $("#divdependiente" + (countdep - 1)).find("[name*=STRFECHA]").val($('#my_hidden_input').val());
            //}
            $("[name*=Telefonofijo]").attr("required", "");
            $("[name*=Email]").attr("required", "");

        });

    }, llenarpaciente: function () {
        var countdep = $("[id*=divdependiente]").length;

        if (countdep == 1) {
            $("#divdependiente").find("[name*=Nombres]").val(paciente.VNOMBRE + " " + paciente.VAPEPAT);
            $("#divdependiente").find("[name*=f_nacimiento]").val(paciente.DFECNAC);
            $("#divdependiente").find("[name*=Documento]").val(paciente.VNUMDOC);
            $("#divdependiente").find("[name*=Celular]").val(paciente.VDESCELULAR);
            $("#divdependiente").find("[name*=Telefonofijo]").val(paciente.VDESTELEFONO);
            $("#divdependiente").find("[name*=Email]").val(paciente.VDESMAIL);
            $("#divdependiente").addClass("istitular");


        }
        else {



            $("#divdependiente" + (countdep - 1)).find("[name*=Nombres]").val(paciente.VNOMBRE + " " + paciente.VAPEPAT);
            $("#divdependiente" + (countdep - 1)).find("[name*=f_nacimiento]").val(paciente.DFECNAC);
            $("#divdependiente" + (countdep - 1)).find("[name*=Documento]").val(paciente.VNUMDOC);
            $("#divdependiente" + (countdep - 1)).find("[name*=Celular]").val(paciente.VDESCELULAR);
            $("#divdependiente" + (countdep - 1)).find("[name*=Telefonofijo]").val(paciente.VDESTELEFONO);
            $("#divdependiente" + (countdep - 1)).find("[name*=Email]").val(paciente.VDESMAIL);
            $("#divdependiente" + (countdep - 1)).addClass("istitular");
        }
    }

    , addNewDependiente: function () {
        var countdep = $("[id*=divdependiente]").length;
        var istitu = 0;
        if ($(".istitular")) { istitu++; }
        $divdependiente1 = $("#divdependiente").clone();
        $($divdependiente1).removeClass("istitular");
        $($divdependiente1).find("input").val("");
        $($divdependiente1).find("#btnsecond").fadeIn();
       
        $.each($($divdependiente1).find("input,select"), function (i, obj) {

            $idinput = $(obj).attr("name");
            var patt1 = /\[[0-9]\]/gi;
            var result = $idinput.match(patt1);
            if (result != null) {
                result = result[0];
                var str = $idinput.replace(result, "[" + (countdep - istitu) + "]");
                $idinput = $(obj).attr("name", str);
                $idinput = $(obj).attr("id", str);
            }

        });

        if (countdep == 1) {

            $($divdependiente1).attr("id", "divdependiente" + countdep)
            $("#divdependiente").find("#btnsecond").fadeOut();

            $("#divdependiente").after($divdependiente1);

        }
        else {
            $($divdependiente1).attr("id", "divdependiente" + (countdep))

            $("#divdependiente" + (countdep - 1)).after($divdependiente1);
            $("#divdependiente" + (countdep - 1)).find("#btnsecond").fadeOut();

        }
        $("#divdependiente" + countdep).before("<hr>");
      
        return false;
    }
}