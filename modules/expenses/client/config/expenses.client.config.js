(function () {
  'use strict';

  angular
    .module('expenses')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Expenses',
      state: 'expenses',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'expenses', {
      title: 'List Expenses',
      state: 'expenses.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'expenses', {
      title: 'Create Expense',
      state: 'expenses.create',
      roles: ['user']
    });
  }
}());
