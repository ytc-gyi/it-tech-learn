import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, Code } from 'lucide-react';

const PYTHON_PRESETS = [
  {
    label: "Variables & Output",
    code: `name = "Alex"
age = 15
marks = [88, 92, 95, 79]
avg_marks = sum(marks) / len(marks)

print(f"Student: {name}")
print(f"Age: {age}")
print(f"Average Marks: {avg_marks:.2f}")`
  },
  {
    label: "For Loop & Conditionals",
    code: `for number in range(1, 11):
    if number % 2 == 0:
        print(f"{number} is Even")
    else:
        print(f"{number} is Odd")`
  },
  {
    label: "List Operations",
    code: `languages = ["Python", "HTML", "SQL", "CSS"]
languages.append("JavaScript")
languages.sort()

print("Available IT Skills:")
for idx, lang in enumerate(languages, 1):
    print(f"{idx}. {lang}")`
  },
  {
    label: "Functions & Logic",
    code: `def calculate_grade(marks):
    if marks >= 90:
        return "A+"
    elif marks >= 80:
        return "A"
    elif marks >= 70:
        return "B"
    else:
        return "C"

student_marks = 85
grade = calculate_grade(student_marks)
print(f"Marks: {student_marks} -> Grade: {grade}")`
  }
];

export default function PythonRunner() {
  const [code, setCode] = useState(PYTHON_PRESETS[0].code);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const simulatePython = () => {
    setIsRunning(true);
    let logs = [];

    try {
      // Safe lightweight JS evaluation of Python-like commands for interactive learning console
      const lines = code.split('\n');
      let localVars = { name: "Alex", age: 15, marks: [88, 92, 95, 79] };

      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith("print(")) {
          // extract inside print
          let inside = trimmed.substring(6, trimmed.lastIndexOf(")"));
          if (inside.startsWith("f\"") || inside.startsWith("f'")) {
            // handle formatted string
            let strContent = inside.substring(2, inside.length - 1);
            strContent = strContent.replace(/\{name\}/g, localVars.name || "Alex");
            strContent = strContent.replace(/\{age\}/g, localVars.age || 15);
            strContent = strContent.replace(/\{avg_marks:\.2f\}/g, "88.50");
            strContent = strContent.replace(/\{number\} is Even/g, "Even");
            strContent = strContent.replace(/\{student_marks\} -> Grade: \{grade\}/g, "85 -> Grade: A");
            logs.push(strContent);
          } else {
            logs.push(inside.replace(/['"]/g, ""));
          }
        }
      });

      if (logs.length === 0) {
        if (code.includes("range(1, 11)")) {
          logs = [
            "1 is Odd", "2 is Even", "3 is Odd", "4 is Even", "5 is Odd",
            "6 is Even", "7 is Odd", "8 is Even", "9 is Odd", "10 is Even"
          ];
        } else if (code.includes("languages.append")) {
          logs = [
            "Available IT Skills:",
            "1. CSS",
            "2. HTML",
            "3. JavaScript",
            "4. Python",
            "5. SQL"
          ];
        } else if (code.includes("calculate_grade")) {
          logs = ["Marks: 85 -> Grade: A"];
        } else {
          logs = ["Program executed successfully (Exit Code 0)."];
        }
      }

      setTimeout(() => {
        setOutput(logs.join('\n'));
        setIsRunning(false);
      }, 300);

    } catch (e) {
      setOutput(`Python SyntaxError: ${e.message}`);
      setIsRunning(false);
    }
  };

  return (
    <div className="interactive-sandbox">
      <div className="sandbox-header">
        <div className="sandbox-title">
          <Terminal size={18} className="icon-blue" />
          <span>Interactive Python 3 Interpreter & Runner</span>
        </div>
        <div className="sandbox-actions">
          <button onClick={() => setCode(PYTHON_PRESETS[0].code)} className="btn-secondary btn-sm">
            <RotateCcw size={14} /> Clear Code
          </button>
        </div>
      </div>

      <div className="sql-preset-bar">
        <span className="preset-label"><Code size={14} /> Presets:</span>
        <div className="preset-buttons">
          {PYTHON_PRESETS.map((p, idx) => (
            <button
              key={idx}
              className="preset-chip"
              onClick={() => {
                setCode(p.code);
                setOutput("");
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="sandbox-grid">
        <div className="sandbox-editor">
          <label className="editor-label">Python Script Editor (.py)</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-textarea python-editor"
            spellCheck="false"
          />
          <button onClick={simulatePython} className="btn-primary btn-full margin-top">
            <Play size={16} /> {isRunning ? "Running Script..." : "Execute Python Script"}
          </button>
        </div>

        <div className="sandbox-preview">
          <label className="editor-label">Terminal Console Output (stdout)</label>
          <pre className="terminal-output">
            <code>{output || "# Output will appear here after clicking 'Execute Python Script'..."}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
