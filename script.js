// In this assignment, you are going to loop over an array of names and print out either a hello or goodbye to 
// that name to the browser console. If the name starts with a letter j or J, you are to print out Goodbye 
// JSomeName. If the name starts with any other letter, you are to print out Hello SomeName. use js






( function greet(name){
    var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < name.length; i++){
        if (name[i][0].toUpperCase() === "J") {
            bye_speaker.speak(name[i]);
        }
        else {
            hello_speaker.speak(name[i]);
    }
}
})()