import React, { useState, useEffect } from "react";
import { Day, Welcome, Spinner, Horoscope, List } from "./components";
import { getHoroscope } from './services';

export const App = () => {

  const [state, setState] = useState({
    sunsign: null,
    day: "Today",
    horoscope: null,
    showSpinner: false,
    showHoroscope: false
  });

  const handleOnListChange = event => {
    const sunsign = event.target.value;
    if (sunsign !== "") {
      setState(prevState => ({
        ...prevState,
        sunsign,
        showSpinner: true,
        showHoroscope: false
      }))
    }
  };

  const handleOnDayChange = event => {
    const day = event.target.value;
    if (day !== "") {
      setState(prevState => ({
        ...prevState,
        day
      }));
    }
    if (state.sunsign !== null) {
      setState(prevState => ({
        ...prevState,
        showSpinner: true,
        showHoroscope: false
      }));
    }
  };

  const handleCloseClick = () => {
    setState({
      sunsign: null,
      day: "Today",
      horoscope: null,
      showSpinner: false,
      showHoroscope: false
    });
  };

  useEffect(() => {
    if (state.sunsign && state.day) {
      getHoroscope(state.sunsign, state.day).then(data => {
        setState(prevState => ({
          ...prevState,
          ...data,
          showSpinner: false,
          showHoroscope: true
        }));
      });
    }
  }, [state.sunsign, state.day])

  return (
    <div className="container mt-5">
      <div className="row mt-5 justify-content-center">
        <div className="col-sm-10 col-md-10 col-lg-6">
          <div className="mt-5 card shadow-sm ">
            <div className="card-header d-flex justify-content-between align-items-center">
              <List day={state.day} onListChange={handleOnListChange} />
              <Day onDayChange={handleOnDayChange} />
            </div>
            <div className="card-body">
              {(state.sunsign === null || state.day === null) && <Welcome />}
              {state.showSpinner && <Spinner />}
              {state.showHoroscope && <Horoscope
                  onHandleCloseClick={handleCloseClick}
                  horoscope={{ ...state }} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
