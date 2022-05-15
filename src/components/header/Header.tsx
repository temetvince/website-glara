import React, { ReactElement } from "react";
import Logo from "../logo/Logo";

const Header: React.FC = (): ReactElement => {
   return (
      <div className="grid bg-gray">
         <Logo borderWidth={"0px"} maxHeight={"50px"} />
      </div>
   );
};

export default Header;
