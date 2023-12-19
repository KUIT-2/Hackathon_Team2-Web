import './App.css';
import { Normalize } from 'styled-normalize';
import Router from './pages';
import { useStore } from './store/useStore';
import { useEffect } from 'react';
function App() {
  const setUserId = useStore((state) => state.setUserId);
  useEffect(() => {
    const id = localStorage.getItem('userId');
    console.log(id);
    setUserId(id);
  }, []);
  return (
    <>
      <Normalize />
      <Router />
    </>
  );
}

export default App;
