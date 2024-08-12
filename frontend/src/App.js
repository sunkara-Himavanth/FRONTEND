import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom';
import './App.css';

import { SignIn } from './components/signin/signin';
import { SignUp } from './components/signup/signup';
// import { UseStateFunction } from './components/usesate&useeffect/usestate&useefect';

function App() {

const nav =useNavigate
  
  return (
    <>
    {/* <SignIn/> */}

    {/* <SignUp/> */}
    
    {/* <UseStateFunction/>
    <h1>Hello world....</h1>
    <h1>Hello darlings...</h1>
    <Component />
    <Sun/>
    <Elephant/>
    <Events/> */}
    
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={< SignIn />} ></Route>
      <Route path ='/signup' element={ <SignUp />}></Route>

    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;