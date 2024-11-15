import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage';
import { CvPage } from './pages/CvPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { CurrentWorkPage } from './pages/CurrentWorkPage';
import { TeachingPage } from './pages/TeachingPage';
import { ContactMePage } from './pages/ContactMePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <main role='main'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cv' element={<CvPage />} />
            <Route path='/publications' element={<PublicationsPage />} />
            <Route path='/currentwork' element={<CurrentWorkPage />} />
            <Route path='/teaching' element={<TeachingPage />} />
            <Route path='/contactme' element={<ContactMePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
