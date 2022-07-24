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

    this.color = this.props.alt ? "primary" : "secondary";
    this.colorAlt = this.props.alt ? "secondary" : "primary";
    this.bgColor = this.props.alt ? "bg-primary" : "bg-secondary";
    this.bgColorAlt = this.props.alt ? "bg-secondary" : "bg-primary";
    this.bgBarColor = this.props.alt ? "bg-dark-grey" : "bg-grey";
    this.bgBarColorAlt = this.props.alt ? "bg-grey" : "bg-dark-grey";
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
  };
}

export default Member;
