import React from 'react';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';
import { SearchContext } from './components/Search';

function App() {
  const [searchData, setSearchData] = React.useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}
export default App;
