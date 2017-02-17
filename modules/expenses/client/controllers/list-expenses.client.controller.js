(function () {
  'use strict';

  angular
    .module('expenses')
    .controller('ExpensesListController', ExpensesListController);

  ExpensesListController.$inject = ['ExpensesService', '$scope', '$state'];

  function ExpensesListController(ExpensesService, $scope, $state) {
    var vm = this;
    vm.filterExpense = '';
    vm.searchExpense = '';        
    vm.error = null;
    vm.form = {};

    vm.expenses = ExpensesService.query();

    // Save Expense
    this.search = function(isValid) {
      // if (!isValid) {
      //   $scope.$broadcast('show-err	ors-check-validity', 'vm.form.expenseFormSearch');
      //   return false;
      // }
      alert('fsdfsdf');
 	  $state.go('expenses.search', {expenseName : vm.searchExpense});      
    } ;

    this.clearFilter = function () {    	

    	vm.filterExpense = '';
    };
  }
}());
