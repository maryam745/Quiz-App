# Quiz-App
# 🎉 Quiz App

A modern, interactive Quiz App with a splash screen, random questions, instant feedback, and a beautiful UI.  
**Made by Maryam Nazar**

---

## 🚀 Features

- **Splash Screen:** Welcome screen with app title and Start button.
- **100+ Question Pool:** Each quiz session randomly selects 10 unique questions from a pool of 100.
- **No Repeat Questions:** Every quiz session is different!
- **Multiple Choice:** Four options per question.
- **Instant Feedback:** See right/wrong answers immediately.
- **Score & Summary:** Get your score and a full review at the end.
- **Restart Option:** Try a new quiz with different questions each time.
- **Responsive Design:** Looks great on mobile and desktop.
- **Footer Credit:** Your name always visible at the bottom.

---

## 🖼️ Screenshots

![image](https://github.com/user-attachments/assets/a404435a-e421-4bd4-a4dd-64109d4144ff)


---

## 🛠️ How to Run

1. **Clone or Download this Repository:**
   git clone https://github.com/maryam745/Quiz-App
Or download the ZIP and extract.

3. **Open `index.html` in your browser.**  
No setup required!

---

## 📁 Project Structure

quiz-app/
├── index.html
├── styles.css
├── script.js
└── README.md
---

## ✏️ Customization

- **Add/Edit Questions:**  
  Open `script.js` and edit the `questionPool` array.  
  Each question format:
  {
question: "Your question?",
options: ["A", "B", "C", "D"],
answer: 2 // (index of correct option)
}
- **Change Number of Questions per Quiz:**  
In `script.js`, set:
const QUESTIONS_PER_QUIZ = 10;
- **Splash Screen Text:**  
Edit the content in the `<div id="splash-screen">` in `index.html`.

---

## 💡 How It Works

- The splash screen welcomes users.
- On clicking **Start Quiz**, a random set of 10 questions is selected from 100.
- Questions and options are shuffled for every session.
- After answering, you see your score and a summary.
- Click **Restart Quiz** for a new random quiz!

---

## 📄 License

This project is for fun and educational use.  
Feel free to use, modify, and share!

---

## 🙋‍♀️ Author

**Maryam Nazar**

---

