$(function(){

    $(".draggable").draggable({

        stack: ".draggable",
        containment: ".container"
    });
 
    $(".switch").click( function() {
        $(".container").toggleClass("darkmode");
    })

    // cat appears on hover
    $(".hover").mouseover( function() {
        $(".grandpa").css("display", "block");
    })

    // cat disappears on mouse out
    $(".hover").mouseout( function() {
        $(".grandpa").css("display", "none");
    })

    // display hidden text
    $(".clickme").click( function() {
        $(".extra-info").fadeToggle("hide");
    })

    //animate circle 
    $(".red-circle").dblclick( function() {
        $(".red-circle").animate({
            left:"100px"
        })
    })

})