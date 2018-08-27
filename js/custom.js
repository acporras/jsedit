/* Codigo CLIC - Roger*/

function validar() {

    if ((document.getElementById('rsi').checked == false) && (document.getElementById('rno').checked == false)) {
        alert("Por favor, seleccione si desea o no ser beneficiario.");
        return false;

    } else if (document.getElementById('oBeneficiarios').value == '') {
        alert("Por favor, seleccione la cantidad de beneficiarios a inscribir.");
        return false;
    } else if ((document.getElementsByName("opRadio")[0].checked == true) && (document.getElementById('plan').value == '')) {
        alert("Por favor, seleccione el plan deseado.");
        return false;
    } else {
        return true;
    }
}

function validarCompra() {
    
     if (document.getElementById('sexo').value == '') {
        alert("Por favor, seleccione el sexo del Titular.");
        return false;
    } else if (document.getElementById('DepartamentoId').value == '') {
        alert("Por favor, seleccione el departamento del Titular.");
        return false;
    } else if (document.getElementById('ProvinciaId').value == '') {
        alert("Por favor, seleccione la provincia del Titular.");
        return false;
    } else if (document.getElementById('DistritoId').value == '') {
        alert("Por favor, seleccione el distrito del Titular.");
        return false;
    } else if (document.getElementById('Beneficiarios_0__Sexualidad').value == '') {
        alert("Por favor, seleccione el sexo del Beneficiario 1.");
        return false;
    } else if (document.getElementById('Beneficiarios_1__Sexualidad').value == '') {
        alert("Por favor, seleccione el sexo del Beneficiario 2.");
        return false;
    } else if (document.getElementById('Beneficiarios_2__Sexualidad').value == '') {
        alert("Por favor, seleccione el sexo del Beneficiario 3.");
        return false;
    } else if (document.getElementById('Beneficiarios_3__Sexualidad').value == '') {
        alert("Por favor, seleccione el sexo del Beneficiario 4.");
        return false;
    } else if (document.getElementById('Beneficiarios_0__DepartamentoId').value == '') {
        alert("Por favor, seleccione el departamento del Beneficiario 1.");
        return false;
    } else if (document.getElementById('Beneficiarios_1__DepartamentoId').value == '') {
        alert("Por favor, seleccione el departamento del Beneficiario 2.");
        return false;
    } else if (document.getElementById('Beneficiarios_2__DepartamentoId').value == '') {
        alert("Por favor, seleccione el departamento del Beneficiario 3.");
        return false;
    } else if (document.getElementById('Beneficiarios_3__DepartamentoId').value == '') {
        alert("Por favor, seleccione el departamento del Beneficiario 4.");
        return false;
    } else if (document.getElementById('Beneficiarios_0__ProvinciaId').value == '') {
        alert("Por favor, seleccione la provincia del Beneficiario 1.");
        return false;
    } else if (document.getElementById('Beneficiarios_1__ProvinciaId').value == '') {
        alert("Por favor, seleccione la provincia del Beneficiario 2.");
        return false;
    } else if (document.getElementById('Beneficiarios_2__ProvinciaId').value == '') {
        alert("Por favor, seleccione la provincia del Beneficiario 3.");
        return false;
    } else if (document.getElementById('Beneficiarios_3__ProvinciaId').value == '') {
        alert("Por favor, seleccione la provincia del Beneficiario 4.");
        return false;
    } else if (document.getElementById('Beneficiarios_0__DistritoId').value == '') {
        alert("Por favor, seleccione el distrito del Beneficiario 1.");
        return false;
    } else if (document.getElementById('Beneficiarios_1__DistritoId').value == '') {
        alert("Por favor, seleccione el distrito del Beneficiario 2.");
        return false;
    } else if (document.getElementById('Beneficiarios_2__DistritoId').value == '') {
        alert("Por favor, seleccione el distrito del Beneficiario 3.");
        return false;
    } else if (document.getElementById('Beneficiarios_3__DistritoId').value == '') {
        alert("Por favor, seleccione el distrito del Beneficiario 4.");
        return false;        
    } else  {
        return true;
    }

}

function validarDNI() {
    if ($('#Beneficiarios_0__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_0__NumeroDocumento').value == document.getElementById('dni').value) {
            alert("El DNI del Beneficiario 1 debe ser diferente del Titular.");
            document.getElementById('Beneficiarios_0__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_1__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_1__NumeroDocumento').value == document.getElementById('dni').value) {
            alert("El DNI del Beneficiario 2 debe ser diferente del Titular.");
            document.getElementById('Beneficiarios_1__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_1__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_1__NumeroDocumento').value == document.getElementById('Beneficiarios_0__NumeroDocumento').value && document.getElementById('Beneficiarios_1__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 2 debe ser diferente del Benficiario 1.");
            document.getElementById('Beneficiarios_1__NumeroDocumento').value = "";
            return false;
        }
    }


    
    if ($('#Beneficiarios_2__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_2__NumeroDocumento').value == document.getElementById('dni').value) {
            alert("El DNI del Beneficiario 3 debe ser diferente del Titular.");
            document.getElementById('Beneficiarios_2__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_3__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_3__NumeroDocumento').value == document.getElementById('dni').value) {
            alert("El DNI del Beneficiario 4 debe ser diferente del Titular.");
            document.getElementById('Beneficiarios_3__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_4__NumeroDocumento').value == document.getElementById('dni').value) {
            alert("El DNI del Beneficiario 5 debe ser diferente del Titular.");
            document.getElementById('Beneficiarios_4__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_0__NumeroDocumento').length != 0 && $('#Beneficiarios_1__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_0__NumeroDocumento').value == document.getElementById('Beneficiarios_1__NumeroDocumento').value && document.getElementById('Beneficiarios_0__NumeroDocumento').value != "") {
                alert("El DNI del Beneficiario 1 debe ser diferente del Benficiario 2.");
                document.getElementById('Beneficiarios_0__NumeroDocumento').value = "";
                return false;
            }
    }

    if ($('#Beneficiarios_0__NumeroDocumento').length != 0 && $('#Beneficiarios_2__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_0__NumeroDocumento').value == document.getElementById('Beneficiarios_2__NumeroDocumento').value && document.getElementById('Beneficiarios_0__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 1 debe ser diferente del Benficiario 3.");
            document.getElementById('Beneficiarios_0__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_0__NumeroDocumento').length != 0 && $('#Beneficiarios_3__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_0__NumeroDocumento').value == document.getElementById('Beneficiarios_3__NumeroDocumento').value && document.getElementById('Beneficiarios_0__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 1 debe ser diferente del Benficiario 4.");
            document.getElementById('Beneficiarios_0__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_0__NumeroDocumento').length != 0 && $('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_0__NumeroDocumento').value == document.getElementById('Beneficiarios_4__NumeroDocumento').value && document.getElementById('Beneficiarios_0__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 1 debe ser diferente del Benficiario 5.");
            document.getElementById('Beneficiarios_0__NumeroDocumento').value = "";
            return false;
        }
    }


    if ($('#Beneficiarios_1__NumeroDocumento').length != 0 && $('#Beneficiarios_2__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_1__NumeroDocumento').value == document.getElementById('Beneficiarios_2__NumeroDocumento').value && document.getElementById('Beneficiarios_1__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 2 debe ser diferente del Benficiario 3.");
            document.getElementById('Beneficiarios_1__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_1__NumeroDocumento').length != 0 && $('#Beneficiarios_3__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_1__NumeroDocumento').value == document.getElementById('Beneficiarios_3__NumeroDocumento').value && document.getElementById('Beneficiarios_1__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 2 debe ser diferente del Benficiario 4.");
            document.getElementById('Beneficiarios_1__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_1__NumeroDocumento').length != 0 && $('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_1__NumeroDocumento').value == document.getElementById('Beneficiarios_4__NumeroDocumento').value && document.getElementById('Beneficiarios_1__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 2 debe ser diferente del Benficiario 5.");
            document.getElementById('Beneficiarios_1__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_2__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_2__NumeroDocumento').value == document.getElementById('Beneficiarios_0__NumeroDocumento').value && document.getElementById('Beneficiarios_2__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 3 debe ser diferente del Benficiario 1.");
            document.getElementById('Beneficiarios_2__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_2__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_2__NumeroDocumento').value == document.getElementById('Beneficiarios_1__NumeroDocumento').value && document.getElementById('Beneficiarios_2__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 3 debe ser diferente del Benficiario 2.");
            document.getElementById('Beneficiarios_2__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_2__NumeroDocumento').length != 0 && $('#Beneficiarios_3__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_2__NumeroDocumento').value == document.getElementById('Beneficiarios_3__NumeroDocumento').value && document.getElementById('Beneficiarios_2__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 3 debe ser diferente del Benficiario 4.");
            document.getElementById('Beneficiarios_2__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_2__NumeroDocumento').length != 0 && $('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_2__NumeroDocumento').value == document.getElementById('Beneficiarios_4__NumeroDocumento').value && document.getElementById('Beneficiarios_2__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 3 debe ser diferente del Benficiario 5.");
            document.getElementById('Beneficiarios_2__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_2__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_3__NumeroDocumento').value == document.getElementById('Beneficiarios_0__NumeroDocumento').value && document.getElementById('Beneficiarios_3__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 4 debe ser diferente del Benficiario 1.");
            document.getElementById('Beneficiarios_2__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_3__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_3__NumeroDocumento').value == document.getElementById('Beneficiarios_1__NumeroDocumento').value && document.getElementById('Beneficiarios_3__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 4 debe ser diferente del Benficiario 2.");
            document.getElementById('Beneficiarios_3__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_3__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_3__NumeroDocumento').value == document.getElementById('Beneficiarios_2__NumeroDocumento').value && document.getElementById('Beneficiarios_3__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 4 debe ser diferente del Benficiario 3.");
            document.getElementById('Beneficiarios_3__NumeroDocumento').value = "";
            return false;
        }

    }

    if ($('#Beneficiarios_3__NumeroDocumento').length != 0 && $('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_3__NumeroDocumento').value == document.getElementById('Beneficiarios_4__NumeroDocumento').value && document.getElementById('Beneficiarios_3__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 4 debe ser diferente del Benficiario 5.");
            document.getElementById('Beneficiarios_3__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_4__NumeroDocumento').value == document.getElementById('Beneficiarios_0__NumeroDocumento').value && document.getElementById('Beneficiarios_4__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 5 debe ser diferente del Benficiario 1.");
            document.getElementById('Beneficiarios_4__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_4__NumeroDocumento').value == document.getElementById('Beneficiarios_1__NumeroDocumento').value && document.getElementById('Beneficiarios_4__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 5 debe ser diferente del Benficiario 2.");
            document.getElementById('Beneficiarios_4__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_4__NumeroDocumento').value == document.getElementById('Beneficiarios_2__NumeroDocumento').value && document.getElementById('Beneficiarios_4__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 5 debe ser diferente del Benficiario 3.");
            document.getElementById('Beneficiarios_4__NumeroDocumento').value = "";
            return false;
        }
    }

    if ($('#Beneficiarios_4__NumeroDocumento').length != 0) {
        if (document.getElementById('Beneficiarios_4__NumeroDocumento').value == document.getElementById('Beneficiarios_3__NumeroDocumento').value && document.getElementById('Beneficiarios_4__NumeroDocumento').value != "") {
            alert("El DNI del Beneficiario 5 debe ser diferente del Benficiario 4.");
            document.getElementById('Beneficiarios_4__NumeroDocumento').value = "";
            return false;
        }
    }

    
}

function justNumbers(e) {
    var keynum = window.event ? window.event.keyCode : e.which;

    if ((keynum == 8) || (keynum == 46))
        return true;

    var char = /\d/.test(String.fromCharCode(keynum));
    if (char == false) {
        alert('Solo puede ingresar numeros');
    }

    return char;
}

function validarPlan() {
    var radios = document.getElementsByName("opRadio");

    document.getElementById('rlsi').checked = "true";

    if (radios[0].checked) {
        document.getElementById('inputPlan').style.display = 'block';
        document.getElementById('inputBeneficiarios').style.display = 'block';
        document.getElementById('oBeneficiarios').firstChild.nodeValue = '¿Desea inscribir a otros beneficiarios?'
        document.getElementById('cBeneficiarios').style.display = 'block';
        document.getElementById('radioLegal').style.display = 'block';
    }
    if (radios[1].checked) {
        document.getElementById('inputPlan').style.display = 'none';
        document.getElementById('inputBeneficiarios').style.display = 'block';
        document.getElementById('oBeneficiarios').firstChild.nodeValue = '¿Cuántos beneficiarios desea inscribir?'
        document.getElementById('cBeneficiarios').style.display = 'none';
        document.getElementById('fBeneficiarios').selected = true;
        document.getElementById('radioLegal').style.display = 'block';

    }
}

function validarLegal() {
    var rad = document.getElementsByName("opRadioLegal");

    if (rad[0].checked) {
        document.getElementById('btnContinuar').disabled = false;
    }
    
    if(rad[1].checked){
        document.getElementById('btnContinuar').disabled = false;
    }

}


/*
function handleClick(){
	var radios = document.getElementsByName("optradio");

	if(radios[0].checked){
        document.getElementById('dnioce').setAttribute("pattern",".{8}");
        document.getElementById('dnioce').setAttribute("maxlength","8");
        document.getElementById('dnioce').disabled=false;
        document.getElementById('dnioce').setAttribute("title","8 digitos de su DNI");
    }
	if(radios[1].checked){
        document.getElementById('dnioce').setAttribute("pattern",".{12}");
        document.getElementById('dnioce').setAttribute("maxlength","12");
        document.getElementById('dnioce').disabled=false;
        document.getElementById('dnioce').setAttribute("title","12 digitos de su Carnet");
    }
}
*/

