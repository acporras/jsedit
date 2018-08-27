var page = {
    init: function ()
    {
        $('#txtFi').datepicker({
            dateFormat: 'dd-MM-yyyy',
            language: 'es',
            startView: "decade"

        }).on('change', function () {
            $(this).valid();  // triggers the validation test
            // '$(this)' refers to '$("#datepicker")'
        });
        $('#txtFf').datepicker({
            dateFormat: 'dd-MM-yyyy',
            language: 'es',
            startView: "decade"

        }).on('change', function () {
            $(this).valid();  // triggers the validation test
            // '$(this)' refers to '$("#datepicker")'
        });
        page.autocompletarNombre();
        $("#lnkexportar").click(page.exportfile);
    },
    autocompletarNombre: function ()
    {
        $("#txtTitular").autocomplete({
            minLength:2,


            source: function (request, response) {
                $.ajax({
                    url: "../api/_Panel",
                    type: "GET",
                    data: {
                        Id: 0,
                        token: $("#txtTitular").val()
                    },
                    success: function (data) {

                        response($.map(data.result, function (el) {
                            return {
                                label: el.Nombres,
                                value: el.Pk
                            };
                        }));
                    }
                });
            },
            select: function (event, ui) {
                // Prevent value from being put in the input:
                this.value = ui.item.label;
                // Set the next input's value to the "value" of the item.
                // $(this).next("input").value(ui.item.value);
                console.log(ui.item.value);
                $("#hdfTitular").val(ui.item.value);
               
                event.preventDefault();
            }
        })
        .focus(function () {
            page.setText(this);
            $(this).autocomplete("search");
        });
    }
    , setText: function ($txt) {
        $($txt).val("");
        $($txt).closest("div").find("input[type=hidden]").val("");

    },
    exportfile: function () {
        var params = "numeroDocumento=" + $("#numeroDocumento").val();
        params += "&txtFi=" + $("#txtFi").val();
        params += "&txtFf=" + $("#txtFf").val();
        params += "&hdfTitular=" + $("#hdfTitular").val();
        params += "&EstadoPago=" + $("#EstadoPago").val();
        
        $(this).attr("href", urlexport + "?" + params);
        return true;
    }
};