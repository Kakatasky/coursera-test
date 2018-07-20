(function(window){
	var SpeakGoodBye ={};
	var speakWord = "Good Bye";
	SpeakGoodBye.byeSpeaker = function(name){
		  console.log(speakWord + " " + name);
	}
	window.SpeakGoodBye = SpeakGoodBye;
})(window);
