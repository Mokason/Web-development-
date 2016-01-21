//Clicking 
$("ul").on("click", "li",function() {
	$(this).toggleClass("completed");
});
//Deleting
$("ul").on("click", "span", function(event){
	//alert("clicked on a span!");
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});
//Keys
$("input[type='text'").keypress(function(event){
	//console.log("Key Press");
	if(event.which === 13){
		//console.log("You hit enter");
		//new text from input
		var todoText = $(this).val();
		$(this).val("")
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText +"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToogle();
});