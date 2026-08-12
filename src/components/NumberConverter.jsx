import React, { useState } from 'react';
import { Hash, ArrowRightLeft } from 'lucide-react';

export default function NumberConverter() {
  const [decVal, setDecVal] = useState("25");

  const num = parseInt(decVal, 10) || 0;

  const binary = num.toString(2);
  const octal = num.toString(8);
  const hex = num.toString(16).toUpperCase();

  return (
    <div className="interactive-sandbox">
      <div className="sandbox-header">
        <div className="sandbox-title">
          <Hash size={18} className="icon-amber" />
          <span>Interactive Digital Number Base System Converter</span>
        </div>
      </div>

      <div className="converter-grid">
        <div className="converter-card input-card">
          <label className="converter-label">Decimal (Base 10)</label>
          <input
            type="number"
            min="0"
            max="65535"
            value={decVal}
            onChange={(e) => setDecVal(e.target.value)}
            className="converter-input"
          />
          <span className="converter-sub">Enter any decimal integer (0 - 65,535)</span>
        </div>

        <div className="converter-card">
          <label className="converter-label">Binary (Base 2)</label>
          <div className="output-val font-mono">{binary}</div>
          <span className="converter-sub">Digits: 0, 1</span>
        </div>

        <div className="converter-card">
          <label className="converter-label">Octal (Base 8)</label>
          <div className="output-val font-mono">{octal}</div>
          <span className="converter-sub">Digits: 0 - 7</span>
        </div>

        <div className="converter-card">
          <label className="converter-label">Hexadecimal (Base 16)</label>
          <div className="output-val font-mono">{hex}</div>
          <span className="converter-sub">Digits: 0-9, A-F</span>
        </div>
      </div>

      <div className="math-step-card">
        <h4><ArrowRightLeft size={16} /> Positional Power Expansion for Binary <code>{binary}</code>:</h4>
        <div className="expansion-terms">
          {binary.split('').map((bit, idx) => {
            const power = binary.length - 1 - idx;
            const val = parseInt(bit) * Math.pow(2, power);
            return (
              <span key={idx} className={`term-chip ${bit === '1' ? 'active-chip' : ''}`}>
                ({bit} × 2<sup>{power}</sup> = {val})
              </span>
            );
          })}
        </div>
        <div className="math-sum">
          Sum = {binary.split('').map((bit, idx) => parseInt(bit) * Math.pow(2, binary.length - 1 - idx)).join(' + ')} = <strong>{num}₁₀</strong>
        </div>
      </div>
    </div>
  );
}
