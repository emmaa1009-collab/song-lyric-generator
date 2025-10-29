function generateLyric(event) {
  event.preventDefault();

  let apiKey = `b6b9teed60a3b1boe04c53c54d1f6c3d`;
  let prompt = `User instructions: Generate only lyrics for a song about ${
    document.querySelector("#lyric-prompt-input").value
  }`;
  let context = `You are an experienced song writer, having written several number one hits. Your mission is to generate 4 lines of song lyrics with HTML line breaks between lines. Make sure to follow the user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayLyrics);
}

function displayLyrics(response) {
  new Typewriter("#lyric-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  console.log(response.data.answer);
}

let lyricForm = document.querySelector("#lyric-generator-form");
lyricForm.addEventListener("submit", generateLyric);
