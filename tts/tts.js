var synth = window.speechSynthesis;

//加入參數，讓後端可以直接丟text進function
function speak(text, repeatTimes) {
	var utterThis = new SpeechSynthesisUtterance(text);
	utterThis.onend = function(event) {
		console.log('SpeechSynthesisUtterance.onend');
	}
	utterThis.onerror = function(event) {
		console.error('SpeechSynthesisUtterance.onerror');
	}
	//語言使用系統預設
	//聲速、音頻固定
	utterThis.pitch = 1;
	utterThis.rate = 1;
	for (var i = 0; i < repeatTimes; i++) {
		synth.speak(utterThis);
	}
}

//程式碼參考自：https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#Speech_synthesis