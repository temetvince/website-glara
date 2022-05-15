import * as React from "react";
import Sidebar from "./aside/Sidebar";
import Main from "./main/Main";
import "./HomePage.css";

class HomePage extends React.Component {
   render(): JSX.Element {
      return (
         <div className="root zeroed">
            <div className="homepage-grid zeroed">
               <div className="main zeroed">
                  <Main />
               </div>
            </div>
         </div>
      );
   }
}

export default HomePage;
