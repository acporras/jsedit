var page = {
    init: function () {
        $(".editablecontent").attr("contenteditable", false);
        $("#btnedit").click(page.editbtn);
        $("#btnguardarinfo").click(page.saveinfo);
        $("#btncancelarrinfo").click(page.cancelarinfo);
        page.validaciones();
        page.fileupload();
    },
    fileupload: function () {
        data = {};
        data.codeuser = _appcitas.idUsuariocitas;
        $('#fileupload').fileupload({
            url: _appcitas.urlapp + "/api/_uploadfile",
            add: function (e, data) {
                var uploadErrors = [];
                var acceptFileTypes = /^image\/(gif|jpe?g|png)$/i;
                if (data.originalFiles[0]['type'].length && !acceptFileTypes.test(data.originalFiles[0]['type'])) {
                    uploadErrors.push('Solo se pueden cargar imagenes en formato jpg y png.');
                }
                if (data.originalFiles[0]['size'].length && data.originalFiles[0]['size'] > 5000000) {
                    uploadErrors.push('Filesize is too big');
                }
                if (uploadErrors.length > 0) {
                    alert(uploadErrors.join("\n"));
                } else {
                    data.submit();
                }
            },
            dataType: 'json',
            formData: data,
            done: function (e, data) {
                $("#imageuser").attr("src", _appcitas.urlapp + "UploadFiles/" + data.result.id + "?v=" + new Date().getTime());
                $("#imageuser").attr("data-image",  data.result.id);
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
    }
    , editbtn: function () {

        $(".editablecontent").fadeOut(function () {
            $(".texteditablecontent").fadeIn();
            $("#btnguardarinfo").fadeIn();
            $("#btncancelarrinfo").fadeIn();
        });

    },
    cancelarinfo: function () {
        $(".texteditablecontent").fadeOut(function () {
            $(".editablecontent").fadeIn();
            $("#btnguardarinfo").fadeOut();
            $("#btncancelarrinfo").fadeOut();
        });
    },
    saveinfo: function () {

        if ($("#datosadicional").valid()) {

            util.loading(true);

            data = {};
            data.IdUsuario = _appcitas.idUsuariocitas;
            data.Peso = $("#txtpeso").val();
            data.Altura = $("#altura").val();
            data.TipoSangre = $("#tiposangre").val();
            data.Foto = $("#imageuser").attr("data-image");
            $.ajax({
                url: _appcitas.urlapp + "/api/_UsuarioAdicional",
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function (respuesta) {

                    if (respuesta) {

                        $("#lblaltura").text(respuesta.Altura);
                        $("#lbltiposangre").text(respuesta.TipoSangre);
                        $("#lblpeso").text(respuesta.Peso);
                        page.cancelarinfo();
                        util.loading(false);

                    }


                }, error: function (erro) {
                    console.log("error");
                }
            });



        }

    }
    , validaciones: function () {


        $("#datosadicional").validate({
            rules: {
                tiposangre: "required",
                txtpeso: "required",
                altura: "required"
            },
            messages: {
                tiposangre: "*Campo requerido",
                txtpeso: "*Campo requerido",
                altura: "*Campo requerido"
            }
        });
    }

}