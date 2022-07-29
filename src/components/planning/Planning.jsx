import React from 'react'
import "./planning.css";
const Planning = ({ heading, subHeading }) => {
  return (
    <>
      <div className="mb-3">
        <h4 className="text-4xl m-1 text-grey-800">{heading}</h4>

        <p className=" text-netural-500 ">{subHeading}</p>
      </div>

      <div className="form-input-wrapper">
        <label className="input-label">
          Workspace Name
          <input
            type="text"
            //   value={state[value]}
            //   onChange={(e) =>
            //     setState((prev) => ({ ...prev, [value]: e.target.value }))
            //   }
            placeholder="Eden"
            className="input-text"
          />
        </label>
        <div className="input-label__wrapper">
          <label className="input-label" style={{ textAlign: "left" }}>
            Workspace URL
            <span className="text-grey-400" htmlFor="workspaceUrl">
              (optional)
            </span>
          </label>
          <p className="w-100">
            <span className="input-text text-grey-400 w-40 pb-3 bg-c-slate-50">
              www.eden.com/
            </span>
            {/* <span> */}
            <input
              id="workspaceUrl"
              type="url"
              //   value={state[value]}
              //   onChange={(e) =>
              //     setState((prev) => ({ ...prev, [value]: e.target.value }))
              //   }
              placeholder="Steve"
              className="input-text w-60"
            />
            {/* </span> */}
          </p>
        </div>
        <button className="form-button">Create Workspace</button>
      </div>
    </>
  );
};

export  {Planning}
