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
    vm.searchNoResult = false;

    vm.expenses = ExpensesService.query();

    // Search Expense
    this.search = function() {         
 	  vm.searchNoResult = false;
 	  $http.get('/api/expenses/search/' + vm.searchExpense).success(function(response) {
    	
    	vm.expenses = response;

    	if(response == undefined || response.length == 0) {
    		vm.searchNoResult = true;
    	}

  	  });
  	  
    } ;

    // Clear Expense Filter
    this.clearFilter = function () {    	

    	vm.filterExpense = '';
    };

    // reset search criteria
    this.resetSearch = function() {
    	vm.searchExpense = '';  
    	vm.searchNoResult = false;   	
    }

	// list all expenses
    this.listExpenses = function() {
    	
		this.resetSearch();
    	vm.expenses = ExpensesService.query();    	
    }
  }
}());
