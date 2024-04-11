import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActiveTasks from './pages/ActiveTasks';
import CompletedTasks from './pages/CompletedTasks';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/activetasks' element={<ActiveTasks />} />
        <Route path='/completedtasks' element={<CompletedTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
