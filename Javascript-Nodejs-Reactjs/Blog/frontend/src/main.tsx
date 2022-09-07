import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, Route, Routes } from "react-router-dom";
import App from './BlogApp'
import { BrowserRouter } from 'react-router-dom'
import BlogApp from './BlogApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogApp />
    </BrowserRouter>
  </React.StrictMode>
)
