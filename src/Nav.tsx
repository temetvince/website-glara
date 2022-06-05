import React from "react";

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
                  <a className={this.props.className + " pad-right"} href="/">
                     Repeaters
                  </a>
               </li>
               <li>
                  <a
                     className={this.props.className + " pad-horizontal"}
                     href="src/Nav"
                  >
                     About Us
                  </a>
               </li>
               <li>
                  <a
                     className={this.props.className + " pad-left"}
                     href="src/Nav"
                  >
                     Utilities
                  </a>
               </li>
            </ul>
         </div>
      );
   }
}

export default Nav;
