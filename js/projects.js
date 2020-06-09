$(function(){
    let obj=JSON.parse(localStorage["projects"]);
    $("#title").text(obj.title);
    $("#photo1").attr("src",obj.photo1);
    $("#sub_title1").text(obj.sub_title1);
    $("#description").text(obj.description);
    $("#photo2").attr("src",obj.photo2);
    $("#photo3").attr("src",obj.photo3);
    $("#sub_title2").text(obj.sub_title2);
    $("#description1").text(obj.description1);
  })
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
  }, 1000)