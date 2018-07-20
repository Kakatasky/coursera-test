(function(window){
	var SpeakHello = {};
	var speakWord = "Hello";
	SpeakHello.helloSpeaker = function(name){
		  console.log(speakWord + " " + name);
	}
	window.SpeakHello = SpeakHello;
})(window);