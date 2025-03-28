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


// --------------------------------------------------

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}