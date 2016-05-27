(function() {
'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['dataService'];
    function MainController(dataService) {
        var vm = this;        

        activate();

        function activate() {
            vm.users = dataService.getAllUsers().then(function(data) {
                    vm.users = data;
                });      
        }
        
        return vm;
    }
})();