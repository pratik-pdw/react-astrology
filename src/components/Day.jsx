import React, { Component } from "react";

class Day extends Component {
  state = {
    day: ["Today", "Yesterday", "Tomorrow"]
  };
  render() {
    return (
      <div>
        <h5 className="font-weight-bold text-right">Day</h5>
        <select className="rounded-sm" onChange={this.props.onDayChange}>
          {this.state.day.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Day;
