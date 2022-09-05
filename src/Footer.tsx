import React, { ReactElement } from "react";

const Footer: React.FC = (): ReactElement => {
   return (
      <div className="grid bg-gray centered footer">
         <h4 className="container centered dark text-center">
            &copy; 2022 GLARA in partnership with TALARC Post 178
         </h4>
         <h6 className="centered dark text-center">
            Maintained by{" "}
            <a className="primary footer-link" href="http://www.ki5spl.com">
               KI5SPL
            </a>
         </h6>
      </div>
   );
};

export default Footer;
