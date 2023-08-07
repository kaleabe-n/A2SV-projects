import './bootstrap.min.css';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import ContactPage, { contactsLoader } from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ContactDetails, { singleContactLoader } from './pages/ContactDetail';
import AddContact, { addContactAction } from './pages/AddContact';
import EditContact, { editContactAction } from './pages/EditContact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/AboutPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<HomePage/>} errorElement={<ErrorPage/>}>
      <Route element={<ContactPage/>} path='/contacts' loader={contactsLoader}/>
      <Route element={<ContactDetails/>} path='/contacts/:id' loader={singleContactLoader}/>
      <Route element={<AddContact/>} path='/add'action={addContactAction}/>
      <Route element={<EditContact/>} path='/contacts/edit/:id' action={editContactAction} loader={singleContactLoader}/>
      <Route element={<Home/>} path='/'/>
    </Route >)
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
