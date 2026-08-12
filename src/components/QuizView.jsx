import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

export default function QuizView({ questions = [], moduleTitle = "Module Quiz" }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) {
    return <div className="card-empty">No quiz questions available for this module.</div>;
  }

  const handleSelect = (qIdx, optionIdx) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-title">
          <HelpCircle size={20} className="icon-amber" />
          <span>Self-Assessment Knowledge Check</span>
        </div>
        {submitted && (
          <button onClick={handleReset} className="btn-secondary btn-sm">
            <RotateCcw size={14} /> Retake Quiz
          </button>
        )}
      </div>

      {submitted && (
        <div className="quiz-score-banner">
          <Award size={36} className="score-icon" />
          <div className="score-info">
            <h3>Quiz Completed! Your Score: {score} / {questions.length} ({percentage}%)</h3>
            <p>
              {percentage >= 80 ? "🎉 Outstanding Mastery! You have a solid grasp of these IT concepts." :
               percentage >= 50 ? "👍 Good effort! Review the explanations below to refine your knowledge." :
               "📘 Keep learning! Review the facts above and try again."}
            </p>
          </div>
        </div>
      )}

      <div className="questions-list">
        {questions.map((q, qIdx) => {
          const isSelected = selectedAnswers[qIdx] !== undefined;
          const userChoice = selectedAnswers[qIdx];
          const isCorrect = userChoice === q.correct;

          return (
            <div key={qIdx} className={`question-card ${submitted ? (isCorrect ? 'q-correct' : 'q-incorrect') : ''}`}>
              <h4 className="q-text">
                <span className="q-number">Q{qIdx + 1}.</span> {q.question}
              </h4>

              <div className="options-grid">
                {q.options.map((opt, optIdx) => {
                  let optClass = "option-btn";
                  if (userChoice === optIdx) optClass += " selected";
                  if (submitted) {
                    if (optIdx === q.correct) optClass += " correct-opt";
                    else if (userChoice === optIdx) optClass += " wrong-opt";
                  }

                  return (
                    <button
                      key={optIdx}
                      className={optClass}
                      onClick={() => handleSelect(qIdx, optIdx)}
                    >
                      <span className="opt-letter">{String.fromCharCode(65 + optIdx)}.</span>
                      <span className="opt-text">{opt}</span>
                      {submitted && optIdx === q.correct && <CheckCircle2 size={16} className="icon-right" />}
                      {submitted && userChoice === optIdx && optIdx !== q.correct && <XCircle size={16} className="icon-wrong" />}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="explanation-box">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(selectedAnswers).length < questions.length}
          className="btn-primary btn-full margin-top"
        >
          Submit Quiz Answers ({Object.keys(selectedAnswers).length} / {questions.length} Answered)
        </button>
      )}
    </div>
  );
}
