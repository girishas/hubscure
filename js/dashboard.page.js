
function myStopFunction() {

    
} 
$.fn.selectRange = function(start, end) {
    if(!end) end = start; 
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};
jQuery('.common_class').hide();
jQuery('.common_class_level').hide();


jQuery(document).on('click','.close_publication_box',function(){
  jQuery('.btnclose').css('display','block'); 
  setTimeout(function(){ jQuery('.btnclose').css('display','none'); },300);
});




jQuery(document).on('click','.toggle_field',function(){
     var ele_rel = jQuery(this).attr('rel');
     //jQuery('.common_class').hide();
     jQuery('.'+ele_rel+'_input_div').show();
     clearInterval(myVar);
});

var lo = true;
jQuery(document).on('click','.location1',function(){
	if(lo){		
		initAutocomplete();

	}
	lo = false;
	clearInterval(myVar);
});
jQuery('.post_forms').keydown(function(event){
	    if(event.keyCode == 13) {
	      event.preventDefault();
	      //return false;
	    }
	    return true;
});	
 function getSelectedValue(id) {
	
	
        return $("#" + id).find("dt a span.value").html();
    }
$(".dropdown img.flag").addClass("flagvisibility");
$(".dropdown_level img.flag").addClass("flagvisibility");


$(document).on('click',".dropdown dt a",function() {
    $(".dropdown dd ul").toggle();
});

$(document).on('click',".dropdown_level dt a",function() {
    $(".dropdown_level dd ul").toggle();
});
            
$(document).on('click',".dropdown dd ul li a",function() {
    var text = $(this).html();
    $(".dropdown dt a").html(text);
    $(".dropdown dd ul").hide();
    $(".who_can_see_hidden_input").val(getSelectedValue("sample"));
});

$(document).on('click',".dropdown_level dd ul li a",function() {
    var text = $(this).html();
    $(".dropdown_level dt a").html(text);
    $(".dropdown_level dd ul").hide();
    $(".subscription_level_hidden_input").val(getSelectedValue("sample_level"));
});
 $(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown"))
        $(".dropdown dd ul").hide();
});

 $(document).bind('click', function(e) {
    var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("dropdown_level"))
        $(".dropdown_level dd ul").hide();
});

$(".dropdown img.flag").toggleClass("flagvisibility");
$(".dropdown_level img.flag").toggleClass("flagvisibility");


var removeTag = '<a href="javascript:void(0)" class="removefield text_color_of_publication_box" style="">Remove</a>';
var countFieds =1;
jQuery(document).on('click','.addmore',function(){
   var ele = $(this);
   var html =  $(ele).parent().clone();  
   $(html).find("input:text").val("");
   $(html).find(".addmore").replaceWith(removeTag);
   $(html).find(".poll_options").addClass('remove_options');
   $(ele).parent().parent().append(html);
   countFieds++;
});
jQuery(document).on('click','.removefield',function(){
	var $target =$(this).parent();
    $target.fadeOut('slow', function(){ $target.remove(); });
	countFieds--;
});
jQuery(document).on('click','.morecontemttype',function(){
  $(this).find('.more-dropdown').toggle();
});


		
