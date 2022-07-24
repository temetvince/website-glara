import React from "react";
import { Link } from "react-router-dom";

export interface NavProps {
   className?: string;
}

class Nav extends React.Component<NavProps> {
   constructor(props: NavProps) {
      super(props);
   }

   render(): JSX.Element {
      return (
         <div className={this.props.className + " nav-main"}>
            <ul className={this.props.className}>
               <li>
                  <Link
                     className={this.props.className + " pad-right text-center"}
                     to="/"
                  >
                     Repeaters
                  </Link>
               </li>
               <li>
                  <Link
                     className={
                        this.props.className + " pad-horizontal text-center"
                     }
                     to="/members"
                  >
                     Org
                  </Link>
               </li>
               <li>
                  <Link
                     className={this.props.className + " pad-left text-center"}
                     to="/tools"
                  >
                     Tools
                  </Link>
               </li>
            </ul>
         </div>
      );
   }
}

export default Nav;
