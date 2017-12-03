
var a = document.getElementById('a');
var s = document.getElementById("s");
var d = document.getElementById("d");
var f = document.getElementById("f");
var g = document.getElementById("g");
var h = document.getElementById("h");
var j = document.getElementById("j");
var k = document.getElementById("k");
var l = document.getElementById("l");

 


$(document).ready(function () {
    var i=0;
     var letter;
    $('button').addClass('button');
    var $butt = $('button');
    var unique = $('.button')[i].getAttribute('rel');

// change color on click
    $('.button').on('click', classy);

    function classy() {        
        $(this).addClass('pick').delay(100).queue(remove);   
    }

    //change color on keydown

   $(document).on('keydown', function (e) {

    //see if event.which matches rel attribute

    for (var i = 0; i < $butt.length; i++) {
         unique = $(".button")[i].getAttribute("rel");
    if(e.which == unique){

        console.log($butt[i].getAttribute('id'));

        var $newId = $butt[i].getAttribute("id");
        
        $($butt[i]).addClass('pick').delay(100).queue(remove); 



    }
      
    }
   });

     
    //remove class, initial
    function remove(){
        $(this).removeClass('pick').dequeue();
    }
   
    

 


    


    








    
});