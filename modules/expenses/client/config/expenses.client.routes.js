(function () {
  'use strict';

  angular
    .module('expenses')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('expenses', {
        abstract: true,
        url: '/expenses',
        template: '<ui-view/>'
      })
      .state('expenses.list', {
        url: '',
        templateUrl: 'modules/expenses/client/views/list-expenses.client.view.html',
        controller: 'ExpensesListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Expenses List'
        }
      })
      .state('expenses.search', {
        url: '/search/:expenseName',
        templateUrl: 'modules/expenses/client/views/list-expenses.client.view.html',
        controller: 'ExpensesListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Expenses Search'
        }
      })
      .state('expenses.create', {
        url: '/create',
        templateUrl: 'modules/expenses/client/views/form-expense.client.view.html',
        controller: 'ExpensesController',
        controllerAs: 'vm',
        resolve: {
          expenseResolve: newExpense
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Expenses Create'
        }
      })
      .state('expenses.edit', {
        url: '/:expenseId/edit',
        templateUrl: 'modules/expenses/client/views/form-expense.client.view.html',
        controller: 'ExpensesController',
        controllerAs: 'vm',
        resolve: {
          expenseResolve: getExpense
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Expense {{ expenseResolve.name }}'
        }
      })
      .state('expenses.view', {
        url: '/:expenseId',
        templateUrl: 'modules/expenses/client/views/view-expense.client.view.html',
        controller: 'ExpensesController',
        controllerAs: 'vm',
        resolve: {
          expenseResolve: getExpense
        },
        data: {
          pageTitle: 'Expense {{ expenseResolve.name }}'
        }
      });
  }

  getExpense.$inject = ['$stateParams', 'ExpensesService'];

  function getExpense($stateParams, ExpensesService) {
    return ExpensesService.get({
      expenseId: $stateParams.expenseId
    }).$promise;
  }

  newExpense.$inject = ['ExpensesService'];

  function newExpense(ExpensesService) {
    return new ExpensesService();
  }
}());
