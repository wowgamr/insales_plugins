$(function () {
	if (location.pathname == '/new_order') {
	$.get('/cart_items.json')
		.done(function (cart) {
		$.each(cart.order_lines, function () {
			console.log('[' + this.product_id + '] ' + this.title);
			$('div.co-basket_item-description:contains("' + this.title + '")').html('<a href="/product_by_id/' + this.product_id + '" target="_blank" class="co-basket_item-link">' + this.title + '</a>');
		});
		});
	};
});
	