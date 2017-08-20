/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'FatiCons-Normal\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-view' : '&#xe003;',
			'icon-user' : '&#xe000;',
			'icon-up' : '&#xe001;',
			'icon-thumbs' : '&#xe002;',
			'icon-tablet' : '&#xe004;',
			'icon-sync' : '&#xe005;',
			'icon-smatphone' : '&#xe006;',
			'icon-shop' : '&#xe007;',
			'icon-settings' : '&#xe008;',
			'icon-send' : '&#xe009;',
			'icon-search' : '&#xe00a;',
			'icon-right' : '&#xe00b;',
			'icon-remove' : '&#xe00c;',
			'icon-refresh' : '&#xe00d;',
			'icon-picture' : '&#xe00e;',
			'icon-pc' : '&#xe00f;',
			'icon-net' : '&#xe010;',
			'icon-map' : '&#xe011;',
			'icon-mail' : '&#xe012;',
			'icon-list' : '&#xe013;',
			'icon-link' : '&#xe014;',
			'icon-like' : '&#xe015;',
			'icon-left' : '&#xe016;',
			'icon-grid' : '&#xe017;',
			'icon-grid-2' : '&#xe018;',
			'icon-folder' : '&#xe019;',
			'icon-down' : '&#xe01a;',
			'icon-done' : '&#xe01b;',
			'icon-cloud' : '&#xe01c;',
			'icon-chat' : '&#xe01d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};