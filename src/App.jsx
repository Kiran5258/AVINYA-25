import EventDetails from './components/EventDetails';
import Motion from './components/Motion';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Motion/>}/>
        <Route path='/event/:id'element={<EventDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
