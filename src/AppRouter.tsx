import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repeaters from "./Repeaters";
import Tools from "./Tools";

const AppRouter = () => {
   return (
      <div className="root bg-gray zeroed">
         <div className="root-main centered">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Repeaters />} />
                  <Route path="/tools" element={<Tools />} />
               </Routes>
            </BrowserRouter>
         </div>
      </div>
   );
};

export default AppRouter;
