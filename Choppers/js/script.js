
function mostrarNav(){
    
    var nav = document.getElementById("mostrar-nav");
    var span = document.getElementById("span-menu");
    
    if(nav.hidden == true){
        
        nav.hidden = false;
        
    }else{
        
        nav.hidden = true;
        
    }
    
}

function cerrar(){

    var datosPer = document.getElementById("datos-personales");
    datosPer.hidden = true;


}
function ayuda(){

    

}
function pedido(){

    var mostrarForm = document.getElementById("id-form");
     
    if(mostrarForm.hidden== true){

        mostrarForm.hidden = false;

    }else{

        mostrarForm.hidden = true;

    }

}
function sumar(){

    var form2 = document.getElementById("id-form2");

    if(form2.hidden== true){

        form2.hidden = false;

    }else{

        form2.hidden = true;

    }

}
function datos(){

    var personales = document.getElementById("datos-personales");
    personales.hidden = false;

}
