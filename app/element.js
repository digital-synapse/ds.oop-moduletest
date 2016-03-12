ds.module('jquery-min')
.factory('element', [function(){
    
    return ds.class({
       
       constructor: function(selector){
           if (selector){
                var s = selector.trim();
                if (s.indexOf('#')==0) s=s.substring(1);
                this.element = document.getElementById(s);
           }   
       },

       setText: function(str) {
           this.element.innerText = str;
       }       
              
    });
    
}]);