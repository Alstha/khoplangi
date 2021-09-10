$(document).ready(function(){
    $("#hid").click(function(){
        $("#list").toggle()
    })
    $("#hid").click(function(){
        $(".name").toggle()
    })
    $("#lg").hover(function(){
        $("#nav").toggle()

    })
    
    $(".div_show2").click(function(){
        $("main").load("kitchen.html");
    })
    $(".div_show3").click(function(){
        $("main").load("Bathroom.html");
    })
    $(".div_show4").click(function(){
        $("main").load("poultry.html");
    })
    $(".div_show5").click(function(){
        $("main").load("Junk.html");
    })
})
var q = document.getElementById("preload");
function myFun(){
    preload.style.display="none"
}
var w= document.getElementById("load");
function Myfuc(){
    load.style.display="none"
}