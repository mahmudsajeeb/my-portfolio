import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Main from './components/layouts/Main';
import About from './components/About/About';
import Home from './components/Home/Home';
// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
