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

   constructor(props: RepeaterProps) {
      super(props);

      this.color = props.alt ? "secondary" : "primary";
      this.bgColor = props.alt ? "bg-primary" : "bg-secondary";
   }

   render(): JSX.Element {
      return (
         <div className={"container grid " + this.bgColor}>
            <h2 className={"container repeaters-header " + this.color}>
               {this.props.name}
            </h2>
            <div className={"container flex"}>
               <div className={"flex-same-size"}>
                  <ul
                     className={
                        "text-left container flex-one-third flex-same-size " +
                        this.color
                     }
                  >
                     <li>
                        <h3 className={this.color}>{this.props.callsign}</h3>
                     </li>
                     <li>{this.props.frequency}</li>
                     <li>{this.props.offset}</li>
                     <li>{this.props.tone}</li>
                  </ul>
               </div>
               <p
                  className={
                     "container centered text-left flex-two-third flex-same-size " +
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
