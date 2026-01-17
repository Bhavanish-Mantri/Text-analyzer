const input = document.querySelector("textarea");

const characterCount = document.querySelector("#characterCount");
const wordCount = document.querySelector("#wordCount");
const sentenceCount = document.querySelector("#sentenceCount");
const paragraphCount = document.querySelector("#paragraphCount");

input.addEventListener("input", () => {
  const text = input.value;

  // Characters
  characterCount.textContent = text.length;

  // Words
  const words = text
    .split(" ")
    .filter(word => word.trim() !== "");
  wordCount.textContent = words.length;

  // Sentences
  const sentences = text
    .split(/[.!?]/)
    .filter(sentence => sentence.trim() !== "");
  sentenceCount.textContent = sentences.length;

  // Paragraphs
  const paragraphs = text
    .split("\n")
    .filter(p => p.trim() !== "");
  paragraphCount.textContent = paragraphs.length;
});
