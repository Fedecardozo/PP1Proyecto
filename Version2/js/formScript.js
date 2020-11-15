
function tablaCarne(){

    var tbody = document.getElementById("tbody");
    var btn = document.getElementById("btn1").hidden = true;
    var emp = new Array("cantCarneF", "cantCarneH", "cantCuchilloF", "cantCuchilloH");
    var i=0; var acu=0; var cantidad=0;

    for(i=0; i<emp.length; i++){

        var aux = document.getElementById(emp[i]);
        
        //alert(aux);
        
        if(aux.value != ''){
            
            var aux2 = parseInt(document.getElementById(emp[i]).value);

            if(aux2 >= 0){

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

            }else{

                aux.className = 'cuadroRojo';
            }
        }

    }

    tbody.innerHTML = tbody.innerHTML+"<td>Total acumulado</td><td>- - -</td><td>"+cantidad+
    "</td><td>- - -</td><td>$"+acu+"</td></tr>";

}
function tablaPollo(){

    var tbody = document.getElementById("tbody");
    var btn = document.getElementById("btn2").hidden = true;
    var emp = new Array("cantPolloF", "cantPolloH", "cantVerdeoF", "cantVerdeoH");
    var i=0; var acu=0; var cantidad=0;

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

            }else{

                aux.className = 'cuadroRojo';
            }
        }

    }

    tbody.innerHTML = tbody.innerHTML+"<td>Total acumulado</td><td>- - -</td><td>"+cantidad+
    "</td><td>- - -</td><td>$"+acu+"</td></tr>";

}
function tablaQueso(){

    var tbody = document.getElementById("tbody");
    var btn = document.getElementById("btn3").hidden = true;
    var emp = new Array("cantJamonF", "cantJamonH", "cantCebollaF", "cantCebollaH");
    var i=0; var acu=0; var cantidad=0;

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

            }else{

                aux.className = 'cuadroRojo';
            }
        }

    }

    tbody.innerHTML = tbody.innerHTML+"<td>Total acumulado</td><td>- - -</td><td>"+cantidad+
    "</td><td>- - -</td><td>$"+acu+"</td></tr>";

}

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
    var i=0; var sum = 0;

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