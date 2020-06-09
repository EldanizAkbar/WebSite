$(function(){

    let   All_cards=$("div#card").length;
    let itemperpage=9;

    $("div#card:gt("+(itemperpage-1)+")").hide();
    let pagecount=Math.round( All_cards/itemperpage);
    console.log(pagecount);

    for(let i=1; i<=pagecount;i++){
        $("#pages").append(`<a href="#">`+ i +`</a>`);
    }
    $("#pages a:first").addClass("active");

    $("#pages a").click(function(){
        let index=$(this).index()+1;
        var gt=itemperpage*index;
        $("#pages a").removeClass("active");
        $(this).addClass("active");
        $("div#card").hide();
        for(let i=gt-itemperpage; i<gt;i++){
            $("div#card:eq("+ i +")").show(900);

        }
       
    })
   
})
setTimeout(function(){
    $('.loader_bg').fadeToggle();
  }, 1000);