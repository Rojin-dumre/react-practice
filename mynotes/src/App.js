import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Routes } from "react-router-dom";

import './App.css';
import Header from './components/Header.js'
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path='/' element = {<NotesListPage />} /> 
            {/* react router dom v6 uses an element prop and needs to be included inside routes */}
            <Route path='/note/:id' element = {<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;












// react router v6 doesn't support exact anymore. As stated in their documentation: You don't need to use an exact prop on <Route path="/"> anymore. This is because all paths match exactly by default.