function currentTime(){
    //console.log("working")
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    console.log(document.getElementById("selector").value)
    if(sec === "00"){
        console.log("new minute")
    }  
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000);
  
    }
    function updateTime(k) {
    if (k < 10) {
    return "0" + k;
    }
    else {
    return k;
    }
    }
      
      
      // Close the dropdown menu if the user clicks outside of it
      
    currentTime();

