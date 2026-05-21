import { useNavigate } from 'react-router-dom';
import '../Home.css'; // Import the CSS file

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="header">
        <img src="/Image/logo.svg" alt="Skincare logo" className="logo" />
      </div>
      <div className="main-content">
        <div className="text-content">
          <h1 className="title">Find Your Perfect Skincare Match</h1>
          <p className="subtitle">Take our quiz to get personalized skincare recommendations.</p>
          <button onClick={() => navigate('/product-finder')} className="quiz-btn">Start Quiz</button>
        </div>
      </div>
    </div>
  );
}
