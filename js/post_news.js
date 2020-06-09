$(function(){
    let obj=JSON.parse(localStorage["news"]);
    $("#post_title").text(obj.title);
    $("#date").text(obj.date);
    $("#description").text(obj.description);
    $("#description1").text(obj.description1);
    $("#mg").attr("src",obj.photo);
    $("#description2").text(obj.description2);
    $("#description3").text(obj.description3);
    $("#description4").text(obj.description4);
  })
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
  }, 1000);
  