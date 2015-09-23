$(window).load(function(){
	$('.vert-menu #container #links a').hover(function() {
		var select = $(this);
		select.css({
			'background-color':'#f1c40f'
		});
	},function(){
        // change to any color that was previously used.
        $(this).css('background-color', '#fff');
    });
});