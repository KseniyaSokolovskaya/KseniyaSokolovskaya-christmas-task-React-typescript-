import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Basket from './contexts/Basket';
import * as CardsList from './contexts/CardsList';
import * as SettingsTree from './contexts/SettingsTree';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss';
import ToysPage from './pages/ToysPage';
import TreePage from './pages/TreePage';
import HomePage from './pages/HomePage';

const App: React.FC = () => (
  <BrowserRouter>
    <Basket.Provider>
      <CardsList.Provider>
        <SettingsTree.Provider>
          <div className="app">
            <div className="wrapper-main">
              <Header />

              <main className="main" style={{ backgroundImage: `url('/assets/bg.jpg')` }}>
                <Routes>
                  <Route element={<HomePage />} path="/" />
                  <Route element={<ToysPage />} path="/toys" />
                  <Route element={<TreePage />} path="/tree" />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        </SettingsTree.Provider>
      </CardsList.Provider>
    </Basket.Provider>
  </BrowserRouter>
);

export default App;
