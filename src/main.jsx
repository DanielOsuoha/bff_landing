import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import StopTheLoop from '../StopTheLoop.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StopTheLoop />
    <Analytics />
  </React.StrictMode>
);
