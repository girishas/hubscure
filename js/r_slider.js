var me_id = 0;
var image_src ='';
var set_post_id =0;
var post_id =0
$(document).on('click','.popupChangeHtml',function(){
	image_src = $(this).attr('rel_src');
	me_id = $(this).attr('rel_image_box_id');
	post_id = $(this).attr('rel_post_id');

	 $('.image_in_popup').attr('src',image_src);
	// $('.image_in_popup').css('background-image', 'url(' + image_src + ')');

	 if(post_id == set_post_id){
     	
     }else{
     	 set_post_id = post_id;

     	 angular.element(document.getElementById('open-photo-popup-v1')).scope().getPostDeatils(set_post_id,1);     	

     }  

     jQuery('#open-photo-popup-v1').modal('show');

     
});

$(document).on('click','#deletephoto',function(){

    var user_id = $("#user_id").val();
    rel = $(this).attr('rel');
    post_id = $(this).attr('rel_post_id');
     if(post_id == set_post_id){
        angular.element(document.getElementById('deletephoto')).scope().deletePostPhoto(user_id,rel,post_id);
     }else{
         set_post_id = post_id;
         angular.element(document.getElementById('deletephoto')).scope().deletePostPhoto(user_id,rel,post_id);         

     }  

     
});


$(document).on('click','.me_next',function(){

	     var check   =  $('.image_box_'+me_id).next().find('.popupChangeHtml').attr('rel_image_box_id');

	     if(typeof check == 'undefined'){

	     	  image_src =  $('.image_box_'+me_id).parent().first().find('.popupChangeHtml').attr('rel_src');

              post_id =  $('.image_box_'+me_id).parent().first().find('.popupChangeHtml').attr('rel_post_id');

              me_id = $('.image_box_'+me_id).parent().first().find('.popupChangeHtml').attr('rel_image_box_id');
	     	

	     }else{

	     	 image_src =  $('.image_box_'+me_id).next().find('.popupChangeHtml').attr('rel_src');

             post_id =  $('.image_box_'+me_id).next().find('.popupChangeHtml').attr('rel_post_id');

             me_id =  $('.image_box_'+me_id).next().find('.popupChangeHtml').attr('rel_image_box_id');

	     }
     

         $('.image_in_popup').attr('src',image_src);

        // $('.image_in_popup').css('background-image', 'url(' + image_src + ')');

         if(post_id == set_post_id){
         	
         }else{

         	 set_post_id = post_id;

         	 angular.element(document.getElementById('open-photo-popup-v1')).scope().getPostDeatils(set_post_id,1);
         	 

         }       

         
         
	});

$(document).on('click','.me_prev',function(){

	var check   =  $('.image_box_'+me_id).prev().find('.popupChangeHtml').attr('rel_image_box_id');

	 if(typeof check == 'undefined'){

	 	 image_src =  $('.image_box_'+me_id).parent().last().find('.popupChangeHtml').attr('rel_src');

          post_id =  $('.image_box_'+me_id).parent().last().find('.popupChangeHtml').attr('rel_post_id');

          me_id = $('.image_box_'+me_id).parent().last().find('.popupChangeHtml').attr('rel_image_box_id');

	 }else{

	 	image_src =  $('.image_box_'+me_id).prev().find('.popupChangeHtml').attr('rel_src');

        post_id =  $('.image_box_'+me_id).prev().find('.popupChangeHtml').attr('rel_post_id');

        me_id =  $('.image_box_'+me_id).prev().find('.popupChangeHtml').attr('rel_image_box_id');

	 }
         
         

         $('.image_in_popup').attr('src',image_src);

        // $('.image_in_popup').css('background-image', 'url(' + image_src + ')');

         if(post_id == set_post_id){
         	
         }else{

         	 set_post_id = post_id;

         	 angular.element(document.getElementById('open-photo-popup-v1')).scope().getPostDeatils(set_post_id,1);
         	
         }            
         
	});