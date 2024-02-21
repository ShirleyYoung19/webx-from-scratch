import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="title">WebX From Scratch</div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

const root = document.createElement('div');
const shadowRoot = root.attachShadow({ mode: 'open' });

fetch(chrome.runtime.getURL('content-scripts.css'))
  .then(response => response.text())
  .then(cssContent => new CSSStyleSheet().replace(cssContent))
  .then(styleSheet => shadowRoot.adoptedStyleSheets.push(styleSheet));

createRoot(shadowRoot).render(<App />);
document.body.append(root);
