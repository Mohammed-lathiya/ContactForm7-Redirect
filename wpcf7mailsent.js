document.addEventListener( 'wpcf7mailsent', function( event ) {	
   	if ( '138' != event.detail.contactFormId && '119' != event.detail.contactFormId ) {
   		jQuery('#myModal1').modal('hide');
   		jQuery('#myModal2').modal('hide');
   		jQuery('#myModal3').modal('hide');
   		jQuery('#myModal4').modal('hide');
   		jQuery('.wpcf7-response-output').hide();
   		jQuery('#thank-you').modal('show');
   		jQuery('.wpcf7-response-output').hide();
    }
}, false );
