jQuery(window).scroll(function() {
    var e = jQuery(document).scrollTop(),
        t = jQuery(document).height(),
        n = jQuery(window).height(),
        i = jQuery("#wrapper-footer").innerHeight(),
        r = jQuery("#back-to-top");
    0 == e || t - i < e + n ? r.hide() : r.show()
});

var isTouchable = false;
if ("ontouchstart" in document.documentElement) {
	isTouchable = true;
}

function toggleDropdown (e) {
  var _d = jQuery(e.target).closest('.dropdown'),
      _m = jQuery('.dropdown-menu', _d);
  setTimeout(function(){
    var shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    jQuery('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 25 : 0);
}

jQuery(function() {

	jQuery('body')
	  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
	  .on('click', '.dropdown-menu a', toggleDropdown);

	/* not needed, prevents page reload for SO example on menu link clicked */
	jQuery('.dropdown a').on('click tap', function(e){
		if ( isTouchable ) {
			$this = jQuery(this);
			if ( $this.attr('aria-expanded') === "true" ) {
				location.href = $this.attr('href');
			}
		} else {
			location.href = jQuery(this).attr('href');
		}
	});

	/* Paypal donate button */
	jQuery('.donate-button').click(function(e){
		e.preventDefault();

		jQuery('#donate-button-form').submit();
	});

	/* Paypal donate options */
	jQuery('.donate-option').click(function(e){
		e.preventDefault();

		jQuery('.donate-option').removeClass('btn-primary').addClass('btn-light');
		jQuery(this).addClass('btn-primary').removeClass('btn-light');
		jQuery('#donate-options-form-amount').attr('value', jQuery(this).data('amount') );
	});
	jQuery('.donate-options-submit').click(function(e){
		e.preventDefault();

		jQuery('#donate-options-form').submit();
	});
});