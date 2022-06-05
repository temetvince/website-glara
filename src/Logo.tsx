import React from "react";

export interface LogoProps {
   borderRadius?: string;
   borderStyle?: string;
   borderWidth?: string;
   maxHeight?: string;
   className?: string;
}

class Logo extends React.Component<LogoProps> {
   constructor(props: LogoProps) {
      super(props);
   }

   render(): JSX.Element {
      return (
         <img
            src={"image298.jpg"} // w=246px, h=207px
            alt="Grand Lake Amateur Radio Association Logo"
            className={this.props.className}
            style={{
               borderStyle: this.props.borderStyle
                  ? this.props.borderStyle
                  : "solid",
               borderWidth: this.props.borderWidth
                  ? this.props.borderWidth
                  : "0px",
               borderRadius: this.props.borderRadius
                  ? this.props.borderRadius
                  : "0px",
               width: "auto",
               maxWidth: "100%",
               maxHeight: this.props.maxHeight ? this.props.maxHeight : "100%",
            }}
         />
      );
   }
}

export default Logo;
