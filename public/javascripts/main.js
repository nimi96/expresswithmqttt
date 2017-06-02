function getjson2(){


 var http_request = new XMLHttpRequest();
        http_request.onreadystatechange = function(){

            if (http_request.readyState == 4  ){
                // Javascript function JSON.parse to parse JSON data

                    var jsonObj = (http_request.responseText);

                        var mymsg = jsonObj[i].name;
                        console.log(mymsg)
                    

                // jsonObj variable now contains the data structure and can

                // be accessed as jsonObj.name and jsonObj.country.
                 
           

                }

            }    
                
        
        http_request.open("GET","localhost:"+"3000"+"/users/data", true);
        http_request.send();





};

var myVar;


 myVar = setInterval(getjson2, 3000);