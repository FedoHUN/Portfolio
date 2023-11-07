import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App(){
  const name = 'Samantha';
  const age = 23;
  return <h1>{name}, {age}</h1>;
}

root.render(<App />);