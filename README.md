# Real-Time Text Analyzer

🌐 **Live Demo:**  
👉 https://bhavanish-mantri.github.io/Text-analyzer/

A lightweight web application that analyzes user input in real time and displays useful text statistics such as character count, word count, sentence count, and paragraph count.

This project is built using **HTML, CSS, and vanilla JavaScript**, with a focus on clarity, readability, and practical logic rather than complex libraries or heavy NLP techniques.

---

## 🚀 Features

- Real-time text analysis as the user types
- Character count (including spaces)
- Word count
- Sentence count
- Paragraph count
- Clean and minimal UI

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 📂 Project Structure
```
Text-analyzer
├── index.html
├── style.css
└── script.js
```

---

## ⚙️ How It Works

- The application listens for the `input` event on the `<textarea>`.
- On every change, JavaScript processes the text and updates the counters instantly.
- Simple string operations like `split`, `filter`, and `length` are used to keep the code readable and beginner-friendly.

---

## 🧠 Counting Logic (Overview)

- **Characters**: Total number of characters typed
- **Words**: Text split by spaces, ignoring empty values
- **Sentences**: Text split using `.`, `!`, or `?`
- **Paragraphs**: Text split by new lines, ignoring empty lines

This approach prioritizes **maintainability and understanding** over linguistic edge-case handling.

---

## ⚠️ Limitations

- Uses simple heuristics, not advanced NLP
- Edge cases like abbreviations or contractions may not be perfectly counted
- Intended for learning and basic utility purposes

---

## 🚀 Possible Future Improvements

- Reading time estimation
- Most frequent word detection
- Clear / reset button
- Dark–light theme toggle
- Framework-based (React) version

---

## 📄 License

This project is open-source and free to use for learning, practice, and portfolio purposes.

