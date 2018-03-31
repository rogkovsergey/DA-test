$(function(){
	$('.nav__item').mouseover(function(e){
		$(e.currentTarget).toggleClass('active');
		let counter = $(e.currentTarget).children('.nav__dropdown')
										.children('.nav__dropdown_item').length;
		let bottom = $('.nav__dropdown_item').outerHeight() * counter;
		$(e.currentTarget).children('.nav__dropdown').css({
			'display':'flex',
			'bottom': '-' + (bottom+2) + 'px'
		});
		let subMenu = $(e.target).children('.nav__dropdown_item .nav__dropdown');
		let parentCell = subMenu.parent();
		parentCell.css({
			'position':'relative'
		});
		subMenu.css({
		    'height': bottom + 'px',
			'position':'absolute',
			'display':'flex',
			'left':parentCell.outerWidth() + 'px',
			'top':'0px'
		});
		let subWidth = $('.nav__dropdown').outerWidth();
	}).mouseout(function(e){
		$(e.currentTarget).toggleClass('active');
		$(e.currentTarget).children('.nav__dropdown').css({
			'display':'none'
		});
	});
});