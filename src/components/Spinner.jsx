import React from "react";

export const Spinner = () => {
  return (
    <div className="spinner d-flex justify-content-center mt-5 mb-5 ">
      <div className="spinner-border mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

}

