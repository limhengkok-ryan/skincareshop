import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Quiz.css';

const questions = [
  {
    question: "What is your primary skin concern?",
    answers: ["Dryness", "Acne", "Redness", "Fine Lines"],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(`/recommendations?answers=${JSON.stringify(newAnswers)}`);
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
      <div className="quiz-answers">
        {questions[currentQuestion].answers.map((answer) => (
          <button key={answer} onClick={() => handleAnswer(answer)} className="quiz-answer-btn">
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
