import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room';
import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <AuthContextProvider>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms/new" element={<NewRoom />} />
              <Route path="/rooms/:id" element={<Room />} />
              <Route path='/admin/rooms/:id' element={<AdminRoom />} />  
          </Routes>
      </AuthContextProvider> 
      </BrowserRouter>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
