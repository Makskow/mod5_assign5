(function () {
'use strict';

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user', 'menuItems', 'ApiPath'];
function MyinfoController (user, menuItems, ApiPath) {
	var $ctrl = this;

	$ctrl.user = user;
	$ctrl.menuItems = menuItems.menu_items;
	$ctrl.basePath = ApiPath;
	$ctrl.favdish = {};

	for (var i = 0; i < $ctrl.menuItems.length; i++) {
		if ($ctrl.user.favdish === $ctrl.menuItems[i].short_name) {
			$ctrl.favdish = $ctrl.menuItems[i];
		}
	}


	
}






})();