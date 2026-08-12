import React, { useState } from 'react';
import { Table, Calculator, RefreshCw } from 'lucide-react';

export default function SpreadsheetEvaluator() {
  const [grid, setGrid] = useState({
    A1: 45, B1: 88, C1: 92,
    A2: 60, B2: 74, C2: 85,
    A3: 30, B3: 95, C3: 78
  });

  const [formula, setFormula] = useState("=SUM(A1:C3)");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCellChange = (cellKey, val) => {
    const num = parseFloat(val) || 0;
    setGrid(prev => ({ ...prev, [cellKey]: num }));
  };

  const evaluateFormula = (fToEval = formula) => {
    setError(null);
    let f = fToEval.trim();
    if (!f.startsWith("=")) {
      setError("Formula must start with an equals sign (=)");
      setResult(null);
      return;
    }

    f = f.substring(1).toUpperCase();

    try {
      if (f.startsWith("SUM(")) {
        const range = f.substring(4, f.length - 1);
        const sum = getValuesFromRange(range).reduce((a, b) => a + b, 0);
        setResult(sum);
      } else if (f.startsWith("AVERAGE(")) {
        const range = f.substring(8, f.length - 1);
        const vals = getValuesFromRange(range);
        const avg = vals.reduce((a, b) => a + b, 0) / (vals.length || 1);
        setResult(parseFloat(avg.toFixed(2)));
      } else if (f.startsWith("MAX(")) {
        const range = f.substring(4, f.length - 1);
        const max = Math.max(...getValuesFromRange(range));
        setResult(max);
      } else if (f.startsWith("MIN(")) {
        const range = f.substring(4, f.length - 1);
        const min = Math.min(...getValuesFromRange(range));
        setResult(min);
      } else if (f.startsWith("COUNT(")) {
        const range = f.substring(6, f.length - 1);
        setResult(getValuesFromRange(range).length);
      } else if (f.startsWith("IF(")) {
        // e.g. IF(A1>50, "PASS", "FAIL")
        const inside = f.substring(3, f.length - 1);
        const parts = inside.split(",");
        const condition = parts[0].trim();
        let isTrue = false;
        if (condition.includes(">")) {
          const [cell, val] = condition.split(">");
          isTrue = (grid[cell.trim()] || 0) > parseFloat(val);
        } else if (condition.includes("<")) {
          const [cell, val] = condition.split("<");
          isTrue = (grid[cell.trim()] || 0) < parseFloat(val);
        }
        const valTrue = parts[1] ? parts[1].replace(/['"]/g, "").trim() : "TRUE";
        const valFalse = parts[2] ? parts[2].replace(/['"]/g, "").trim() : "FALSE";
        setResult(isTrue ? valTrue : valFalse);
      } else {
        throw new Error("Supported functions: SUM, AVERAGE, MAX, MIN, COUNT, IF");
      }
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  const getValuesFromRange = (rangeStr) => {
    if (rangeStr.includes(":")) {
      const [start, end] = rangeStr.split(":");
      const startCol = start[0];
      const startRow = parseInt(start[1]);
      const endCol = end[0];
      const endRow = parseInt(end[1]);

      const cols = ['A', 'B', 'C'];
      const c1 = cols.indexOf(startCol);
      const c2 = cols.indexOf(endCol);

      let vals = [];
      for (let r = startRow; r <= endRow; r++) {
        for (let c = c1; c <= c2; c++) {
          const key = `${cols[c]}${r}`;
          if (grid[key] !== undefined) vals.push(grid[key]);
        }
      }
      return vals;
    } else {
      return [grid[rangeStr] || 0];
    }
  };

  return (
    <div className="interactive-sandbox">
      <div className="sandbox-header">
        <div className="sandbox-title">
          <Table size={18} className="icon-green" />
          <span>Interactive Excel / Spreadsheet Formula Evaluator</span>
        </div>
        <button
          onClick={() => {
            setGrid({ A1: 45, B1: 88, C1: 92, A2: 60, B2: 74, C2: 85, A3: 30, B3: 95, C3: 78 });
            setFormula("=SUM(A1:C3)");
            setResult(647);
          }}
          className="btn-secondary btn-sm"
        >
          <RefreshCw size={14} /> Reset Grid
        </button>
      </div>

      <div className="spreadsheet-layout">
        <div className="grid-editor">
          <table className="sheet-table">
            <thead>
              <tr>
                <th></th>
                <th>Column A</th>
                <th>Column B</th>
                <th>Column C</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(row => (
                <tr key={row}>
                  <td className="row-header">Row {row}</td>
                  {['A', 'B', 'C'].map(col => {
                    const key = `${col}${row}`;
                    return (
                      <td key={key}>
                        <div className="cell-wrapper">
                          <span className="cell-name">{key}</span>
                          <input
                            type="number"
                            value={grid[key]}
                            onChange={(e) => handleCellChange(key, e.target.value)}
                            className="sheet-input"
                          />
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="formula-box">
          <label className="editor-label">Formula Bar (`=` symbol required)</label>
          <div className="formula-input-group">
            <input
              type="text"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              className="formula-input"
              placeholder="e.g. =SUM(A1:C3), =AVERAGE(A1:A3), =MAX(A1:C3)"
            />
            <button onClick={() => evaluateFormula()} className="btn-primary">
              <Calculator size={16} /> Evaluate
            </button>
          </div>

          <div className="preset-chip-list">
            <span className="preset-label">Presets:</span>
            {["=SUM(A1:C3)", "=AVERAGE(A1:C3)", "=MAX(A1:C3)", "=MIN(A1:C3)", "=IF(A1>50, \"Pass\", \"Fail\")"].map((f, i) => (
              <button
                key={i}
                className="chip-btn"
                onClick={() => {
                  setFormula(f);
                  evaluateFormula(f);
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {result !== null && (
            <div className="formula-result-card">
              <span className="result-label">Computed Result:</span>
              <span className="result-val">{result}</span>
            </div>
          )}

          {error && <div className="sql-error">Formula Error: {error}</div>}
        </div>
      </div>
    </div>
  );
}
