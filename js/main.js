(function(){

    'use strict';

var cs = new CSInterface();

document.getElementById('btn').addEventListener('click', function(){
    cs.evalScript('sayHello()', function(res){
        console.log(res)
    })
})

}())