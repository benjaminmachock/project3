import React, { Component } from "react";
import "./style.css";
import moment from "moment";
import { Badge } from "reactstrap";

class Date extends Component {
  render(props) {
    return (
      <div className="col-2 overflow-hidden justify-content-center">
        <Badge className="date">
          <h1>
            <span className="month">
              {moment(this.props.start).format("MMM")}
            </span>
            <br></br>
            <span className="day">{moment(this.props.start).format("DD")}</span>
          </h1>
        </Badge>
      </div>
    );
  }
}
export default Date;
