
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

function suma(){

    var cad = new Array("cantCarneF", "cantCarneH", "cantCuchilloF", "cantCuchilloH", "cantPolloF", "cantPolloH", "cantVerdeoF", "cantVerdeoH", "cantJamonF", "cantJamonH", "cantCebollaF", "cantCebollaH");

    var i = 0;
    var acu = 0;

    for(i=0; i<cad.length; i++){

        var aux = document.getElementById(cad[i]);

        if(aux.value >0 && aux.value != ''){

            aux.className = 'cuadroVerde';
            
        }else if(aux.value<0){
            
            aux.className = 'cuadroRojo';

        }

        acu = acu + aux.value;

    }

    return acu;

}
function validar(){

    var cuatro = document.getElementById("cuatro");
    var numero1 = document.getElementById("altura");
    var numero2 = document.getElementById("tel");
    var numero3 = document.getElementById("cp");
    var numero4 = document.getElementById("calle");
    var numero5 = document.getElementById("localidad");
    var h4 = document.getElementById("h4");
    var array = new Array(numero1, numero2, numero3, numero4, numero5);
    var i=0;

    if(suma() > 48){

        alert("EL maximo es 4 docenas");

    }else if(suma() < 6){

        alert("EL minimo es 1/2 docenas");

    }

    if(numero4.value == ''){

        numero4.className = 'cuadroRojo';
        numero4.innerHTML =  numero4.innerHTML + "(*)";
        numero4.style.color = "brown";
        
    }else{

        numero4.className = 'cuadroVerde';

    }
    
    if(numero5.value == ''){

        numero5.className = 'cuadroRojo';
        numero5.innerHTML =  numero5.innerHTML + "(*)";
        numero5.style.color = "brown";
        
    }else{

        numero5.className = 'cuadroVerde';

    }    

    for(i=0; i<5; i++){

        if(array[i].className == "cuadroRojo" || array[i].value ==""){
            
            switch(i){

                case 0:
                    array[i].className == "cuadroRojo";
                    array[i].innerHTML = array[i].innerHTML + "(*)";
                    array[i].style.color = "brown";
                    break;
                
                 case 1:
                    array[i].className == "cuadroRojo";
                    array[i].innerHTML = array[i].innerHTML + "(*)";
                    array[i].style.color = "brown";
                    break;

                 case 2:
                    array[i].className == "cuadroRojo";
                    array[i].innerHTML = array[i].innerHTML + "(*)";
                    array[i].style.color = "brown";
                    break;    

            }

            h4.style.color = "brown";
            h4.innerHTML = "(*)Faltan completar cuadros o estan incorrectos";
            
        }
        
    }


}