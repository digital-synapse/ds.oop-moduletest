ds.module('app', ['jquery-min'])
.controller('main', ['ready','element', function(ready, Element){
    
    console.log('hello app.main!');
    
    ready.then(()=>{
        
        console.log("DOM Loaded");
        
        var header = new Element('#header');
        
        header.setText('Who needs jQuery?');
        
    })
    
}])