import React, { useState, useEffect } from 'react';
import {
  Cpu, HardDrive, FileText, GitFork, Globe, Table, ShieldAlert,
  Code, Terminal, Hash, Database, BarChart3, Palette, Network,
  Repeat, FileCheck, TrendingUp, ShieldCheck, Code2, Bot, Binary,
  Search, BookOpen, Layers, HelpCircle, Printer, GraduationCap,
  Sparkles, CheckCircle2, ChevronRight, Bookmark
} from 'lucide-react';

import { IT_CURRICULUM } from './data/itCurriculum';
import HtmlSandbox from './components/HtmlSandbox';
import SqlSandbox from './components/SqlSandbox';
import PythonRunner from './components/PythonRunner';
import SpreadsheetEvaluator from './components/SpreadsheetEvaluator';
import NumberConverter from './components/NumberConverter';
import FlashcardDeck from './components/FlashcardDeck';
import QuizView from './components/QuizView';
import SearchModal from './components/SearchModal';

const ICON_MAP = {
  Cpu, HardDrive, FileText, GitFork, Globe, Table, ShieldAlert,
  Code, Terminal, Hash, Database, BarChart3, Palette, Network,
  Repeat, FileCheck, TrendingUp, ShieldCheck, Code2, Bot, Binary
};

export default function App() {
  const [activeGrade, setActiveGrade] = useState(6);
  const [activeModuleId, setActiveModuleId] = useState("g6-m1");
  const [activeTab, setActiveTab] = useState("facts"); // 'facts' | 'interactive' | 'flashcards' | 'quiz'
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState({});

  const gradeData = IT_CURRICULUM[activeGrade];
  const currentModule = gradeData.modules.find(m => m.id === activeModuleId) || gradeData.modules[0];

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleGradeChange = (g) => {
    setActiveGrade(g);
    setActiveModuleId(IT_CURRICULUM[g].modules[0].id);
    setActiveTab("facts");
  };

  const handleSelectModuleFromSearch = (gradeNum, moduleId) => {
    setActiveGrade(gradeNum);
    setActiveModuleId(moduleId);
    setActiveTab("facts");
  };

  const toggleModuleComplete = (modId) => {
    setCompletedModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const IconComponent = ICON_MAP[currentModule.icon] || BookOpen;

  const renderInteractiveComponent = (type) => {
    switch (type) {
      case 'htmlSandbox':
        return <HtmlSandbox />;
      case 'sqlSandbox':
        return <SqlSandbox />;
      case 'pythonRunner':
        return <PythonRunner />;
      case 'spreadsheetEvaluator':
        return <SpreadsheetEvaluator />;
      case 'numberConverter':
        return <NumberConverter />;
      default:
        return (
          <div className="card-empty">
            <Sparkles size={24} className="icon-blue" />
            <p>Interactive tool for this module: Review the flashcards and complete the self-assessment quiz!</p>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="nav-brand">
          <div className="brand-logo">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="brand-title">IT Explorer 6–10</h1>
            <span className="brand-subtitle">Information Technology & Computer Science Learning Portal</span>
          </div>
        </div>

        <div className="nav-actions">
          <button onClick={() => setIsSearchOpen(true)} className="search-trigger-btn">
            <Search size={16} />
            <span>Search topics...</span>
            <kbd>Ctrl K</kbd>
          </button>
          <button onClick={() => window.print()} className="btn-secondary btn-print">
            <Printer size={16} /> Print Notes
          </button>
        </div>
      </header>

      {/* Grade Selector Tabs */}
      <nav className="grade-nav">
        <div className="grade-buttons">
          {[6, 7, 8, 9, 10].map((g) => (
            <button
              key={g}
              className={`grade-tab-btn ${activeGrade === g ? 'active' : ''}`}
              style={{ '--accent-color': IT_CURRICULUM[g].color }}
              onClick={() => handleGradeChange(g)}
            >
              <span className="grade-num">Grade {g}</span>
              <span className="grade-badge-sub">{IT_CURRICULUM[g].badge.split(":")[1] || ''}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="main-layout">
        {/* Sidebar Module Menu */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h3>{gradeData.title}</h3>
            <p>{gradeData.description}</p>
          </div>

          <div className="module-list">
            {gradeData.modules.map((m, idx) => {
              const MIcon = ICON_MAP[m.icon] || BookOpen;
              const isSelected = m.id === activeModuleId;
              const isDone = completedModules[m.id];

              return (
                <button
                  key={m.id}
                  className={`module-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setActiveModuleId(m.id);
                    setActiveTab("facts");
                  }}
                >
                  <div className="module-item-left">
                    <MIcon size={18} className="module-icon" />
                    <div className="module-info">
                      <span className="module-sub">Module {idx + 1}</span>
                      <span className="module-name">{m.title.split(":")[1] || m.title}</span>
                    </div>
                  </div>
                  {isDone && <CheckCircle2 size={16} className="done-check" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Center Content View */}
        <main className="content-view">
          {/* Module Banner */}
          <div className="module-banner">
            <div className="banner-icon-box">
              <IconComponent size={32} />
            </div>
            <div className="banner-text">
              <div className="banner-top">
                <span className="grade-chip">Grade {activeGrade}</span>
                <button
                  onClick={() => toggleModuleComplete(currentModule.id)}
                  className={`mark-done-btn ${completedModules[currentModule.id] ? 'completed' : ''}`}
                >
                  <CheckCircle2 size={16} />
                  {completedModules[currentModule.id] ? "Completed" : "Mark as Completed"}
                </button>
              </div>
              <h2 className="module-main-title">{currentModule.title}</h2>
              <p className="module-summary">{currentModule.summary}</p>
            </div>
          </div>

          {/* Module Inner Tabs */}
          <div className="inner-tabs">
            <button
              className={`inner-tab-btn ${activeTab === 'facts' ? 'active' : ''}`}
              onClick={() => setActiveTab('facts')}
            >
              <BookOpen size={16} /> Key Facts & Notes
            </button>
            {currentModule.interactiveType && (
              <button
                className={`inner-tab-btn ${activeTab === 'interactive' ? 'active' : ''}`}
                onClick={() => setActiveTab('interactive')}
              >
                <Sparkles size={16} /> Interactive Simulator
              </button>
            )}
            <button
              className={`inner-tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
              onClick={() => setActiveTab('flashcards')}
            >
              <Layers size={16} /> Revision Flashcards ({currentModule.flashcards.length})
            </button>
            <button
              className={`inner-tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => setActiveTab('quiz')}
            >
              <HelpCircle size={16} /> Self-Assessment Quiz ({currentModule.quiz.length})
            </button>
          </div>

          {/* Tab Panel Body */}
          <div className="tab-panel">
            {activeTab === 'facts' && (
              <div className="facts-panel">
                <div className="section-title">
                  <Bookmark size={20} className="icon-blue" />
                  <h3>Core Concepts & Detailed Notes</h3>
                </div>

                <div className="facts-cards-grid">
                  {currentModule.facts.map((fact, fIdx) => (
                    <div key={fIdx} className="fact-card">
                      <h4 className="fact-term">{fact.term}</h4>
                      <p className="fact-def">{fact.definition}</p>
                    </div>
                  ))}
                </div>

                {currentModule.comparisonTable && (
                  <div className="comparison-section margin-top">
                    <h3 className="section-subtitle">{currentModule.comparisonTable.title}</h3>
                    <div className="table-responsive">
                      <table className="custom-table">
                        <thead>
                          <tr>
                            {currentModule.comparisonTable.headers.map((h, i) => (
                              <th key={i}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {currentModule.comparisonTable.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'interactive' && (
              <div className="interactive-panel">
                {renderInteractiveComponent(currentModule.interactiveType)}
              </div>
            )}

            {activeTab === 'flashcards' && (
              <div className="flashcards-panel">
                <FlashcardDeck cards={currentModule.flashcards} />
              </div>
            )}

            {activeTab === 'quiz' && (
              <div className="quiz-panel">
                <QuizView questions={currentModule.quiz} moduleTitle={currentModule.title} />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectModule={handleSelectModuleFromSearch}
      />

      {/* Footer References */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            <strong>Reliable Curriculum Sources & Standards:</strong> Aligned with CBSE Information Technology (Code 402 & 165), NCERT Computer Science Textbooks, ICSE Computer Applications syllabus, and ACM/CSTA K-12 Computer Science Standards.
          </p>
          <p className="footer-sub">
            Designed for Grade 6, Grade 7, Grade 8, Grade 9, and Grade 10 IT Students & Educators.
          </p>
        </div>
      </footer>
    </div>
  );
}
