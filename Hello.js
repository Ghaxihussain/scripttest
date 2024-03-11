(function(window){
    var hello= "Hello";
    var hello_speaker = {};
    hello_speaker.speak = function(name){
        console.log(hello + " " + name);
    }
    window.hello_speaker = hello_speaker;
})(window);