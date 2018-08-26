$(document).ready(function() {
	centered(element);

	$(window).resize(function() { //使元件隨視窗改變置中
        centered(element);
    });
});

// 元件必須使用 position: absolute
// 使元件置中
function centered(element) {
    element.css("left", $(window).width() / 2 - element.width() / 2);
    element.css("top", $(window).height() / 2 - element.height() / 2);
}