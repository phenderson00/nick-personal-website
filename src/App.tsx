import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Menu } from './components/menu/Menu';
import { HomePage } from './pages/HomePage';
import { CvPage } from './pages/CvPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { CurrentWorkPage } from './pages/CurrentWorkPage';
import { TeachingPage } from './pages/TeachingPage';
import { ContactMePage } from './pages/ContactMePage';

function App() {

  return (
    <div>
      <Menu />
      <main role='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cv' element={<CvPage />} />
          <Route path='/publications' element={<PublicationsPage />} />
          <Route path='/currentwork' element={<CurrentWorkPage />} />
          <Route path='/teaching' element={<TeachingPage />} />
          <Route path='/contact' element={<ContactMePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
