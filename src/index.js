function generateLyric(event) {
  event.preventDefault();

  new Typewriter("#lyric-output", {
    strings: "The lyrics will appear here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let lyricForm = document.querySelector("#lyric-generator-form");
lyricForm.addEventListener("submit", generateLyric);

let apiKey = `b6b9teed60a3b1boe04c53c54d1f6c3d`;
let context = `be polite and make sure to provide a very short answer`;
let prompt = `What colour is the sky?`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

// axios.get(apiUrl).then(showAnswer);
