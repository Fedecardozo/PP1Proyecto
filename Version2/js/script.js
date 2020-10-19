function formarX(){

    var span1 = document.getElementById("linea1");
    var span2 = document.getElementById("linea2");
    var span3 = document.getElementById("linea3");
    var txtMenu = document.getElementById("lbl-menu");


if(span1.className == 'derecho1'){

    span1.className = 'cruzado1';
    span2.className = 'cruzado2';
    span3.className = 'cruzado3';
    txtMenu.textContent = "Cerrar";

}else{

    span1.className = 'derecho1';
    span2.className = 'derecho2';
    span3.className = 'derecho3';
    txtMenu.textContent = "Menu";

}

}