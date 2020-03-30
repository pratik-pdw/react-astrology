import React, { Component } from "react";

class List extends Component {
  state = {
    sunsignList: [
      { name: "Aries", daterange: "Mar 21 - Apr 20" },
      { name: "Taurus", daterange: "Apr 21 - May 20" },
      { name: "Gemini", daterange: "May 21 - Jun 21" },
      { name: "Cancer", daterange: "Jun 22 - Jul 22" },
      { name: "Leo", daterange: "Jul 23 - Aug 22" },
      { name: "Virgo", daterange: "Sep 23 - Oct 22" },
      { name: "Libra", daterange: "Mar 21 - Apr 20" },
      { name: "Scorpio", daterange: "Oct 23 - Nov 22" },
      { name: "Sagittarius", daterange: "Nov 23 - Dec 21" },
      { name: "Capricorn", daterange: "Dec 22 - Jan 19" },
      { name: "Aquarius", daterange: "Jan 20 - Feb 18" },
      { name: "Pisces", daterange: "Feb 19 - Mar 20" }
    ]
  };
  render() {
    return (
      <div>
        <h5 className="font-weight-bold">Your sunsign</h5>
        <select className="rounded-sm w-75" onChange={this.props.onListChange}>
          <option value="">Sunsigns</option>
          {this.state.sunsignList.map(sunsign => (
            <option key={sunsign.name} value={sunsign.name}>
              {sunsign.name} ({sunsign.daterange})
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default List;
