(function() {
      'use strict';
      
      describe('responsiveImage directive', function() {
        var element;
        var scope;

        beforeEach(module('app'));
        
        beforeEach(inject(function($rootScope, $compile) {  
            scope = $rootScope.$new();

            element = $compile(`<responsive-image 
                                  ng-attr-id="1"
                                  ng-attr-firstname="yo"
                                  ng-attr-lastname="man"
                                  ng-attr-picture="img/some.png"
                                  ng-attr-title="jack of all trades"
                                  >
                              </responsive-image>`)(scope);
            scope.$apply();    
        }));
        
        afterEach(function() {
          element = null;          
        });

        it('it should use figure html5 element', function() {
           if (element.find("figure").length === 0)
            throw new Error("no figure element found. html rendered : " + element.html()); 
        });
        
        it('image with meaningful alt should be there for accessibility', function() {
          if (element.children().children()[0].alt !== 'yo man is jack of all trades')
            throw new Error("image with meaningful alt should be there for accessibility");          
        });
    });
})();