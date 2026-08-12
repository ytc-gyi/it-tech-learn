import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

const DEFAULT_CODE = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; color: #1e293b; }
    h1 { color: #2563eb; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; }
    .card { background: white; border-radius: 8px; padding: 15px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); margin-top: 15px; }
    .badge { background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
    button { background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; }
    button:hover { background: #059669; }
  </style>
</head>
<body>
  <h1>Welcome to Web Development!</h1>
  <p>Edit this code in the editor on the left to see live changes instantly.</p>
  <div class="card">
    <span class="badge">HTML5 + CSS3</span>
    <h3>Interactive Preview Box</h3>
    <button onclick="alert('Hello from JavaScript!')">Click Me!</button>
  </div>
</body>
</html>`;

export default function HtmlSandbox({ initialCode = DEFAULT_CODE }) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  return (
    <div className="interactive-sandbox">
      <div className="sandbox-header">
        <div className="sandbox-title">
          <Play size={18} className="icon-green" />
          <span>Interactive HTML & CSS Code Playground</span>
        </div>
        <div className="sandbox-actions">
          <button onClick={handleCopy} className="btn-secondary btn-sm">
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy Code"}
          </button>
          <button onClick={handleReset} className="btn-secondary btn-sm">
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>
      <div className="sandbox-grid">
        <div className="sandbox-editor">
          <label className="editor-label">HTML / CSS Source Code</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            className="code-textarea"
          />
        </div>
        <div className="sandbox-preview">
          <label className="editor-label">Live Browser Output</label>
          <iframe
            srcDoc={code}
            title="HTML Sandbox Output"
            sandbox="allow-scripts"
            className="preview-iframe"
          />
        </div>
      </div>
    </div>
  );
}
