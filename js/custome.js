var myVar; 

function open_Post_Box(tab=null){


  jQuery('#Discussion_form').modal('show');
  jQuery('.modal-header,.btnclose').show();  
  jQuery('.btnclose').css('display','block'); 


  if(tab){
     $('.nav-link').removeClass('disabled');
     $('.hide_class').each(function(){
          var formId = $(this).attr('rel');  
          $(this).attr('onclick', "changeFormHtml("+formId+")");    
      });

    if(tab == 8){
      jQuery('#nav_link'+tab).click();
    }else{
      jQuery('#nav_link'+tab+',.removefield').click();
    }

   $('.nav-link').addClass('disabled');
   $('.nav-link').removeAttr('onClick'); 

   $('.nav-link'+tab).attr('onclick', "changeFormHtml("+tab+")");   

     
  }else{

     angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
           $scope.RefreashPostBox();
        })


     $('.nav-link').removeClass('disabled');  
     $('.hide_class').each(function(){
          var formId = $(this).attr('rel');          
          $(this).attr('onclick', "changeFormHtml("+formId+")");    
      });
     jQuery('#nav_link1,.removefield').click();
     jQuery('.summernote').summernote('reset');
     jQuery('.desc_9').summernote('reset');
  
  } 

  jQuery('#sample').html(jQuery('.hidden_html').html());

   jQuery('#sample_level').html(jQuery('.hidden_html_level').html());
   
}


jQuery(document).on('click','.opennodel_popup',function(){
        var rel = $(this).attr('rel');
         angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
           $scope.getPostDeatils(rel);
        })

});
jQuery(document).on('click','.subscribeModel',function(){
			jQuery('.modal').modal('hide');			
			var page_id = $(this).attr('rel');
			var user_id = $(this).attr('rel_type');
			var page_type = $(this).attr('rel_type_1');
			//alert(rel);
			jQuery('#edit-widget-blog-post').modal('show');
			
			$('._page_id_').val(page_id);
			$('._user_id_').val(user_id);
			$('._page_type_').val(page_type);
			
			//$('#accept_terms_for_subscribe').model('hide');
});

jQuery(document).on('click','.open_report',function(){
         jQuery('.modal').modal('hide');
         var rel = $(this).attr('rel');
         var rel_type = $(this).attr('rel_type');
         jQuery('#report_popup').modal('show');
         if(rel_type ==1){
           jQuery('.form_show_2').hide();
           jQuery('.form_first').show();
         }
        
         $('.submit_report').attr('rel',rel);
         $('.submit_report').attr('rel_type',rel_type);

});

jQuery(document).on('click','.UnFriend',function(){
    $('.box').show();
    $(this).parents('li').find('.box').hide();
    $('.box2').hide();
    $(this).parents('li').find('.box2').show();
});

jQuery(document).on('click','.cancles',function(){
    $(this).parents('li').find('.box').show();
    $(this).parents('li').find('.box2').hide();
});


jQuery('.openModel').on('click',function(){
        open_Post_Box();
    });

jQuery( ".js-profile-settings-open" ).click(function() {
  jQuery(".profile-settings-responsive").toggleClass( "open" );
});


$(document).on('mouseover','.author_details',function(){
    $('.fixed-sidebar').css('z-index',21);
});

 $(".js-sidebar-open-right").on('click', function () {
 // alert('hello');
        $(this).toggleClass('active');
        $('.s-right').toggleClass('open', 0);
        $('.fixed-sidebar').css('z-index',22);            
        return false;
    } );

 $(".left_sidebar_toggle").on('click', function () {
  //alert('hello');
        $(this).toggleClass('active');
        $('.left_sidebar_new').toggleClass('open', 0);    
        return false;
    } );

 
 $(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.back-top').fadeIn();
    }else{
        $('.back-top').fadeOut();
    }
});

$('.back-top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
});


jQuery(document).on('blur keyup paste copy cut mouseup change','.comment_text_area1',function(event){   

    if(event.keyCode == 13) {
     var text = $(this).text();
       if( text !=''){
          $(this).parents('form').submit();
           $(this).html(' ');
        } 
      }  
     var valu = $(this).html();
     $(this).prev().val(valu);
});


var run = false;

jQuery(document).on('click','.comment_text_area1',function(event){ 

    var post_id = event.target.attributes.rel_id.value;
    var user_id = event.target.attributes.rel_user_id.value;
  if(run == false){
       angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.startTyping(post_id,user_id);
        });
       run = true;
}
    $(this).one('keyup', function(e){
      console.log(e.keyCode);
      if(e.keyCode == 13) {
         angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.stopTyping(post_id,user_id);
        });
        run = false; 
      }  

    });
     
});

jQuery(document).on('blur keyup paste copy cut mouseup change','.chat_text_area1',function(event){   

    if(event.keyCode == 13) {
       $(this).find('div').remove();
       $(this).find('br').remove();
           $(this).parents('form').submit();
           $(this).html(' ');    
        }
      var valu = $(this).html();
     $(this).prev().val(valu);
});

jQuery(document).on('blur keyup paste copy cut mouseup change','.comment_text_area2',function(event){   

    if(event.keyCode == 13) {
           $(this).parents('form').submit();
           $(this).html(' ');
        }

    var valu = $(this).html();
    $(this).prev().val(valu);
      
    angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.edit_comment= valu;
        })
});


jQuery(document).on('blur keyup paste copy cut mouseup change input','.post_comment_box',function(event){   
    var valu = $(this).html();
     $(this).parents('form').find('textarea').val(valu);
    });

jQuery(document).on('click','.add_giphy3',function(){


      var rel_embed = $(this).attr('rel_embed');
      var rel_post_id = $(this).attr('rel_post_id');      
      
      jQuery('.giphy_image_c_'+rel_post_id).val(rel_embed);
      jQuery('.giphy_box_'+rel_post_id).hide();
      var edit_el =  jQuery(this).parents('.c_box').find('.comment_text_area');
      var valu = $(edit_el).html();
      $(edit_el).prev().val(valu);

      angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.edit_comment= valu;
            console.log( $scope.edit_comment);
            console.log( valu);
        })
      jQuery(this).parents('.c_box').find('form').submit();
});

jQuery(document).on('click','.add_giphy3_post',function(){


      var rel_embed = $(this).attr('rel_embed');
      var rel_post_id = $(this).attr('rel_post_id');      
      
    /*  jQuery('.giphy_image_c_'+rel_post_id).val(rel_embed);
      jQuery('.giphy_box_'+rel_post_id).hide();
      var edit_el =  jQuery(this).parents('.c_box').find('.comment_text_area');
      var valu = $(edit_el).html();
      $(edit_el).prev().val(valu);*/

      angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.post_giphyng= rel_embed;
            $scope.desableMe();
        })
     
});

jQuery(document).on('click','.de_active_emoji',function(){
    
    $('.de_active_emoji').show();
    $('.active_emoji').hide();
    $(this).hide();
    $(this).parent().next().find('.active_emoji').show();

});
/* jQuery(document).on('click','.click_giphy',function(){
	//alert('sdfg');
     jQuery('.popup_gypyyyy').css('display','none');
     $(this).parent().parent().parent().next('.popup_gypyyyy').fadeIn();
}); */
jQuery(document).on('click','.click_giphy',function(){
	//alert('sdfg');
     jQuery('.popup_gypy').css('display','none');
	 $('.chatcss').css("position","static");
	 $('.chatcss').css("width","100%");
	 $('.popup-chat-responsive').css("max-height","90%");
     $(this).parent().parent().parent().next('.popup_gypy').fadeIn();
});
jQuery(document).on('click','.click_giphy_post',function(){
     jQuery('.popup_gypy').css('display','none');
     //alert('hhh');
     $(this).parents('form').find('.popup_gypy').fadeIn();
});

jQuery('html').click(function(e) { 
  
   if(!$(e.target).hasClass('popup_gypy') && !$(e.target).hasClass('searchgiphy')) {
       jQuery('.popup_gypy').css('display','none');
   } 
   //jQuery('.emoji_pop_up').css('display','block');
}); 


 jQuery(document).mouseup(function(e) 
{
    var container = $(".emoji_pop_up");
    /*var container2 = $(".comment_text_area");


    if (container2.is(e.target) || container.is(e.target) && container.has(e.target).length )
    {
      post_id = e.target.attributes.rel_id.value;
      user_id = e.target.attributes.rel_user_id.value;

       if (container2.length){
       
         angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
           $scope.startTyping(post_id,user_id);
         });
        
      }
   
    }
*/
    
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {

        container.hide();
    }


     var container = $(".add-options-message");
     if (!container.is(e.target) && container.has(e.target).length === 0) 
    {//alert('bbb');
         clearInterval(myVar);
    }
    
     var container = $(".publication_box");

     if (!container.is(e.target) && container.has(e.target).length === 0 && !$(e.target).hasClass('no_draft') && !$(e.target).hasClass('no_schedule') && !$(e.target).hasClass('popover') && !$(e.target).hasClass('daterangepicker') && !$(e.target).hasClass('am-button')  && !$(e.target).hasClass('pm-button')){
           

            var check_post_modale = $('#Discussion_form').hasClass('show');
            container = $(".popover");

            container2 = $('.daterangepicker');
            container5 = $('.dtp');
            container4 = $('.daterangepicker1');
           //console.log(document.getElementById("ComfirmBox_draft"));

           container3 = $('#ComfirmBox_Schedule');
			
		 var ClassExist = $('#ComfirmBox_draft').hasClass('show');
     

		if(ClassExist == false){
			if (!container3.is(e.target) && container3.has(e.target).length === 0 && !container.is(e.target) && container.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0 && !container4.is(e.target) && container4.has(e.target).length === 0 && !container5.is(e.target) && container5.has(e.target).length === 0){  
				if(check_post_modale){
				    angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
						$scope.checkForDraft();
				    })
					
				}
			} 
        }   
        
    }

     /*if (!container.is(e.target) && container.has(e.target).length === 0 && !$(e.target).hasClass('no_draft')  && !$(e.target).hasClass('popover') && !$(e.target).hasClass('daterangepicker') && !$(e.target).hasClass('am-button')  && !$(e.target).hasClass('pm-button')){
      if(check_post_modale){
            angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.checkForDraft();
            });
          
        }
      }*/

    

   // alert();

    
});

jQuery(document).mouseup(function(e) 
{
    var container = $(".emoji_pop_up_chat");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {

        container.hide();
    }


     var container = $(".add-options-message");
     if (!container.is(e.target) && container.has(e.target).length === 0) 
    {//alert('bbb');
         clearInterval(myVar);
    }
    
    
});


var emoji_div_height = 200;
var emoji_div_scroll_h = 0;
var start_item = 1;

var emojis_array = ["activity", "animals", "flags","food","objects","symbols","travel"];
//smileys
jQuery('body').on('mousewheel DOMMouseScroll', '.emoji_datas', function () {
        
            
        emoji_div_scroll_h = $(this).scrollTop();

        //console.log($(this).scrollTop());
        //console.log($(this)[0].scrollHeight);
        //console.log($(this).height());

         if ($(this).scrollTop() >= $(this)[0].scrollHeight- $(this).height() -100 ) {

            angular.element(document.getElementById('b_body')).scope().$apply(function($scope){

                if(emojis_array.length >=1){
                        var flder=  emojis_array.shift();
                        $scope.getEmojis(1,flder);
                }
            
           
        })
        }
});
jQuery(document).on('mouseover','.emoji_div',function(){

    var img = $(this).find('img').attr('rel');
    $(this).find('img').attr('src',img);
	
    img = $(this).parents('span').prev().find('img').attr('rel');
    $(this).parents('span').prev().find('img').attr('src',img);	
    img = $(this).parents('span').prev().prev().find('img').attr('rel');
    $(this).parents('span').prev().prev().find('img').attr('src',img);	
    img = $(this).parents('span').prev().prev().prev().find('img').attr('rel');	
    $(this).parents('span').prev().prev().prev().find('img').attr('src',img);
	
	img = $(this).parents('span').prev().prev().prev().prev().find('img').attr('rel');	
    $(this).parents('span').prev().prev().prev().prev().find('img').attr('src',img);
	img = $(this).parents('span').prev().prev().prev().prev().prev().find('img').attr('rel');	
    $(this).parents('span').prev().prev().prev().prev().prev().find('img').attr('src',img);
	img = $(this).parents('span').prev().prev().prev().prev().prev().prev().find('img').attr('rel');	
    $(this).parents('span').prev().prev().prev().prev().prev().prev().find('img').attr('src',img);
	img = $(this).parents('span').prev().prev().prev().prev().prev().prev().prev().find('img').attr('rel');	
    $(this).parents('span').prev().prev().prev().prev().prev().prev().prev().find('img').attr('src',img);
	img = $(this).parents('span').prev().prev().prev().prev().prev().prev().prev().prev().find('img').attr('rel');	
    $(this).parents('span').prev().prev().prev().prev().prev().prev().prev().prev().find('img').attr('src',img);
	img = $(this).parents('span').prev().prev().prev().prev().prev().prev().prev().prev().prev().find('img').attr('rel');	
    $(this).parents('span').prev().prev().prev().prev().prev().prev().prev().prev().prev().find('img').attr('src',img);
	
	
    img = $(this).parents('span').next().next().next().next().next().next().next().next().next().find('img').attr('rel');
    $(this).parents('span').next().next().next().next().next().next().next().next().next().find('img').attr('src',img);
    img = $(this).parents('span').next().next().next().next().next().next().next().next().find('img').attr('rel');
    $(this).parents('span').next().next().next().next().next().next().next().next().find('img').attr('src',img);
    img = $(this).parents('span').next().next().next().next().next().next().next().find('img').attr('rel');
    $(this).parents('span').next().next().next().next().next().next().next().find('img').attr('src',img);
    img = $(this).parents('span').next().next().next().next().next().next().find('img').attr('rel');
    $(this).parents('span').next().next().next().next().next().next().find('img').attr('src',img);
    img = $(this).parents('span').next().next().next().next().next().find('img').attr('rel');
    $(this).parents('span').next().next().next().next().next().find('img').attr('src',img);
    img = $(this).parents('span').next().next().next().next().find('img').attr('rel');
    $(this).parents('span').next().next().next().next().find('img').attr('src',img);
	
	img = $(this).parents('span').next().next().next().find('img').attr('rel');
    $(this).parents('span').next().next().next().find('img').attr('src',img);
    img = $(this).parents('span').next().next().find('img').attr('rel');
    $(this).parents('span').next().next().find('img').attr('src',img);
    img = $(this).parents('span').next().find('img').attr('rel');
    $(this).parents('span').next().find('img').attr('src',img);

});
jQuery('body').on('mousewheel DOMMouseScroll', '.gif_box', function () { 
         //console.log('scroll');   
       /*  angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.giphyng(giphy_post_id,3);
        })*/

});

 jQuery(document).on('keyup','.searchgiphy',function(){
          sea = jQuery(this).val();
          giphy_post_id = jQuery(this).attr('rel');
 //alert(sea);
 //alert(giphy_post_id);
          angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            $scope.searchgif = sea;
            $scope.giphyng(giphy_post_id,2);
        })
});
    var old_src_post = '';
    var ele_id_post = '';

function readURLPost(input) {
  var id =  $(input).attr('rel');
       ele_id_post =id;
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    var thumb ='<div class="remove_comment_thum_post'+id+' remove_thum"><a  href="javascript:void(0);" class="comment-thumb_close remove_prev_post icon-close" data-dismiss="modal" aria-label="Close"><svg class="olymp-close-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+site_url_without_prifix_p +'public/img/icons.svg#olymp-close-icon"></use></svg></a></div>';

    var blah_img = '<img class="comment_image"  id="blah_post'+id+'" ng-src="fdgfgfd" alt="photo">';

   var ele = $('#blah_post'+id).length;

    if(ele){
       jQuery(".post_file_edit_"+id).prepend(thumb);
    }else{
        jQuery(".post_file_edit_"+id).prepend(blah_img);
        jQuery(".post_file_edit_"+id).prepend(thumb);
    }
jQuery(".post_file_edit_"+id).css("padding-bottom", "8px");
    reader.onload = function(e) {
        old_src = $('#blah_post'+id).attr('src');
        $('#blah_post'+id).attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
jQuery(document).on('click','.remove_prev_post',function(){
        jQuery('.fileInput_'+ele_id_post).val('');
        jQuery('#blah_post'+ele_id_post).remove();
        jQuery('.remove_prev_post').remove();
        jQuery(".post_file_edit_"+ele_id_post).css("padding-bottom", "0px");
    });
var old_src = '';
var ele_id = '';
function readURL(input,id) {
       ele_id =id;
  if (input.files && input.files[0]) {
    

    var thumb ='<div class="remove_comment_thum_'+id+' remove_thum"><a  href="javascript:void(0);" class="comment-thumb_close remove_prev icon-close" data-dismiss="modal" aria-label="Close"><svg class="olymp-close-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+site_url_without_prifix_p+'public/img/icons.svg#olymp-close-icon"></use></svg></a></div>';

    var blah_img = '<img class="comment_image" ng-if="comments.file" id="blah_'+id+'" ng-src="" alt="photo">';

   var ele = $('#blah_'+id).length;

var target_ele = $(input).parents('.c_box').find('.comment-thumb');

   var target_ele_img = $(input).parents('.c_box').find('.comment_image');
  
   var reader = new FileReader();

    if(target_ele_img.length >=1){
       jQuery(target_ele).prepend(thumb);
    }else{
        jQuery(target_ele).prepend(blah_img);
        jQuery(target_ele).prepend(thumb);
    
    }

    jQuery(target_ele).css("padding-bottom", "8px");

    
      reader.onload = function(e) {
        old_src = $(target_ele_img).attr('src');
        var target_ele_img = $(input).parents('.c_box').find('.comment_image');
        $(target_ele_img).attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
jQuery(document).on('click','.remove_prev',function(){
        jQuery('.replyfileInput_'+ele_id).val('');
        jQuery('#blah_'+ele_id).remove();
        jQuery('.remove_prev').remove();
        jQuery(".comment_file_edit_"+id+':last').css("padding-bottom", "0px");
    });
jQuery(document).on('keypress','.submit_form_reply',function(e){        
         if (e.which == 13) {
           var rel_id = jQuery(this).attr('rel');
           var linn =   '#reply_form_'+rel_id;    
           jQuery('#reply_form_'+rel_id).submit();
            return false;   
          }
         
    });
    jQuery(document).on('keypress','.submit_form_class',function(e){        
         if (e.which == 13) {
           var rel_id = jQuery(this).attr('rel');
           jQuery('#comment_form_'+rel_id).submit();
            return false;   
          }
         
    });

    jQuery(document).on('keypress','.submit_form_class2',function(e){       
         if (e.which == 13) {

           var rel_id = jQuery(this).attr('rel');

           jQuery('#s_comment_form_'+rel_id).submit();
            return false;   
          }
         
    });
jQuery(document).on('click', '.twitch_chat_btn', function () {  
    var chat_link= $(this).attr('chat_link');
    $(this).parent().next().find('iframe').attr('src',chat_link);
    $(this).parent().next().show();
    $(this).hide();
});

jQuery(document).on('click', '.mixer_chat_btn', function () {  
    var chat_link= $(this).attr('chat_link');
    $(this).parent().next().find('iframe').attr('src',chat_link);
    $(this).parent().next().show();
    $(this).hide();
});

jQuery(document).on('submit','.comment_vox',function(e){        
     e.preventDefault();
     
});

jQuery(document).on('click','.openConfirmBox',function(){
    
    jQuery('#ComfirmBox').modal('show');
    jQuery('.modal-header').show();
});

jQuery(document).on('click','.openConfirmBox2',function(){
        
        jQuery('#ComfirmBox2').modal('show');
        jQuery('.modal-header2').show();
    });

    var mySwiper ;
    var relAttr = 1;
    var rel = null;

    jQuery(document).on('click','.poppbox',function(){
          relAttr = 1
     
          relAttr = $(this).attr('rel');

          relAttr = parseInt(relAttr);          
    
    });  




  jQuery('#Discussion_form').on('shown.bs.modal', function (e) {

      jQuery('#Discussion_form').find('.post_comment_box').focus();
      jQuery('.publicbox').val('');

  });

    jQuery('.models_opens').on('shown.bs.modal', function (e) {

     $('.owl-carousel').owlCarousel({
                items: 1,
                margin: 0,
                loop:true,
                autoHeight: true,
                nav:true,
                navText:['<svg class="btn-prev-without olymp-popup-left-arrow me_prev profile_popup_new"><use xlink:href="'+site_url_without_prifix_p+'public/img/icons.svg#olymp-popup-left-arrow"></use></svg>','<svg class="btn-next-without olymp-popup-right-arrow  me_next profile_popup_new"><use xlink:href="'+site_url_without_prifix_p+'public/img/icons.svg#olymp-popup-right-arrow"></use></svg>']
                /*autoWidth:true,*/
              });
     $('.owl-carousel').trigger('to.owl.carousel',[relAttr,0,true]);    

   

    });
    jQuery('.models_opens').on('hidden.bs.modal', function (e) {
     
        jQuery('.popup_post_videos_iframe').each(function(){
                var thise_src = $(this).attr('src');
                $(this).attr('src',' ');
            });   
    });
     var cnt = 0
      jQuery('.models_opens').on('hide.bs.modal', function (e) {
        
      // before model box hide
         
          
    });

//user clicks previous thumbail
jQuery("body").on("click","#thumb_prev", function(e){  

    if(start_w>1) 
    {
      img_arr_pos--; //thmubnail array position decrement
      start_w--; //thmubnail array position decrement
      
      //replace with new thumbnail
      $("#extracted_thumb").html('<img src="'+extracted_images[img_arr_pos]+'" width="100" height="100">');
      
      //show thmubnail position
      $("#total_imgs").html((start_w) +' of '+ total_images);

         angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            var dd ={
              "og:image":extracted_images[img_arr_pos],
              "og:title": data_web.title,
              "og:description":data_web.content,
              "og:url":the_web_url,
              }

          $scope.web_preview_data = JSON.stringify(dd);
        });
    }
  });
  
  //user clicks next thumbail
jQuery("body").on("click","#thumb_next", function(e){    
 
    if(start_w<total_images)
    {
      img_arr_pos++; //thmubnail array position increment
      start_w++; //thmubnail array position increment
      
      //replace with new thumbnail
      $("#extracted_thumb").html('<img src="'+extracted_images[img_arr_pos]+'" width="100" height="100">');
      
      //replace thmubnail position text

      angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
            var dd ={
              "og:image":extracted_images[img_arr_pos],
              "og:title": data_web.title,
              "og:description":data_web.content,
              "og:url":the_web_url,
              }

          $scope.web_preview_data = JSON.stringify(dd);
        });
      $("#total_imgs").html((start_w) +' of '+ total_images);
    }
  });
jQuery(document).on('change','.buttom_video_url',function(){

});
 jQuery(document).on('mouseenter','.gif',function(){
          //alert('jj');
    var src = $(this).attr("src");
    var extenction = src.split('.').pop();
    filename = src.substr(0, src.lastIndexOf(".")) + ".gif";
        $(this).attr("src",filename);
 });

jQuery(document).on('mouseout','.gif',function(){
      var src = $(this).attr("src");
      filename = src.substr(0, src.lastIndexOf(".")) + ".png";
          $(this).attr("src",filename);
 });



 jQuery(document).on('mouseenter','.gif_images',function(){
    

     var bg = $(this).css('background-image');
     var src = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
    
     var extenction = src.split('.').pop();

      var addExt = 'gif';
     if(extenction =='gif'){
          addExt = 'png';
     }
    var filename = src.substr(0, src.lastIndexOf(".")) + "."+addExt;
        $(this).css('background-image',"url("+filename+")");
 });

 jQuery(document).on('mouseenter','.gif_images_1',function(){    

     var src = $(this).attr('src');
    
     var extenction = src.split('.').pop();

      var addExt = 'gif';
     if(extenction =='gif'){
          addExt = 'png';
     }
    var filename = src.substr(0, src.lastIndexOf(".")) + "."+addExt;
        $(this).attr('src',filename);
 });

jQuery(document).on('mouseout','.change_gif',function(){
      var src = $(this).attr("src");
      filename = src.substr(0, src.lastIndexOf(".")) + ".png";
          $(this).attr("src",filename);
 });

jQuery(document).on('click','.play_my_video',function(){

    var ele_src = $(this).attr('rel');
    
    angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
           ele_src =  $scope.postVideo_view(ele_src);
        });


   // alert(ele_src);
    jQuery('.video_ifreme').hide();
    jQuery('.video_image').show();

     $('.video_ifreme_src').each(function() {
        $(this).attr('src',' ');  
    });
     $(this).parents('.div_size').find('.video_ifreme').find('.video_ifreme_src').show().attr('src',ele_src);
     $(this).parents('.div_size').find('.video_ifreme').show();
     $(this).parents('.div_size').find('.video_image').hide();

    




});

jQuery(document).on('click','.video_title',function(){

  jQuery('.video_ifreme').hide();
  jQuery('.video_image').show();
   $('.video_ifreme_src').each(function() {
          $(this).attr('src',' ');  
      });
  });

jQuery(document).on('click','.changePngToGif',function(){


   var type = $(this).attr('rel');
   var t_ele =$(this);

   if(type == 2){
    var t_ele = $(this).prev('.changePngToGif');
   }
 

     var ele_src = $(t_ele).attr('src');

     var extenction = ele_src.split('.').pop();

     var addExt = 'gif';
     if(extenction =='gif'){
          addExt = 'png';
     }

     filename = ele_src.substr(0, ele_src.lastIndexOf(".")) + "."+addExt;

     $(t_ele).attr("src",filename).next('.play_gif_icon').toggle();
     $(t_ele).next().next().next().toggle();
     $(t_ele).next().next().toggle();

  
});

/* var $jq = jQuery.noConflict();
	$jq(document).ready(function(){
		$jq('.clockpicker').clockpicker({
                            twelvehour: true,
                            placement: 'top',
                            vibrate: true,
							donetext: 'Done',
                           // autoclose: true, 
							// .clockpicker('toggleView', 'minutes');
                          });
     $jq(".timeago").timeago();
    
   });  */


   jQuery(document).ready(function() {
     jQuery('.clockpicker').clockpicker({
                            //twelvehour: true,
                            placement: 'top',
                            vibrate: true,
							//donetext: 'Done',
                           // autoclose: true, 
							// .clockpicker('toggleView', 'minutes');
                          });
     jQuery(".timeago").timeago();
    
   });  
/*-------------------------------------------------------------------------------*/
/*jQuery(document).ready(function() {
var input1 = $('#input-12-hour');
	input1.clockpicker({
	 placement: 'top',
	    twelvehour: true,
	    donetext: 'Done'
	});
});
*/


var active_frm_id =1;

 function desableMe(){

     var char ='';
     var desable_menu= false;
     active_frm_id = jQuery('.submitbtn').attr('rel');

    $('#submit_form'+active_frm_id).find('input[type=text]').each(function() {
        char =  $(this).val();
        if(char =='http://'){ char ='';}
        if(char != ''){
              desable_menu =true;
        }

    });

     $('#submit_form'+active_frm_id).find('.post_comment_box').each(function() {
        char =  $(this).text();
        if(char != ''){
              desable_menu =true;
        }

    });

    $('#submit_form'+active_frm_id).find('textarea').each(function() {
        char =  $(this).val();
        if(char != ''){
              desable_menu =true;
        } 

    });

    angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
           if($scope.post_giphyng.length > 0 || $scope.statusImagesPreview.length > 0){
              desable_menu =true;
           }
        })
  

    var loc = jQuery('.loc').val();

    if(loc !=''){
      desable_menu =true;
    }

    var vidUrl = jQuery('.vidUrl').val();

    if(vidUrl !=''){
      desable_menu =true;
    }
    

    if(desable_menu){
      $('.nav-link').addClass('disabled');  
      $('.nav-link').removeAttr('onClick'); 
    }else{
        $('.nav-link').removeClass('disabled');  
        $('.hide_class').each(function(){
          var formId = $(this).attr('rel');          
          $(this).attr('onclick', "changeFormHtml("+formId+")");    
      });

    }

}

jQuery(document).on('change input blur keyup','.changeMe',function(){    
       desableMe();
});


jQuery('.MYcLASS3').summernote({
			height:100,
			maxHeight: 500,
			placeholder: 'Description...',
			toolbar: [
			    // [groupName, [list of button]]
			    ['paragraph',['style']],
			    ['style', ['bold', 'italic', 'underline', 'clear']],
			    ['fontsize', ['fontsize']],
			    ['color', ['color']],
			    ['para', ['ul', 'ol', 'paragraph']],
			    ['insert',['picture','link','video','table']],
			    ['misc',['fullscreen','codeview','help']],	
			    ['height', [100]]		    
			  ],
			callbacks: {
          onKeydown: function (e) { 
            desableMe(e);               
          },
          onKeypress: function (e) {     
            desableMe(e); 
          },
          onPaste: function (e) {   
            desableMe(e);   
          }

      }
		});
jQuery('.MYcLASS33').summernote({
			height:100,
			maxHeight: 500,
			placeholder: 'Type your blog here...',
			toolbar: [
			    // [groupName, [list of button]]
			    ['paragraph',['style']],
			    ['style', ['bold', 'italic', 'underline', 'clear']],
			    ['fontsize', ['fontsize']],
			    ['color', ['color']],
			    ['para', ['ul', 'ol', 'paragraph']],
			    ['insert',['picture','link','video','table']],
			    ['misc',['fullscreen','codeview','help']],	
			    ['height', [100]]		    
			  ],
			callbacks: {
          onKeydown: function (e) { 
            desableMe(e);               
          },
          onKeypress: function (e) {     
            desableMe(e); 
          },
          onPaste: function (e) {   
            desableMe(e);   
          }

      }
		});

jQuery('.MYcLASS5').summernote({
      height:100,
      maxHeight: 500,
      placeholder: 'Description...',
      toolbar: [
          // [groupName, [list of button]]
          ['paragraph',['style']],
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert',['picture','link','video','table']],
          ['misc',['fullscreen','codeview','help']],  
          ['height', [100]]       
        ],
      callbacks: {
          onKeydown: function (e) { 
             
            var t = e.currentTarget.innerText; 
              if (t.trim().length >= 200) {
                  //delete key
                  if (e.keyCode != 8)
                  e.preventDefault(); 
              }  
              desableMe(e);             
          },
          onKeypress: function (e) {    
            var t = e.currentTarget.innerText;
            $('.maxContentPost').text(200 - t.trim().length); 
            
            desableMe(e); 
            
          },
          onPaste: function (e) {   
           
            var t = e.currentTarget.innerText;
            var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
            e.preventDefault();
            var all = t + bufferText;
            document.execCommand('insertText', false, all.trim().substring(0, 200));
            $('.maxContentPost').text(200 - t.length);
             desableMe(e);   
          }

      }
    });
	
	




	
	jQuery(document).click('.open_modalbox', function() 
  {
          $('.error_mes_profile_upload').text('');
          $('#fileForCover').val(null);
          $('#fileInputProfile23').val(null);

  });

