var synth = window.speechSynthesis;

function speak(text, repeatTimes) {
	var utterThis = new SpeechSynthesisUtterance(text);
	utterThis.onend = function(event) {
		console.log('SpeechSynthesisUtterance.onend');
	}
	utterThis.onerror = function(event) {
		console.error('SpeechSynthesisUtterance.onerror');
	}
	utterThis.pitch = 1;
	utterThis.rate = 1;
	for (var i = 0; i < repeatTimes; i++) {
		synth.speak(utterThis);
	}
}