// Variable to hold the current utterance
var currentUtterance;

function speakText(text) {
    // If there's a current utterance, cancel it to stop speech
    if (currentUtterance) {
        stopSpeech();
    }

    // Create a new SpeechSynthesisUtterance
    var utterance = new SpeechSynthesisUtterance(text);

    // Set the rate to make the speech 50% slower (0.5x normal speed)
    utterance.rate = 1;

    // Start speaking the text
    window.speechSynthesis.speak(utterance);

    // Store the current utterance for potential cancellation
    currentUtterance = utterance;
}

function stopSpeech() {
    // If there's a current utterance, cancel it to stop speech
    if (currentUtterance) {
        window.speechSynthesis.cancel();
        currentUtterance = null;
    }
}

window.speakText = speakText;
window.stopSpeech = stopSpeech;