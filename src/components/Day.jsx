import React from "react";
import { days } from '../constants';

export const Day = (props) => {
  const { day, onDayChange } = props;
  return (
    <div>
      <h5 className="font-weight-bold text-right">Day</h5>
      <select value={day} className="rounded-sm" onChange={onDayChange}>
        {days.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
}

