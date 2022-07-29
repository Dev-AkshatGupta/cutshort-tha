import React from 'react';
import "./signupInfo.css";

const SignUpInfo = ({heading, subHeading}) => {
 
return (
  <>
    <div className="mb-3">
      <h4 className="text-4xl m-1 text-grey-800">{heading}</h4>

      <p className=" text-netural-500 ">{subHeading}</p>
    </div>

    <div className="form-input-wrapper">
      <label className="input-label">
        Full Name
        <input
          type="text"
          //   value={state[value]}
          //   onChange={(e) =>
          //     setState((prev) => ({ ...prev, [value]: e.target.value }))
          //   }
          placeholder="Steve Jobs"
          className="input-text"
        />
      </label>
      <label className="input-label">
        Display Name
        <input
          type="text"
          //   value={state[value]}
          //   onChange={(e) =>
          //     setState((prev) => ({ ...prev, [value]: e.target.value }))
          //   }
          placeholder="Steve"
          className="input-text"
        />
      </label>
      <button className="form-button">Create Workspace</button>
    </div>
  </>
);
}

export default SignUpInfo
