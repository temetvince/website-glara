import React from "react";

export interface MemberProps {
   first: string;
   last: string;
   call: string;
   alt?: boolean;
}

class Member extends React.Component<MemberProps> {
   color: string;
   colorAlt: string;
   bgColor: string;
   bgColorAlt: string;
   bgBarColor: string;
   bgBarColorAlt: string;

   constructor(props: MemberProps) {
      super(props);

      this.color = props.alt ? "primary" : "secondary";
      this.colorAlt = props.alt ? "secondary" : "primary";
      this.bgColor = props.alt ? "bg-primary" : "bg-secondary";
      this.bgColorAlt = props.alt ? "bg-secondary" : "bg-primary";
      this.bgBarColor = props.alt ? "bg-dark-grey" : "bg-grey";
      this.bgBarColorAlt = props.alt ? "bg-grey" : "bg-dark-grey";
   }

   render(): JSX.Element {
      return (
         <div className={"wide flex " + this.bgBarColor}>
            <div className={"flex flex-row container centered"}>
               <div className={"primary container " + this.bgBarColor}>
                  {this.props.first + " " + this.props.last}
               </div>
               <div className={this.color + " container " + this.bgColorAlt}>
                  {this.props.call}
               </div>
            </div>
         </div>
      );
   }
}

export default Member;
