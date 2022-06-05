import React, { ReactElement } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header: React.FC = (): ReactElement => {
   return (
      <div className="container wide bg-secondary flex flex-space-between centered">
         <a href="http://localhost:3000/">
            <Logo
               className="header-logo"
               borderRadius={"3px"}
               borderWidth={"0px"}
               maxHeight={"50px"}
            />
         </a>
         <Nav className="primary text-lg flex flex-row" />
      </div>
   );
};

export default Header;
