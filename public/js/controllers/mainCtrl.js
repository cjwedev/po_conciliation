'use strict';

angular
  .module('po')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];

function MainCtrl() {
  var ctrl = this;

  ctrl.receiptDateOpened;
  ctrl.receivedValue;
  ctrl.difference;
  ctrl.items;
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

    ctrl.items.push(item);
  }

  function init() {
    ctrl.receiptDateOpened = false;
    ctrl.receivedValue = 0;
    ctrl.difference = 0;
    ctrl.items = [];
  }

  init();
}
