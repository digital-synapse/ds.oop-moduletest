ds.module('jquery-min', [])

.factory('ready',[function() {
    
    var callback = undefined;
    
    if (document.addEventListener){
        var onload = function() {
            document.removeEventListener("DOMContentLoaded", onload, false);
            callback();
        }
        document.addEventListener("DOMContentLoaded", onload, false)
    }
    
    return {
        then: function(cb){
            callback = cb;
        }
    }
    
}])