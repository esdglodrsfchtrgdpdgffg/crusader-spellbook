// This line will hide the element as soon as the page is loaded
$(".hideme").hide();
$(".youdied").hide();
$(".inthenameofgod").hide();
$("#aparecium").click(function(){
    $(".hideme").fadeToggle(); 
});
$("#avadakedavra").click(function(){
    $("#saracen").attr("src","https://worldhistory.us/wp-content/uploads/2017/05/edward-gibbon-and-the-crusades.jpg");
});
$("#protego").click(function(){
    $("#shield").fadeOut();
});
$("#take").click(function(){
    $(".inthenameofgod").fadeIn();
    $(".youdied").fadeOut();
});
$("#notake").click(function(){
    $(".youdied").fadeIn();
    $(".inthenameofgod").fadeOut();
});