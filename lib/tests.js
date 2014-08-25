(function () {
    "use strict";
    
    var Tests = function () {
        var self = this;
        
        this.container = null;
        
        this.init = function () {
            self.container = document.createElement("div");
            self.container.classList.add("ok");
            document.body.appendChild(self.container);
        }
        
        this.display = function (name, result, expected) {
            var testContainer = document.createElement("div");
            testContainer.classList.add("test");
            
            var content = document.createTextNode(name); 
            testContainer.appendChild(content);
            
            
            if (result === expected) {
                testContainer.classList.add("ok");
            } else {
                testContainer.classList.add("fail");
            }
            
            self.container.appendChild(testContainer);
        }
        
        this.init();
    }
    
})();
