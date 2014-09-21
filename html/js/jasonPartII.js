
$(document).ready(function(){
	$("#filter-image").click(function(){
		if ($(this).hasClass('filter-open')){
			$(this).removeClass('filter-open');
			$('.filter-background').addClass('notDisplayed');	
			$(this).animate({top:"15%"},150);
			$(this).animate({right:"29%"},150);
		}else{
			$(this).addClass('filter-open');
			$(this).animate({right:"40%"},150, function(){
				$(this).animate({top:"300%"},200, function(){
					$('.filter-background').removeClass('notDisplayed');
				});
			});
						
		}
	});
	
	$(".clearButton").click(function(){
		$("#level0").prop("checked", true);
		document.getElementById("filter-text").value="";
		document.getElementById("filter-discipline").options[0].selected=true;
	});
	
	$('.form-control').keypress(function(event){
 
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			$( ".searchButton" ).trigger( "click" );
		}
		event.stopPropagation();
	});
});
