(function(window){
    var bye = "Good bye";
    var bye_speaker = {}
    bye_speaker.speak  = function(name){
        console.log(bye + " " + name);
    }
    window.bye_speaker = bye_speaker;
})(window)