
var city = ['Battle,UK',"Norway","Ancient Agora of Athens,Greece","Santo Spirito, Florence "];

$('.images').mouseover(function() {
    movePreview(this.id);
});

$('.images').mouseleave(function() {
   removePreview(this.id);
});


function removePreview(id) {
    $('.big-img').toggleClass("img-show");
    $("#"+id).removeClass("gray");
    $("#bigImg").hide();
    $('#figCap').hide();
}

function movePreview(id){
    $('.big-img').toggleClass("img-show");
    $("#"+id).toggleClass("gray");
    $("#bigImg").show();
    $('#figCap').show();
    $("#bigImg").attr("src","images/"+ id + "-large.jpg");
    $('#figCap').html(city[id - 1]);
}