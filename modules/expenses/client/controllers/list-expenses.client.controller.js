(function () {
  'use strict';

  angular
    .module('expenses')
    .controller('ExpensesListController', ExpensesListController);

  ExpensesListController.$inject = ['ExpensesService', '$scope', '$state', '$http'];

  function ExpensesListController(ExpensesService, $scope, $state, $http) {
    var vm = this;
    vm.filterExpense = '';
    vm.searchExpense = '';        
    vm.error = null;
    vm.form = {};

    vm.expenses = ExpensesService.query();

    // Search Expense
    this.search = function() {         
 	  
 	  $http.get('/api/expenses/search/' + vm.searchExpense).success(function(response) {
    	console.log("Expense Search Successfull!!!");
    	vm.expenses = response;
  	  });
  	  
    } ;

    // Clear Expense Filter
    this.clearFilter = function () {    	

    	vm.filterExpense = '';
    };
  }
}());
