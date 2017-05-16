'use strict';

angular
  .module('po')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];

function MainCtrl() {
  var ctrl = this;

  ctrl.showRegister = function() {
    $uibModal.open({
      windowClass: 'modal',
      backdrop: 'static',
      // windowClass: 'register-modal',
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'ctrl',
      resolve: {
        referralCode: function() {
          return ctrl.referralCode;
        }
      }
    });

    return false;
  }
}
