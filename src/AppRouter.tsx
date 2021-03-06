import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Repeaters from "./Repeaters";
import Tools from "./Tools";
import Members from "./Members";

const AppRouter = () => {
   return (
      <div className="root bg-gray zeroed">
         <div className="root-main centered">
            <HashRouter>
               <Routes>
                  <Route path="/" element={<Repeaters />} />
                  <Route path="members" element={<Members />} />
                  <Route path="tools" element={<Tools />} />
               </Routes>
            </HashRouter>
         </div>
      </div>
   );
};

export default AppRouter;
