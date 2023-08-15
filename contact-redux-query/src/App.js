import './bootstrap.min.css';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ContactDetails from './pages/ContactDetail';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/LandingPage';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './store/features/contact-api';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<HomePage/>} errorElement={<ErrorPage/>}>
      <Route element={<ContactPage/>} path='/contacts'/>
      <Route element={<ContactDetails/>} path='/contacts/:id'/>
      <Route element={<AddContact/>} path='/add'/>
      <Route element={<EditContact/>} path='/contacts/edit/:id'/>
      <Route element={<Home/>} path='/'/>
    </Route >)
  )
  return (
    <ApiProvider api={apiSlice}>
      <RouterProvider router={router}/>
    </ApiProvider>
  );
}

export default App;
