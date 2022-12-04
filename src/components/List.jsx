import React from "react";
import { sunsignDateRanges } from '../constants';

export const List = (props) => {
  const { onListChange } = props;
  return (
    <div>
      <h5 className="font-weight-bold">Your sunsign</h5>
      <select className="rounded-sm w-75" onChange={onListChange}>
        <option value="">Sunsigns</option>
        {sunsignDateRanges.map(sunsign => (
          <option key={sunsign.name} value={sunsign.name}>
            {sunsign.name} ({sunsign.daterange})
          </option>
        ))}
      </select>
    </div>
  );
}

