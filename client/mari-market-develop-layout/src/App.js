import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchGoods } from './redux/actions/goods';

import MainPage from './components/page/main';
import Catalog from './components/page/catalog';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;