(function () {
  'use strict';

  angular
    .module('expenses')
    .controller('ExpensesListController', ExpensesListController);

  ExpensesListController.$inject = ['ExpensesService'];

  function ExpensesListController(ExpensesService) {
    var vm = this;
    var searchExpense = '';
    vm.error = null;
    vm.form = {};

    vm.expenses = ExpensesService.query();

    // Save Expense
    function search(isValid) {
      // if (!isValid) {
      //   $scope.$broadcast('show-errors-check-validity', 'vm.form.expenseFormSearch');
      //   return false;
      // }
      alert('fsdfsdf');
 		$state.go('expenses.search');      
    }     
  }
}());
