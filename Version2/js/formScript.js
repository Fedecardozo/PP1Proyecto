//  Variables globales para asi poder reiniciarlos
var acu=0; var cantidad=0;

// Funcion con botones para calcular y mostrar en una tabla el total del pedido
function calcular(){

    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var boton = document.getElementById("cal");
    var botonMod = document.getElementById("mod");
    
    if(botonMod.hidden == true){
        // Oculto los botones y agrego el valor total en la tabla

        btn1.hidden = true;
        btn2.hidden = true;
        btn3.hidden = true;
        botonMod.hidden = false;
        boton.hidden = true;
        tbody.innerHTML = tbody.innerHTML+"<td>Total acumulado</td><td>- - -</td><td>"+cantidad+
        "</td><td>- - -</td><td>$"+acu+"</td></tr>";
        
    }else if(botonMod.hidden == false){
        // Muestro los botones y reinicio las variables globales y la tabla.

        btn1.hidden = false;
        btn2.hidden = false;
        btn3.hidden = false;
        botonMod.hidden = true;
        boton.hidden = false;
        tbody.innerHTML = "";
        acu=0; cantidad=0;

    }

}

// Funcion del boton Agregar, cada vez que se presione el boton agrega dicho pedido detallado y no agrega datos erroneos
function tablaCarne(){

    var tbody = document.getElementById("tbody");
    var btn = document.getElementById("btn1").hidden = true;
    var emp = new Array("cantCarneF", "cantCarneH", "cantCuchilloF", "cantCuchilloH");
    var i=0;

    for(i=0; i<emp.length; i++){

        var aux = document.getElementById(emp[i]);
        
        //alert(aux);
        
        if(aux.value != ''){
            
            // Nueva variable, para parsearlo
            var aux2 = parseInt(document.getElementById(emp[i]).value);

            if(aux2 >= 0){

                // Detallo segun lo pedido
                switch(i){

                    case 0:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Carne</td><td>Frita</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        acu = acu + aux2*45;
                        break;
                    case 1:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Carne</td><td>Horno</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        acu = acu + aux2*45;
                        break;
                    case 2:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Carne cuchillo</td><td>Frita</td><td>"+aux2+"</td><td>$50</td>"+
                        "<td>$"+(aux2*50) + "</td>";
                        acu = acu + aux2*50;
                        break;
                    case 3:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Carne cuchillo</td><td>Horno</td><td>"+aux2+"</td><td>$50</td>"+
                        "<td>$"+(aux2*50) + "</td>";
                        acu = acu + aux2*50;
                        break;    

                }

                // tbody.innerHTML = tbody.innerHTML+"<td>"+ aux2 +"<td>$45</td>"+
                // "</td><td>$"+(aux2*45) + "</td>";
                cantidad += aux2;
                aux.className = 'cuadroVerde';

            }else{

                aux.className = 'cuadroRojo';
            }
        }

    }

}
// Funcion del boton Agregar, cada vez que se presione el boton agrega dicho pedido detallado y no agrega datos erroneos
function tablaPollo(){

    var tbody = document.getElementById("tbody");
    var btn = document.getElementById("btn2").hidden = true;
    var emp = new Array("cantPolloF", "cantPolloH", "cantVerdeoF", "cantVerdeoH");
    var i=0; 

    for(i=0; i<emp.length; i++){

        var aux = document.getElementById(emp[i]);
        
        //alert(aux);
        
        if(aux.value != ''){
            
            var aux2 = parseInt(document.getElementById(emp[i]).value);

            if(aux2 >= 0){

                switch(i){

                    case 0:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Pollo</td><td>Frita</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        acu = acu + aux2*45;
                        break;
                    case 1:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Pollo</td><td>Horno</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        acu = acu + aux2*45;
                        break;
                    case 2:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Pollo al verdeo</td><td>Frita</td><td>"+aux2+"</td><td>$50</td>"+
                        "<td>$"+(aux2*50) + "</td>";
                        acu = acu + aux2*50;
                        break;
                    case 3:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Pollo al verdeo</td><td>Horno</td><td>"+aux2+"</td><td>$50</td>"+
                        "<td>$"+(aux2*50) + "</td>";
                        acu = acu + aux2*50;
                        break;    

                }
    
                cantidad += aux2;
                aux.className = 'cuadroVerde';

            }else{

                aux.className = 'cuadroRojo';
            }
        }

    }

    

}
// Funcion del boton Agregar, cada vez que se presione el boton agrega dicho pedido detallado y no agrega datos erroneos
function tablaQueso(){

    var tbody = document.getElementById("tbody");
    var btn = document.getElementById("btn3").hidden = true;
    var emp = new Array("cantJamonF", "cantJamonH", "cantCebollaF", "cantCebollaH");
    var i=0; 

    for(i=0; i<emp.length; i++){

        var aux = document.getElementById(emp[i]);
        
        //alert(aux);
        
        if(aux.value != ''){
            
            var aux2 = parseInt(document.getElementById(emp[i]).value);

            if(aux2 >= 0){
                switch(i){

                    case 0:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Jamon y queso</td><td>Frita</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        break;
                    case 1:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Jamon y queso</td><td>Horno</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        break;
                    case 2:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Cebolla y queso</td><td>Frita</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        break;
                    case 3:
                        tbody.innerHTML = tbody.innerHTML+"<tr><td>Cebolla y queso</td><td>Horno</td><td>"+aux2+"</td><td>$45</td>"+
                        "<td>$"+(aux2*45) + "</td>";
                        break;    

                }

                acu = acu + aux2*45;
                cantidad += aux2;
                aux.className = 'cuadroVerde';

            }else{

                aux.className = 'cuadroRojo';
            }
        }

    }

}

// Validacion de datos personales
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

// Finalizo la valadicion de datos personales

// function suma(){

//     var cad = new Array("cantCarneF", "cantCarneH", "cantCuchilloF", "cantCuchilloH", "cantPolloF", "cantPolloH", "cantVerdeoF", "cantVerdeoH", "cantJamonF", "cantJamonH", "cantCebollaF", "cantCebollaH");

//     var i = 0;
//     var acumulador = 0;

//     for(i=0; i<cad.length; i++){

//         var aux = document.getElementById(cad[i]);

//         if(aux.value >0 && aux.value != ''){

//             aux.className = 'cuadroVerde';
//             acumulador = acumulador + parseInt(aux.value);
            
//         }else if(aux.value<0){
            
//             aux.className = 'cuadroRojo';

//         }
//         if(aux.value>48){

//             aux.className = 'cuadroRojo';

//         }

//     }

//     return acumulador;

// }

// Validacion de los cuadros de las empanadas con el boton de enviar de datos personales.
function validar(){

    var h4 = document.getElementById("h4");
    var text = new Array("calle", "altura", "tel", "cp", "localidad");
    var i=0; var sum = 0; var flag = true;

    //alert("suma: " + suma());

    if(cantidad > 48){

        alert("EL maximo es 4 docena!");
        flag = false;

    }else if(cantidad < 6 || cantidad == 0){

        alert("EL minimo es 1/2 docena. Sino presione en el boton 'Agregar'");
        flag = false;

    }

    for(i=0; i<text.length; i++){

        var aux = document.getElementById(text[i]);

        if(aux.className == 'cuadroRojo' || aux.value == ''){    

            aux.className = 'cuadroRojo';
                    
            h4.style.color = "brown";
            h4.innerHTML = "(*)Faltan completar cuadros o estan incorrectos <br> (*)Son los que estan en rojo";
            flag = false;
            
        }else{

            aux.className = 'cuadroVerde';
    
        }
        
    }

    return flag;
    
}