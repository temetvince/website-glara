import React from "react";

export interface RepeaterProps {
   name: string;
   frequency: string;
   callsign?: string;
   offset?: string;
   tone?: string;
   description?: string;
   alt?: boolean;
}

class Repeater extends React.Component<RepeaterProps> {
   color: string;
   bgColor: string;
   textAlign: string;

   constructor(props: RepeaterProps) {
      super(props);

      this.color = props.alt ? "secondary" : "primary";
      this.bgColor = props.alt ? "bg-primary" : "bg-secondary";
      this.textAlign = props.alt ? "text-right" : "text-left";
   }

   render(): JSX.Element {
      return (
         <div className={this.textAlign + " container grid " + this.bgColor}>
            <h2 className={"container repeaters-header " + this.color}>
               {this.props.name}
            </h2>
            <div
               className={
                  "container flex" + (this.props.alt ? " flex-row-reverse" : "")
               }
            >
               <ul className={"container flex-one-third " + this.color}>
                  <li>
                     <h3 className={this.color}>{this.props.callsign}</h3>
                  </li>
                  <li>{this.props.frequency}</li>
                  <li>{this.props.offset}</li>
                  <li>{this.props.tone}</li>
               </ul>
               <p
                  className={
                     "container centered text-justify flex-two-third " +
                     this.color
                  }
               >
                  {this.props.description}
               </p>
            </div>
         </div>
      );
   }
}

export default Repeater;
