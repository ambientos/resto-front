(function($){
	/**
	 * Custom checkboxes
	 */

	$('[type="checkbox"]').each(function(){
		var checkbox = $(this),
			parent = checkbox.parents('.form-check').eq(0)

		parent.addClass('form-check-custom')

		checkbox
			.wrap('<span class="form-check-wrap"/>')
			.after('<span class="form-check-custom-control"/>')
	})


	/**
	 * Qty calc control
	 */

	$('.calc-form-qty-control').each(function(){
		var control = $(this)

		control.wrap('<span class="calc-form-qty"/>')
			.before('<span class="calc-form-qty-toggle _minus">&minus;</span>')
			.after('<span class="calc-form-qty-toggle _plus">+</span></span>')

		var toggle = control.parents('.calc-form-qty').eq(0).find('.calc-form-qty-toggle')

		toggle.on('click', function(e){
			var toggle = $(this),
				controlValue = control.val()

			if ( toggle.hasClass('_minus') ) {
				if ( controlValue > 1 ) {
					control.val( --controlValue )
				}
			}
			else {
				control.val( ++controlValue )
			}
		})
	})
})(jQuery)