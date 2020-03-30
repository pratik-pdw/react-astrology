import React, { Component } from "react";
import List from "./List";
import Day from "./Day";
import Welcome from "./Welcome";
import Spinner from "./Spinner";
import Horoscope from "./Horoscope";
// import MadeWithLove from "react-made-with-love";

class App extends Component {
  state = {
    sunsign: null,
    day: "today",
    horoscope: null,
    showSpinner: false,
    showHoroscope: false
  };
  handleOnListChange = event => {
    if (event.target.value !== "") {
      this.setState({
        sunsign: event.target.value.toLowerCase(),
        showSpinner: true,
        showHoroscope: false
      });
    }

    // console.log(this.state);
  };
  handleOnDayChange = event => {
    console.log("day change called");
    if (event.target.value !== "") {
      this.setState({
        day: event.target.value.toLowerCase(),
        dayList: event.target
      });
    }
    if (this.state.sunsign !== null) {
      this.setState({
        showSpinner: true,
        showHoroscope: false
      });
    }

    // console.log(this.state);
  };

  handleCloseClick = () => {
    this.setState({
      sunsign: null,
      day: "today",
      horoscope: null,
      showSpinner: false,
      showHoroscope: false
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sunsign !== this.state.sunsign ||
      prevState.day !== this.state.day
    ) {
      console.log("called componentdidupdate");
      if (this.state.sunsign !== null && this.state.day != null) {
        const URL =
          "https://aztro.sameerkumar.website/?sign=" +
          this.state.sunsign +
          "&day=" +
          this.state.day;
        fetch(URL, {
          method: "POST"
        })
          .then(response => response.json())
          .then(json => {
            if (!json.message) {
              this.setState({
                horoscope: json,
                showSpinner: false,
                showHoroscope: true
              });
            }
          });
      }
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row mt-5 justify-content-center">
          <div className="col-sm-10 col-md-10 col-lg-6">
            <div className="mt-5 card shadow-sm ">
              <div className="card-header d-flex justify-content-between align-items-center">
                <List onListChange={this.handleOnListChange} />
                <Day onDayChange={this.handleOnDayChange} />
              </div>
              <div className="card-body">
                {this.state.sunsign === null || this.state.day === null ? (
                  <Welcome />
                ) : (
                  ""
                )}
                {this.state.showSpinner ? <Spinner /> : ""}
                {this.state.showHoroscope ? (
                  <Horoscope
                    onHandleCloseClick={this.handleCloseClick}
                    horoscope={{
                      ...this.state.horoscope,
                      sunsign: this.state.sunsign
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
