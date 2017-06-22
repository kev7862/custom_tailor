$(document).ready(function(){
  $(".picha2").click(function(){
    var link=$(this).attr("src");
    $("#picha3").attr("src",link);
  });
});
