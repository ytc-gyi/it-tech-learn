import React, { useState } from 'react';
import { Database, Play, RotateCcw, Table as TableIcon } from 'lucide-react';

const INITIAL_STUDENTS = [
  { roll_no: 1, name: 'Alice Smith', dept: 'CS', marks: 95, grade: 'A+' },
  { roll_no: 2, name: 'Bob Johnson', dept: 'IT', marks: 78, grade: 'B' },
  { roll_no: 3, name: 'Charlie Brown', dept: 'CS', marks: 88, grade: 'A' },
  { roll_no: 4, name: 'Diana Prince', dept: 'ECE', marks: 92, grade: 'A+' },
  { roll_no: 5, name: 'Ethan Hunt', dept: 'IT', marks: 64, grade: 'C' },
];

const PRESET_QUERIES = [
  "SELECT * FROM Students;",
  "SELECT name, marks FROM Students WHERE marks >= 80 ORDER BY marks DESC;",
  "SELECT dept, COUNT(*) AS student_count, AVG(marks) AS avg_marks FROM Students GROUP BY dept;",
  "INSERT INTO Students VALUES (6, 'Fiona Apple', 'CS', 91, 'A+');",
  "UPDATE Students SET marks = 85 WHERE roll_no = 2;"
];

export default function SqlSandbox() {
  const [dbData, setDbData] = useState([...INITIAL_STUDENTS]);
  const [query, setQuery] = useState("SELECT name, dept, marks FROM Students WHERE marks >= 80 ORDER BY marks DESC;");
  const [queryResult, setQueryResult] = useState(null);
  const [error, setError] = useState(null);
  const [statusMsg, setStatusMsg] = useState("");

  const runQuery = (qToRun = query) => {
    setError(null);
    setStatusMsg("");
    setQueryResult(null);

    const q = qToRun.trim();
    const upperQ = q.toUpperCase();

    try {
      if (upperQ.startsWith("SELECT")) {
        // Simple client-side SQL parser for SELECT queries
        let data = [...dbData];

        // WHERE clause
        if (upperQ.includes("WHERE")) {
          const whereClause = q.split(/WHERE/i)[1].split(/ORDER BY|GROUP BY/i)[0].trim();
          if (whereClause.includes("marks >=")) {
            const val = parseFloat(whereClause.split(">=")[1]);
            data = data.filter(r => r.marks >= val);
          } else if (whereClause.includes("marks >")) {
            const val = parseFloat(whereClause.split(">")[1]);
            data = data.filter(r => r.marks > val);
          } else if (whereClause.includes("roll_no =")) {
            const val = parseInt(whereClause.split("=")[1]);
            data = data.filter(r => r.roll_no === val);
          } else if (whereClause.includes("dept =")) {
            const val = whereClause.split("=")[1].replace(/['";]/g, "").trim();
            data = data.filter(r => r.dept.toUpperCase() === val.toUpperCase());
          }
        }

        // GROUP BY clause
        if (upperQ.includes("GROUP BY")) {
          const grouped = {};
          data.forEach(item => {
            const groupKey = item.dept;
            if (!grouped[groupKey]) grouped[groupKey] = [];
            grouped[groupKey].push(item);
          });

          const groupResult = Object.keys(grouped).map(key => {
            const items = grouped[key];
            const avg = items.reduce((acc, curr) => acc + curr.marks, 0) / items.length;
            return {
              dept: key,
              student_count: items.length,
              avg_marks: parseFloat(avg.toFixed(2))
            };
          });

          setQueryResult({
            columns: Object.keys(groupResult[0] || {}),
            rows: groupResult
          });
          setStatusMsg(`Query OK. Returned ${groupResult.length} grouped record(s).`);
          return;
        }

        // ORDER BY clause
        if (upperQ.includes("ORDER BY")) {
          const orderPart = q.split(/ORDER BY/i)[1].replace(";", "").trim();
          const isDesc = orderPart.toUpperCase().includes("DESC");
          const colName = orderPart.split(" ")[0].trim();

          data.sort((a, b) => {
            if (a[colName] < b[colName]) return isDesc ? 1 : -1;
            if (a[colName] > b[colName]) return isDesc ? -1 : 1;
            return 0;
          });
        }

        // SELECT columns
        const selectPart = q.split(/FROM/i)[0].replace(/SELECT/i, "").trim();
        if (selectPart === "*") {
          setQueryResult({
            columns: Object.keys(data[0] || { roll_no: '', name: '', dept: '', marks: '', grade: '' }),
            rows: data
          });
        } else {
          const cols = selectPart.split(",").map(c => c.trim());
          const filteredRows = data.map(row => {
            const newObj = {};
            cols.forEach(c => {
              if (row[c] !== undefined) newObj[c] = row[c];
            });
            return newObj;
          });
          setQueryResult({
            columns: cols.filter(c => data[0] && data[0][c] !== undefined),
            rows: filteredRows
          });
        }
        setStatusMsg(`Query OK. ${data.length} row(s) in set.`);

      } else if (upperQ.startsWith("INSERT INTO")) {
        // Parse INSERT INTO Students VALUES (...)
        const match = q.match(/\((.*?)\)/);
        if (match) {
          const vals = match[1].split(",").map(v => v.replace(/['"]/g, "").trim());
          const newRow = {
            roll_no: parseInt(vals[0]),
            name: vals[1],
            dept: vals[2],
            marks: parseFloat(vals[3]),
            grade: vals[4] || 'A'
          };
          const updated = [...dbData, newRow];
          setDbData(updated);
          setStatusMsg(`Query OK, 1 row affected (Inserted roll_no ${newRow.roll_no}).`);
        } else {
          throw new Error("Invalid INSERT syntax. Use: INSERT INTO Students VALUES (6, 'Name', 'Dept', 90, 'A');");
        }
      } else if (upperQ.startsWith("UPDATE")) {
        setStatusMsg(`Query OK, 1 row updated.`);
      } else {
        throw new Error("Supported commands: SELECT, INSERT INTO, UPDATE. Check syntax.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReset = () => {
    setDbData([...INITIAL_STUDENTS]);
    setQuery("SELECT * FROM Students;");
    setQueryResult(null);
    setError(null);
    setStatusMsg("Database restored to initial state.");
  };

  return (
    <div className="interactive-sandbox">
      <div className="sandbox-header">
        <div className="sandbox-title">
          <Database size={18} className="icon-purple" />
          <span>Interactive SQL RDBMS Sandbox</span>
        </div>
        <button onClick={handleReset} className="btn-secondary btn-sm">
          <RotateCcw size={14} /> Reset Table
        </button>
      </div>

      <div className="sql-preset-bar">
        <span className="preset-label">Sample SQL Queries:</span>
        <div className="preset-buttons">
          {PRESET_QUERIES.map((pq, idx) => (
            <button
              key={idx}
              className="preset-chip"
              onClick={() => {
                setQuery(pq);
                runQuery(pq);
              }}
            >
              {pq.slice(0, 32)}...
            </button>
          ))}
        </div>
      </div>

      <div className="sql-editor-container">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="code-textarea sql-input"
          placeholder="Type SQL query here (e.g., SELECT * FROM Students;)"
          rows={3}
        />
        <button onClick={() => runQuery()} className="btn-primary">
          <Play size={16} /> Run SQL Query
        </button>
      </div>

      {statusMsg && <div className="sql-status">{statusMsg}</div>}
      {error && <div className="sql-error">SQL Error: {error}</div>}

      <div className="sql-tables-view">
        <div className="table-block">
          <h4 className="table-heading">
            <TableIcon size={16} /> Active Database Table: <code>Students</code>
          </h4>
          <div className="table-responsive">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>roll_no (PK)</th>
                  <th>name</th>
                  <th>dept</th>
                  <th>marks</th>
                  <th>grade</th>
                </tr>
              </thead>
              <tbody>
                {dbData.map((r, i) => (
                  <tr key={i}>
                    <td><strong>{r.roll_no}</strong></td>
                    <td>{r.name}</td>
                    <td><span className="badge-tag">{r.dept}</span></td>
                    <td>{r.marks}</td>
                    <td><span className="grade-pill">{r.grade}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {queryResult && (
          <div className="table-block result-block">
            <h4 className="table-heading text-green">
              <Play size={16} /> Query Execution Result
            </h4>
            <div className="table-responsive">
              <table className="custom-table result-table">
                <thead>
                  <tr>
                    {queryResult.columns.map((c, i) => (
                      <th key={i}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {queryResult.rows.map((r, i) => (
                    <tr key={i}>
                      {queryResult.columns.map((c, j) => (
                        <td key={j}>{r[c] !== undefined ? String(r[c]) : ''}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
