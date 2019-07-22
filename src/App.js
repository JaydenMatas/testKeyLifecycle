import React from 'react';
import './App.css';
import TestComponent from './TestComponent';

function App() {
  return (
    <div className="App">
      <TestComponent>Key should be on the parent tag that holds this content</TestComponent>
    </div>
  );
}

export default App;
