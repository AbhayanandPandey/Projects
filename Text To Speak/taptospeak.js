let textArea = document.getElementById("speak");
let speakButton = document.getElementById("submit");
let speakButton2 = document.getElementById("hello");


speakButton.addEventListener("click", function() {
  let text = textArea.value;
  let sound = new SpeechSynthesisUtterance();
  sound.text = text;
//   sound.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(sound);
  document.getElementById("speak").value=null;
});
speakButton2.addEventListener("click", function() {
    let text = textArea.value;
    let sound = new SpeechSynthesisUtterance();
    sound.text = text;
    // sound.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(sound);
    document.getElementById("speak").value=null;
  });
