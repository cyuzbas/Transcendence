import React from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Intro from './components/Intro';



function App() {
  return (
    <Intro/>
    // <Login/>
    // <div className='App'>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/login' element={<Login />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
