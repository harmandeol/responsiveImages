(function() {
    'use strict';

    angular
        .module('app')
        .directive('responsiveImage', responsiveImage);

    function responsiveImage() {        
        var directive = {
            restrict: 'E',
            scope: {
                id: '@',
                firstname: '@',
                lastname: '@',
                picture: '@',
                title: '@'
            },
            template: `
                <figure id="{{id}}" role="group"> 
                    <img src="{{picture}}" class="img-responsive" alt="{{firstname}} {{lastname}} is {{title}}"></img>
                    <figcaption class="text-center">{{firstname}}</figcaption>
                </figure>
            `
        };
        return directive;       
    }    
})();