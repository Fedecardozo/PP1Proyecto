
function cifrasCP(){

    var numero = document.getElementById("cp");

    if(numero.value<1000 || numero.value>9999 || numero.value == ''){

        numero.className = 'cuadroRojo';

    }else{

        numero.className = 'cuadroVerde';

    }

}
function cifrasTel(){

    var numero = document.getElementById("tel");

    if(numero.value>=1100000000 && numero.value<1200000000){

        numero.className = 'cuadroVerde';

    }else{
        
        numero.className = 'cuadroRojo';

    }

}
function cifrasAlt(){

    var numero = document.getElementById("altura");

    if(numero.value<0 || numero.value>9999 || numero.value == ''){

        numero.className = 'cuadroRojo';

    }else{

        numero.className = 'cuadroVerde';

    }

}
function direccion(){

    var calle = document.getElementById("calle");

    if(calle.value == ''){

        calle.className = 'cuadroRojo';

    }else{

        calle.className = 'cuadroVerde';

    }
    

}
function direccion2(){

    var local = document.getElementById("localidad");

    if(local.value == ''){
    
        local.className = 'cuadroRojo';
    
    }else{
    
        local.className = 'cuadroVerde';
    
    }
    
}


function suma(){

    var cad = new Array("cantCarneF", "cantCarneH", "cantCuchilloF", "cantCuchilloH", "cantPolloF", "cantPolloH", "cantVerdeoF", "cantVerdeoH", "cantJamonF", "cantJamonH", "cantCebollaF", "cantCebollaH");

    var i = 0;
    var acu = 0;

    for(i=0; i<cad.length; i++){

        var aux = document.getElementById(cad[i]);

        if(aux.value >0 && aux.value != ''){

            aux.className = 'cuadroVerde';
            acu = acu + parseInt(aux.value);
            
        }else if(aux.value<0){
            
            aux.className = 'cuadroRojo';

        }
        if(aux.value>48){

            aux.className = 'cuadroRojo';

        }

    }

    return acu;

}
function validar(){

    var h4 = document.getElementById("h4");
    var text = new Array("calle", "altura", "tel", "cp", "localidad");
    var i=0; var flag = false; var sum = 0;

    //alert("suma: " + suma());

    if(suma() > 48){

        alert("EL maximo es 4 docena");
        sum++;

    }else if(suma() < 6 || suma() == 0){

        alert("EL minimo es 1/2 docena");
        sum++;

    }

    for(i=0; i<text.length; i++){

        var aux = document.getElementById(text[i]);

        if(aux.className == 'cuadroRojo' || aux.value == ''){    

            aux.className = 'cuadroRojo';
                    
            h4.style.color = "brown";
            h4.innerHTML = "(*)Faltan completar cuadros o estan incorrectos <br> (*)Son los que estan en rojo";
            sum++;
            
        }else{

            aux.className = 'cuadroVerde';
    
        }
        
    }
    //alert(sum);
    if(sum == 0 ){

        return true;

    }else{

        return false;

    }
    

}