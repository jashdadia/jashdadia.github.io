<script>
	AOS.init();
</script>

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $("ul").css("width" , "50%").css("background" , "gray").css("opacity" , ".8").css("border-radius" , "10px");
	  }

	  else{
		  $("ul").css("width" , "100%").css("background" , "#333").css("opacity" , "1").css("border-radius" , "0px");  	
	  }
  })
})