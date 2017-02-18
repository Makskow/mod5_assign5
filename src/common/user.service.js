(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;

  service.user = "";

  service.saveUser = function (user) {
    user.favdish = user.favdish.toUpperCase();
    service.user = user;
    console.log("user info saved");
    console.log(service.user);
  }

  service.getUser = function () {
    return service.user;
  }

}



})();
