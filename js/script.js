
$(document).ready(function(){
  $(".picha2").click(function(){
    var link=$(this).attr("src");
    $("#picha3").attr("src",link);
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "30%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
