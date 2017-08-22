$(document).ready(function(){
    /* Moves a div downwards
    function bringDown(){
        document.getElementById("modifymenu").classList.add('movement');
    }*/
    $("#AddService").click(function(e) {
        e.preventDefault();
        $("#modifymenu").toggleClass("movement");
    });
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Visibility togglers
    $("#services").click(function(e){
      e.preventDefault();
      $("#InfoGeneral").css("display","none");
      $("#Servicios").css("display","inline");
    });
    $("#infogen").click(function(e){
      e.preventDefault();
      $("#InfoGeneral").css("display","inline");
      $("#Servicios").css("display","none");
    });
});
