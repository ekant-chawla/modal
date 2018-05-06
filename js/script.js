$(document).ready(()=>{

	$('.modal-btn').on('click',showModal);
	$('.modal-close-btn button').on('click',dismissModal);
	$('.modal-close').on('click',dismissModal);
	$('.modal-ok').on('click',dismissModal);
		
})




let showModal = (event)=>{
	$($(event.target).attr('target')).fadeIn(500);
	//check if we need to hide the scroll bar and adjust for it.
	if($(document).height() > $(window).height()){
		$('body').css('overflow','hidden').addClass('adjust');
	}
}

let dismissModal = (event)=>{
	$(event.target).parents('.modal-container').fadeOut(500);
	$('body').css('overflow','auto').removeClass('adjust');
}
