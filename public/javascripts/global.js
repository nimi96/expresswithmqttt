
// Userlist data array for filling in info box
var userListData = [1];

// DOM Ready =============================================================
$(document).ready(function() {
    
    populateTable();



});
// Functions =============================================================
// Fill table with data
function populateTable() {

    

    // jQuery AJAX call for JSON
    $.getJSON( '/users/data', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            
         var abc=this.name;

		xyz=JSON.stringify(abc);
		//console.log(xyz);

		if (xyz[1]==0) 
		{

        
 console.log("red");

	 	  document.getElementById("red").innerHTML = "<img src=/images/red.jpg>" ;
		document.getElementById("yellow").innerHTML = "<img src=/images/yello_off.jpg>" ;
		document.getElementById("green").innerHTML = "<img src=/images/up_of.png>" ;
		document.getElementById("walk_on").innerHTML = "<img src=/images/walk_on1.jpg>" ;
		document.getElementById("walk_off").innerHTML = "<img src=/images/walk.jpg>" ;
		document.getElementById("blank0").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		document.getElementById("blank1").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ; 		
       
        //console.log("hello");



		} 

	else if(xyz[1]==1) {



	     console.log("yellow");
		document.getElementById("red").innerHTML = "<img src=/images/redoff.jpg  height='42' width='42' > <br> " ;
		document.getElementById("yellow").innerHTML = "<img src=/images/yello.jpg> <Br> " ;
		document.getElementById("green").innerHTML = "<img src=/images/up_of.png><br> " ;
		document.getElementById("walk_on").innerHTML = "<img src=/images/walk_on1.jpg>" ;
		document.getElementById("walk_off").innerHTML = "<img src=/images/walk.jpg>" ;
		document.getElementById("blank0").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
		document.getElementById("blank1").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
		}

else{


console.log("green");

document.getElementById("red").innerHTML = "<img src=/images/redoff.jpg  height='42 width='42'>" ;
document.getElementById("yellow").innerHTML = "<img src=/images/yello_off.jpg>" ;
document.getElementById("green").innerHTML = "<img src=/images/up.jpg>" ;
document.getElementById("walk_on").innerHTML = "<img src=/images/stand.jpg>" ;
document.getElementById("walk_off").innerHTML = "<img src=/images/walk.jpg>" ;
document.getElementById("blank0").innerHTML = "<img src=/images/black.png height='42' width='42'>" ;
document.getElementById("blank1").innerHTML = "<img src=/images/black.png  height='42' width='42'>" ;
}









});

        });


        // Inject the whole content string into our existing HTML tablz
    
};


var myVar;


 myVar = setInterval(populateTable, 5000);





















 


