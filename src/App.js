import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms";
import Authenticate from "./pages/Authenticate";
import Activate from "./pages/Activate";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useHashStore from './store/store';

// const isAuth = false
// const isActivete = false;

function App() {
     const { isAuth } = useHashStore()
     const { isActivated } = useHashStore()
     // console.log(isActivated)
     return (
          <>
               <Navigation /> {/* This is the Header or Navigation bar */}
               <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/authenticate" element={
                         isAuth ?
                              isActivated ?
                                   <Navigate to="/rooms" replace={true} />
                                   : <Navigate to="/activate" replace={true} />
                              : <Authenticate />
                    }></Route>
                    <Route path="/activate" element={
                         isAuth ?
                              isActivated ?
                                   <Navigate to="/rooms" replace={true} />
                                   : <Activate />
                              : <Navigate to="/authenticate" replace={true} />
                    }></Route>
                    <Route path="/rooms" element={
                         isAuth ?
                              isActivated ?
                                   <Rooms />
                                   : <Navigate to="/activate" replace={true} />
                              : <Navigate to="/authenticate" replace={true} />
                    }></Route>
               </Routes>
               <ToastContainer />
          </>
     );
}



export default App;
