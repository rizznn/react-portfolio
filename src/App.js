import React, { useState } from 'react';
import Header from "./components/Header"
import Project from './components/Project'
import About from './components/About';
import Navigation from './components/Navigation'
import ContactForm from './components/Contact';

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
]);

const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navigation
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        ></Navigation>
      </Header>
        <main>
          <Page currentPage={currentPage}></Page>
        </main>

    </div>
  );
}

export default App;
