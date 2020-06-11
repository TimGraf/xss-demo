import React from 'react';
import './App.css';
import NotSoDangerousComponent from './Components/NotSoDangerousComponent';
import DangerousComponent from './Components/DangerousComponent';
import BasicComponent from './Components/BasicComponent';
import { default as AnotherComponent } from './Components/BasicComponent';
import LinksComponent from './Components/LinksComponent';
import SafeLinksComponent from './Components/SafeLinksComponent';

function App() {
  return (
    <div className="App">
      <AnotherComponent />
      <BasicComponent />
      <DangerousComponent />
      <NotSoDangerousComponent />
      <LinksComponent />
      <SafeLinksComponent />
    </div>
  );
}

export default App;
