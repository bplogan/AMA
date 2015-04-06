function showErrorMessage(message, $container, delay) {
	$err = $('<div/>', {
		id : 'error_message'
	});
	$err.attr('data-role', 'popup');
	$err.attr('data-theme', 'b');
	$err.attr('data-overlay-theme', 'a');
	$err.attr('data-transition', 'slidedown');
	$err.attr('data-position-to', 'window');
	$err.addClass('ui-content');
	$err.html(message);

	$container.children().detach();
	$container.append($err);

	$err.popup();
	$err.popup("open");

	if (delay > 0) {
		setTimeout(function() {
			$err.popup("close");
		}, delay);
	}
}