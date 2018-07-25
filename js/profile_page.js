$(document).on('click','.open_modalbox',function(){
 var rel = $(this).attr('rel');
 jQuery(rel).modal('show').find('form').show();
});

$(document).on('click','.open_modal',function(){
  //alert('hh');
 jQuery('.modal').modal('hide');
 var rel = $(this).attr('rel');
 jQuery(rel).modal('show').find('form').show();

});

$(document).on('click','.coverPic',function(){

  $("#fileForCover").click();

});



$(document).on('click','.profilephot',function(){

$("#fileInputProfile23").click();

});

jQuery(document).on('click','.click_fileupload',function(e){		

	jQuery(this).next().click();      

});

 $('.prifile_pic_previwe').croppie({
 	 enableExif: true,
     viewport: { width: 300, height: 300 },
      boundary: { width: 100+'%', height: 600 },
     mouseWheelZoom: true,
     enableOrientation: true,
     
});

 $('.cover_pic_previwe').croppie({
 	 enableExif: true,
     viewport: { width: 1024, height: 400 },
     boundary: { width: 100+'%', height: 600 },
     mouseWheelZoom: true,
     enableOrientation: true,
     
});
var bind_url = '';
 $(document).on('change','#fileForCover',function(){
	var reader = new FileReader();

    reader.onload = function(e) {
      //$('.profile_pic').attr('src', e.target.result);      

      var image = new Image();
      image.src = e.target.result;
      image.onload = function () {
            var $height = this.height;
            var $width = this.width;
         
             if ( $width < 1024  || $height < 400) {                     
	              var error_mes =  "<span class='uplad_error'>You are trying to upload "+$width+"px X "+$height+"px <br>Your image does not meet minimum requirements. For best resolution please upload images in the following sizes:1024px X 400px<span>";
	              jQuery('.error_mes_profile_upload').text("");
	              jQuery('.error_mes_profile_upload').html(error_mes);
	              jQuery('.error_mes_profile_upload_gp').html(error_mes);
	              jQuery('.error_mes_profile_upload_sw').html(error_mes);
	              $(this).val(null);

	           }else if($width >= 1024  || $height >= 400){
	            	/*$('.cover_pic_previwe').croppie('bind', {				    
			        url: e.target.result,	       
			         
			     });*/
	            	bind_url =  e.target.result;
                 jQuery('#update-header-photo').modal('hide');
                 jQuery('.error_mes').html(' ');
                 jQuery('#edit-widget-coverpic').modal('show').find('form').show();
  
                 
	           }
	           else{
	         

	           } 
	                             

         }
    }

     reader.readAsDataURL($(this)[0].files[0]);	
        

	});

$(document).on('change','#fileInputProfile23',function(){
	var reader = new FileReader();

    reader.onload = function(e) {

      //$('.profile_pic').attr('src', e.target.result);      

      var image = new Image();
      image.src = e.target.result;
      image.onload = function () {
            var $height = this.height;
            var $width = this.width;

             if ( $width < 300  || $height < 300) {                     
	              var error_mes =  "<span class='uplad_error'>You are trying to upload "+$width+"px X "+$height+"px <br>Your image does not meet minimum requirements. For best resolution please upload images in the following sizes:300px X 300px<span>";
	              jQuery('.error_mes_profile_upload').html(error_mes);
	              jQuery('.error_mes_profile_upload_group').html(error_mes);
	              jQuery('.error_mes_profile_upload_social').html(error_mes);
	              $(this).val("");

	           }else if($width >= 300  || $height >= 300){
	            	$('.prifile_pic_previwe').croppie('bind', {				    
			        url: e.target.result,	       
			         
			     });
	            	bind_url =  e.target.result;
                 jQuery('#update-Profile-photo').modal('hide');
                 jQuery('.error_mes_profile_upload').html(' ');
                 jQuery('#edit-widget-profilepic').modal('show').find('form').show();
  
                 
	           }
	           else{
	         

	           } 
	                             

         }
    }

     reader.readAsDataURL($(this)[0].files[0]);	
        

	});
$('#edit-widget-profilepic').on('shown.bs.modal', function(){ 
   
    $('.prifile_pic_previwe').croppie('bind');
});

$('#edit-widget-coverpic').on('shown.bs.modal', function(){ 
   
    $('.cover_pic_previwe').croppie('bind', {				    
			        url: bind_url,	   });
});


var addCoverPic = true;

$(document).on('click','.set-cover-pic',function(){
	
	if(!addCoverPic){
		return false;
	}
	addCoverPic = false;

	//var elel = $(this);
	$(this).text('Saving...').addClass('disabled');
	
    var _token = $('.token').val();
   $('.cover_pic_previwe').croppie('result', {
		type: 'canvas',
		size: 'viewport'
	}).then(function (resp) {
		$.ajax({
			url: "upload-user-image/cover_image",
			type: "POST",
			data: {"image":resp,'_token': _token},
			success: function (obj) {
				var obj = JSON.parse(obj);	

				if(obj['success']){		
				$(this).text('Save Changes').removeClass('disabled');	
				jQuery('#edit-widget-coverpic').modal('hide');	
				
				angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
		          $scope.image_source = obj.image;
		         });

				addCoverPic = true;
				}

			}
		});
	});

    
});
var addGroupCoverPic = true;
//var surl = "http://192.168.31.106/laravel/hubscure/";
$(document).on('click','.set-group-cover-pic',function(){
	jQuery(".error_mes_profile_upload_gp").html("");
	if(!addGroupCoverPic){
		return false;
	}
	addGroupCoverPic = false;
	$(this).text('Saving...').addClass('disabled');
    var _token = $('.token').val();
   $('.cover_pic_previwe').croppie('result', {
		type: 'canvas',
		size: 'viewport'
	}).then(function (resp) { 
		$.ajax({
			url: site_url+"/groups/upload-group-image/cover_image",
			type: "POST",
			data: {"image":resp,'_token': _token},
			success: function (obj) {
				var obj = JSON.parse(obj);		

				if(obj['success']){	
				
		        var image_source = obj.image;
		       // alert(image_source);
		       	jQuery(".cimg").attr("src",image_source);
		       	jQuery(".cov_image").val(obj.file_name);
		        jQuery(".cimg").show();
				jQuery('#edit-widget-coverpic').modal('hide');
				$(".set-group-cover-pic").text('Save Changes').removeClass('disabled');
				addCoverPic = true;
				}

			}
		});
	});

    
});
var addProfilePic = true;

$(document).on('click','.set-prifile-pic',function(){
	
	if(!addProfilePic){
		return false;
	}
	addProfilePic = false;
	$(this).text('Saving...').addClass('disabled');

	//var elel = $(this);
    var _token = $('.token').val();
   $('.prifile_pic_previwe').croppie('result', {
		type: 'canvas',
		size: 'viewport'
	}).then(function (resp) {
		$.ajax({
			url: "upload-user-image/profile_photo",
			type: "POST",
			data: {"image":resp,'_token': _token},
			success: function (obj) {
				var obj = JSON.parse(obj);

				if(obj['success']){
				jQuery('#header_avatar').attr("src",obj.image_thumb);

				jQuery('#edit-widget-profilepic').modal('hide');
				$(this).text('Save Changes').removeClass('disabled');
				addProfilePic = true;
				
				angular.element(document.getElementById('b_body')).scope().$apply(function($scope){
		          $scope.image_source_profile = obj.image;
		         
		         });

				
				}

			}
		});
	});

    
});

var addGroupProfilePic = true;

$(document).on('click','.set-group-prifile-pic',function(){
	jQuery(".error_mes_profile_upload_group").html("");
	if(!addGroupProfilePic){
		return false;
	}
	addGroupProfilePic = false;
	$(this).text('Saving...').addClass('disabled');

	var elel = $(this);
    var _token = $('.token').val();
   $('.prifile_pic_previwe').croppie('result', {
		type: 'canvas',
		size: 'viewport'
	}).then(function (resp) {
		$.ajax({
			url: site_url+"/groups/upload-group-image/profile_photo",
			type: "POST",
			data: {"image":resp,'_token': _token},
			success: function (obj) {
				var obj = JSON.parse(obj);

				console.log(obj);

				if(obj['success']){

				jQuery('#pimg').attr("src",surl+obj.image);
				jQuery(".pro_image").val(obj.file_name);
		        jQuery("#pimg").show();
				jQuery('#edit-widget-profilepic').modal('hide');
				$(elel).text('Save Changes').removeClass('disabled');
				addGroupProfilePic = true;

				
				}

			}
		});
	});

    
});



var addSWCoverPic = true;

$(document).on('click','.set-cover-pic-social-website',function(){
	$(this).text('Save Changes').removeClass('disabled');
	jQuery(".error_mes_profile_upload_sw").html("");
	if(!addSWCoverPic){
		
		return false;
	}
	
	addSWCoverPic = false;
	$(this).text('Saving...').addClass('disabled');
    var _token = $('.token').val();
   $('.cover_pic_previwe').croppie('result', {
		type: 'canvas',
		size: 'viewport'
	}).then(function (resp) { 
		$.ajax({
			url: site_url+"/upload-social-website-image/cover_image",
			type: "POST",
			data: {"image":resp,'_token': _token},
			success: function (obj) {
				var obj = JSON.parse(obj);	

				console.log(obj);	

				if(obj['success']){	
				
		        var image_source = obj.image;
		        //alert(image_source);
		       	jQuery(".social_cimg").attr("src",image_source);
		       	jQuery(".social_cover_image").val(obj.file_name);
		        jQuery(".social_cimg").show();
				jQuery('#edit-widget-coverpic').modal('hide');
				$(".set-cover-pic-social-website").text('Save Changes').removeClass('disabled');
				addSWCoverPic = true;
				}

			}
		});
	});

    
});



var addSWProfilePic = true;

$(document).on('click','.set-profile-pic-for-social',function(){
	$(this).text('Save Changes').removeClass('disabled');
	jQuery(".error_mes_profile_upload_social").html("");
	
	if(!addSWProfilePic){
		return false;
	}
	addSWProfilePic = false;
	$(this).text('Saving...').addClass('disabled');

	var elel = $(this);
    var _token = $('.token').val();
   $('.prifile_pic_previwe').croppie('result', {
		type: 'canvas',
		size: 'viewport'
	}).then(function (resp) {
		$.ajax({
			url: site_url+"/upload-social-website-image/profile_photo",
			type: "POST",
			data: {"image":resp,'_token': _token},
			success: function (obj) {
				var obj = JSON.parse(obj);
				if(obj['success']){

				jQuery('#social_pimg').attr("src",obj.image);
				jQuery(".social_pro_image").val(obj.file_name);
		        jQuery("#social_pimg").show();
				jQuery('#edit-widget-profilepic').modal('hide');
				$(elel).text('Save Changes').removeClass('disabled');
				addSWProfilePic = true;

				
				}

			}
		});
	});

    
});