'use strict';

angular
  .module('po')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http', '$state'];

function MainCtrl($http, $state) {
  var ctrl = this;

  ctrl.po = {};
  ctrl.dateFormat = 'MM/dd/yyyy';
  ctrl.dateOptions = {
    maxDate: new Date(2050, 12, 31),
    minDate: new Date(2000, 1, 1),
    startingDay: 1,
    showWeeks: false
  };
  ctrl.altDateFormats = ['M!/d!/yyyy'];
  ctrl.itemCategories = ['Missing', 'Cosmetic', 'Broken', 'Extra'];

  ctrl.openReceiptDate = function() {
    ctrl.receiptDateOpened = true;
  }

  ctrl.addItem = function() {
    var item = new Object();

    item.category = ctrl.itemCategories[0];
    item.qty = 0;

    ctrl.po.items.push(item);
  }

  ctrl.done = function(form) {
    if (!form.$valid) {
      return;
    }
    debugger;
    // $http({
    //   method: 'POST',
    //   url: '/api/send',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   transformRequest: function (obj) {
    //     var str = [];
    //     for (var p in obj)
    //       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //     return str.join("&");
    //   },
    //   data: {
    //     poNumber: ctrl.po.poNumber,
    //     orgPurchasePrice: ctrl.po.orgPurchasePrice,
    //     receiptDate: ctrl.po.receiptDate,
    //     name: ctrl.po.contactName,
    //     email: ctrl.po.contactEmail,
    //     phoneNumber: ctrl.po.contactPhone,
    //     items: JSON.stringify(ctrl.po.items),
    //     emailTo: ctrl.po.emailTo
    //   }
    // }).then(function(response) {
    //   $state.go('done', {po: ctrl.po});
    // }, function(error) {
    //   $state.go('done', {po: ctrl.po});
    // });
    $state.go('done', {po: ctrl.po});
  }

  function init() {
    ctrl.receiptDateOpened = false;
    ctrl.po.receivedValue = 0;
    ctrl.po.difference = 0;
    ctrl.po.items = [];
  }

  init();
}
