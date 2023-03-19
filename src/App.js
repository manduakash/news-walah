import './App.css';
import Navbar from './components/Navbar';
import {useState} from 'react';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function App() {

  const [progress, setProgress] = useState(0);

  return (
   <div className='app'>
    <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path='/' element={<News key='general' category='general'setProgress={setProgress} />}/>
        <Route exact path='/business' element={<News key='business' category='business' setProgress={setProgress}/>}/>
        <Route exact path='/entertainment' element={<News key='entertainment' category='entertainment' setProgress={setProgress}/>}/>
        <Route exact path='/health' element={<News key='health' category='health' setProgress={setProgress}/>}/>
        <Route exact path='/science' element={<News key='science' category='science' setProgress={setProgress}/>}/>
        <Route exact path='/sports' element={<News key='sports' category='sports' setProgress={setProgress}/>}/>
        <Route exact path='/technology' element={<News key='technology' category='technology' setProgress={setProgress}/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
