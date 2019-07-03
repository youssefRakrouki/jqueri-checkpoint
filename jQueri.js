
      
       
        $("#btn1").click(function(){
            $("#MyText").css("fontWeight","bold");

        })
        $("#btn2").click(function(){
            $("#MyText").css("fontStyle","italic");

        })
        $("#btn3").click(function(){
            $("#MyText").css("textDecoration","underline")
        })
       
        $("#option").change(function(){
            $("#MyText").css("fontSize",$("#option").val());

        })
        $("#a").change(function(){
            $("#MyText").css("font-family",$("#a").val());

        })
        $("body").css('background-image',"Linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),Linear-gradient(127deg, black, black 70.71%),Linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)");
        $("a").css("color","black");
        $("a").css("fontSize","50px");
        $("nav").css("float","right");
        $("div").fadeTo("slow",0.2);
        $("button").click(function(){ //Use a jQuery method to toggle between fading in and out a <div> element, when clicking on a button
            $("div").fadeToggle(1000);
          });
          $("div").animate({
           opacity : '0.4',
            width: '500px',
            height: '500px'
          });
          $("div").text();