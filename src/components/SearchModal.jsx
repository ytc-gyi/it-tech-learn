import React, { useState } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { IT_CURRICULUM } from '../data/itCurriculum';

export default function SearchModal({ isOpen, onClose, onSelectModule }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = [];
  if (query.trim().length > 1) {
    const qLower = query.toLowerCase();

    Object.keys(IT_CURRICULUM).forEach((gradeKey) => {
      const grade = IT_CURRICULUM[gradeKey];
      grade.modules.forEach((mod) => {
        let matchScore = 0;
        let matchedFacts = [];

        if (mod.title.toLowerCase().includes(qLower)) matchScore += 10;
        if (mod.summary.toLowerCase().includes(qLower)) matchScore += 5;

        mod.facts.forEach((f) => {
          if (f.term.toLowerCase().includes(qLower) || f.definition.toLowerCase().includes(qLower)) {
            matchScore += 3;
            matchedFacts.push(f);
          }
        });

        if (matchScore > 0) {
          results.push({
            grade: gradeKey,
            gradeTitle: grade.title,
            module: mod,
            matchedFacts
          });
        }
      });
    });
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search size={20} className="icon-blue" />
          <input
            type="text"
            placeholder="Search IT topics across Grades 6-10 (e.g., 'SQL', 'Binary', 'Python', 'CPU', 'HTML')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-modal-input"
            autoFocus
          />
          <button onClick={onClose} className="btn-close">
            <X size={20} />
          </button>
        </div>

        <div className="search-modal-body">
          {query.trim().length <= 1 ? (
            <div className="search-hint">
              Type at least 2 characters to search through 25 comprehensive IT modules...
            </div>
          ) : results.length === 0 ? (
            <div className="search-hint">No matching IT topics found for "{query}".</div>
          ) : (
            <div className="results-list">
              {results.map((res, idx) => (
                <div
                  key={idx}
                  className="search-result-item"
                  onClick={() => {
                    onSelectModule(parseInt(res.grade), res.module.id);
                    onClose();
                  }}
                >
                  <div className="res-grade-pill">Grade {res.grade}</div>
                  <div className="res-content">
                    <h4 className="res-title">{res.module.title}</h4>
                    <p className="res-summary">{res.module.summary}</p>

                    {res.matchedFacts.slice(0, 2).map((mf, fIdx) => (
                      <div key={fIdx} className="res-fact-snippet">
                        <strong>{mf.term}:</strong> {mf.definition.slice(0, 100)}...
                      </div>
                    ))}
                  </div>
                  <ArrowRight size={18} className="res-arrow" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
