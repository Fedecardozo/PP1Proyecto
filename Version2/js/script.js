

function formarX(){

    var span1 = document.getElementById("linea1");
    var span2 = document.getElementById("linea2");
    var span3 = document.getElementById("linea3");
    var nav = document.getElementById("mostrar-nav");
    
    
    if(span1.className == 'derecho1'){
        
        span1.className = 'cruzado1';
        span2.className = 'cruzado2';
        span3.className = 'cruzado3';
        
    }else{
        
        span1.className = 'derecho1';
        span2.className = 'derecho2';
        span3.className = 'derecho3';
        
    }
    
    if(nav.hidden == true){
        
        nav.hidden = false;
        
    }else{
        
        nav.hidden = true;
        
    }

}

// ******CARROUSEL****** 

    var i = 1;
    setInterval(siguiente,3000);

    function siguiente(){

        if(i == 1){

            document.getElementById("uno").hidden = true;
            document.getElementById("dos").hidden = false;
            i++;

        }else {

            document.getElementById("dos").hidden = true;
            document.getElementById("tres").hidden = false;
            i--;

        }

    }   
