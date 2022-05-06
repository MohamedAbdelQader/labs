
        let i=0;
    setInterval(function(){
        
        document.images[i+1].src="./marble3.jpg";
        document.images[i].src="./marble1.jpg";
        i++;
        
        if (i==document.images.length-1 ){
            document.images[i].src="./marble1.jpg";
            i=0;
        }
    }

,1000);

