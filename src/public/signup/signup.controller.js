(function () {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuItems', 'UserService'];
function SignupController (menuItems, UserService) {
	var $ctrl = this;

	$ctrl.menuItems = menuItems.menu_items;
	$ctrl.user = {};
	$ctrl.dishVerified = true;
	$ctrl.submitSuccess = false;

	$ctrl.submit = function () {

		if ($ctrl.dishVerified) {
			UserService.saveUser($ctrl.user);
			$ctrl.submitSuccess = true;
		}
	}

	$ctrl.verifyFavdish = function () {
		if ($ctrl.user.favdish === undefined) {
			$ctrl.dishVerified = false;
			return ;
		}

		for (var i = 0; i < $ctrl.menuItems.length; i++) {
			if ($ctrl.user.favdish.toLowerCase() === $ctrl.menuItems[i].short_name.toLowerCase()) {
				$ctrl.dishVerified = true;
				return ;
			}
		}

		$ctrl.dishVerified = false;
		return ;
	}
}






})();