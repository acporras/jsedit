var util = {
    loading: function (estado) {
        if (estado) {

            $("body").append('<div id="loadingdiv" class="modal-backdrop fade show"> <span class="text-uppercase text-center" style="position: absolute; top: 45% !important;       right: 45% !important;  color:white; "><i class="fa fa-3x fa-spinner fa-spin"></i></span></div >');
        }
        else {
            $("#loadingdiv").remove();
        }
    }
}