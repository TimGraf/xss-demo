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
      <p>For the text components try inserting the following text:
        <pre><code>&lt;img src=x onerror=alert('XSS')&gt;</code></pre> 
        to see how each handle it.  These components show various methods for inserting text from user input fields.
      </p>
      <p>For the link components try inserting the following text 
        <pre><code>javascript:alert('XSS')</code></pre> 
        and press enter to see how they handle it.  These components mimic displaying web links in a list format.  enter a valid URL and press enter to build a list of links.
      </p>
      <p>See the source code here for the details of each component. <a href="https://github.com/TimGraf/xss-demo" target="_blank" rel="noopener noreferrer">https://github.com/TimGraf/xss-demo</a></p>
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
