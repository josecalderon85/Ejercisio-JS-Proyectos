    

   

function pagaWey(){
    
    let total = parseInt(document.getElementById("total").value)
    let gratuity = document.getElementById("gratuity").value

  
    if(gratuity === "fifteen"){
        document.getElementById("result").value = (total * .15) + total;
    }
    if(gratuity === "ten"){
        document.getElementById("result").value = (total * .10) + total;
    }
    if(gratuity === "twenty"){
        document.getElementById("result").value = (total * .20) + total;
    }

    
};
  
   
