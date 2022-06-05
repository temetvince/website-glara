import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repeaters from "./Repeaters";

const AppRouter = () => {
   return (
      <div className="root bg-gray zeroed">
         <div className="root-grid zeroed centered">
            <div className="root-main zeroed">
               <BrowserRouter>
                  <Routes>
                     <Route path="/" element={<Repeaters />} />
                  </Routes>
               </BrowserRouter>
            </div>
         </div>
      </div>
   );
};

export default AppRouter;
