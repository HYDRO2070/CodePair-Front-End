import './App.css';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/JavaScript/LandingPage';
import SigninPage from './pages/JavaScript/SigninPage';
import LoginPage from './pages/JavaScript/LoginPage';
import MainPage from './pages/JavaScript/MainPage';
import ProtectedRoute from './pages/JavaScript/ProtectedRoute';
import ProblemPage from './pages/JavaScript/ProblemPage';
import NavBar from './components/JavaScript/NavBar';
import CodeEditor from './pages/JavaScript/CodeEditor';
import ProfilePage from "./pages/JavaScript/ProfilePage";

import { Link} from 'react-router-dom';

function App() {
  const [token, setToken] = useState('');
  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      setToken(t);
    }
  }, []);

  const handleLogin = (newToken) => {
    // Update token in localStorage and state
    localStorage.setItem('token', newToken);
    setToken(newToken);
};

 const handletoken = ()=>{
  setToken('')
  console.log("jjjdjdjd")
 }


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          
          {token ?<><NavBar /><MainPage /></>  : <LandingPage />}
        </>
      ),
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
    {
      path: "/login",
      element: <LoginPage onLogin={handleLogin}/>,
    },
    {
      path: "/problemset",
      element: (
        <ProtectedRoute>
          <NavBar />
          <ProblemPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/problemset/:id",
      element: (
        <ProtectedRoute>
          <NavBar />
          <CodeEditor />
        </ProtectedRoute>
      ),
    },
    {
      path: "/u/:username",
      element: (<>
          <NavBar />
          <ProfilePage />
          </>
      ),
    },
    {
      path: "/load",
      element: (
        <div>
          <Link to="/"><button onClick={handletoken}>Click to log out</button></Link>
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
