

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

        var uno = document.getElementById("uno");
        var dos = document.getElementById("dos");
        var tres = document.getElementById("tres");

        switch(i){

            case 1:
                uno.hidden = true;
                dos.hidden = false;
                i++;
                break;
            case 2:    
                dos.hidden = true;
                tres.hidden = false;
                i++;
                break;
            case 3:
                tres.hidden = true;
                uno.hidden = false;
                i = 1;
                break;

        }
      

    }   
