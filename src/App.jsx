
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return(
    <div className="flex">
      <Sidebar/>
      <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/favorites' element={<FavoritesPage/>}/>
  </Routes>


    </div>
  );
  
}
 
 

export default App;
