import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Welcome! Let's find the perfect skincare for you. What is your primary skin concern?",
    answers: ["Dryness", "Acne", "Redness", "Fine Lines"],
  },
  {
    question: "What is your skin type?",
    answers: ["Oily", "Dry", "Combination", "Sensitive"],
  },
  {
    question: "What is your age range?",
    answers: ["Under 18", "18-24", "25-34", "35+"],
  },
];

export default function ProductFinder() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Navigate to recommendations page with answers
      navigate(`/recommendations?answers=${JSON.stringify(newAnswers)}`);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl bg-surface-container rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-earth-text">{questions[currentQuestion].question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {questions[currentQuestion].answers.map((answer) => (
            <button
              key={answer}
              onClick={() => handleAnswer(answer)}
              className="bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              {answer}
            </button>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center w-full">
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="bg-secondary text-on-secondary px-6 py-3 rounded-lg hover:bg-secondary-dark transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={() => navigate('/')}
            className="bg-tertiary text-on-tertiary px-6 py-3 rounded-lg hover:bg-tertiary-dark transition-colors ml-auto"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
