import React, { useState } from "react";
import "./edenUse.css";
const EdenUse = ({ heading, subHeading }) => {
  const [select, setSelect] = useState({
    myself: true,
    team: false,
  });
  return (
    <>
      <div className="mb-3">
        <h4 className="text-4xl m-1 text-grey-800">{heading}</h4>

        <p className=" text-netural-500 ">{subHeading}</p>
      </div>

      <div className="form-input-wrapper">
        <div className="input-card-wrapper mb-3">
          <div
            className={
              select.myself ? "input-card border-active__input" : "input-card"
            }
            onClick={() => {
              setSelect((prev) => ({ myself: !prev.myself, team: !prev.team }));
            }}
          >
            {select.myself ? (
              <svg
                height="20"
                width="20"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7C8.72589 7 10.125 5.60089 10.125 3.875C10.125 2.14911 8.72589 0.75 7 0.75C5.27411 0.75 3.875 2.14911 3.875 3.875C3.875 5.60089 5.27411 7 7 7Z"
                  fill="#4f46e5"
                  stroke="#4f46e5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5482 10.5938C13.8881 11.4886 13.0477 13.2501 11.4365 13.2501H2.56354C0.952315 13.2501 0.111973 11.4886 1.45186 10.5938C3.03951 9.53345 4.94757 8.91528 7.00001 8.91528C9.05245 8.91528 10.9605 9.53345 12.5482 10.5938Z"
                  fill="#4f46e5"
                  stroke="#4f46e5"
                />
              </svg>
            ) : (
              <svg
                height="20"
                width="20"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7C8.72589 7 10.125 5.60089 10.125 3.875C10.125 2.14911 8.72589 0.75 7 0.75C5.27411 0.75 3.875 2.14911 3.875 3.875C3.875 5.60089 5.27411 7 7 7Z"
                  fill="#a1a1aa"
                  stroke="#a1a1aa"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5482 10.5938C13.8881 11.4886 13.0477 13.2501 11.4365 13.2501H2.56354C0.952315 13.2501 0.111973 11.4886 1.45186 10.5938C3.03951 9.53345 4.94757 8.91528 7.00001 8.91528C9.05245 8.91528 10.9605 9.53345 12.5482 10.5938Z"
                  fill="#a1a1aa"
                  stroke="#a1a1aa"
                />
              </svg>
            )}
            <p className="weight-700">For myself</p>
            <p className="text-netural-500">
              White better. Think more clearly. Stay organized.
            </p>
          </div>
          <div
            className={
              select.team ? "input-card border-active__input" : "input-card"
            }
            onClick={() => {
              setSelect((prev) => ({ myself: !prev.myself, team: !prev.team }));
            }}
          >
            {select.team ? (
              <svg
                height="20"
                width="20"
                fill="none"
                strokeWidth="0.5"
                viewBox="0.25 0.25 13.5 13.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.39704 7.00869C10.7219 7.00869 11.7959 5.93467 11.7959 4.60981C11.7959 3.28495 10.7219 2.21094 9.39704 2.21094C8.07218 2.21094 6.99817 3.28495 6.99817 4.60981C6.99817 5.93467 8.07218 7.00869 9.39704 7.00869Z"
                  fill="#4f46e5"
                />
                <path
                  d="M9.39703 7.0088C10.7219 7.0088 11.7959 5.93478 11.7959 4.60992C11.7959 3.58506 11.1532 2.71031 10.2489 2.3667"
                  stroke="#ececf8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6736 10.3786C13.847 11.1601 13.0547 12.6674 11.6448 12.6674H6.35044C4.94059 12.6674 4.14824 11.1601 5.32165 10.3786C6.37417 9.67759 7.63819 9.26904 8.99764 9.26904C10.3571 9.26904 11.6211 9.67759 12.6736 10.3786Z"
                  fill="#4f46e5"
                />
                <path
                  d="M5.36049 6.53323C6.79662 6.53323 7.96084 5.36901 7.96084 3.93288C7.96084 2.49674 6.79662 1.33252 5.36049 1.33252C3.92435 1.33252 2.76013 2.49674 2.76013 3.93288C2.76013 5.36901 3.92435 6.53323 5.36049 6.53323Z"
                  fill="#4f46e5"
                  stroke="#ececf8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.34353 10.1866C10.6155 11.0338 9.75659 12.6677 8.22833 12.6677H2.48926C0.961003 12.6677 0.102108 11.0338 1.37407 10.1866C2.515 9.42674 3.88518 8.98389 5.3588 8.98389C6.83242 8.98389 8.20261 9.42674 9.34353 10.1866Z"
                  fill="#4f46e5"
                  stroke="#ececf8"
                />
                <path
                  d="M8.00726 12.6676H11.6448C13.0547 12.6676 13.847 11.1603 12.6736 10.3787C12.3496 10.1629 12.0055 9.97485 11.6448 9.81787"
                  stroke="#ececf8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                height="20"
                width="20"
                fill="none"
                strokeWidth="0.5"
                viewBox="0.25 0.25 13.5 13.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.39704 7.00869C10.7219 7.00869 11.7959 5.93467 11.7959 4.60981C11.7959 3.28495 10.7219 2.21094 9.39704 2.21094C8.07218 2.21094 6.99817 3.28495 6.99817 4.60981C6.99817 5.93467 8.07218 7.00869 9.39704 7.00869Z"
                  fill="#9ca3af"
                />
                <path
                  d="M9.39703 7.0088C10.7219 7.0088 11.7959 5.93478 11.7959 4.60992C11.7959 3.58506 11.1532 2.71031 10.2489 2.3667"
                  stroke="#fffefe"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6736 10.3786C13.847 11.1601 13.0547 12.6674 11.6448 12.6674H6.35044C4.94059 12.6674 4.14824 11.1601 5.32165 10.3786C6.37417 9.67759 7.63819 9.26904 8.99764 9.26904C10.3571 9.26904 11.6211 9.67759 12.6736 10.3786Z"
                  fill="#9ca3af"
                />
                <path
                  d="M5.36049 6.53323C6.79662 6.53323 7.96084 5.36901 7.96084 3.93288C7.96084 2.49674 6.79662 1.33252 5.36049 1.33252C3.92435 1.33252 2.76013 2.49674 2.76013 3.93288C2.76013 5.36901 3.92435 6.53323 5.36049 6.53323Z"
                  fill="#9ca3af"
                  stroke="#fffefe"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.34353 10.1866C10.6155 11.0338 9.75659 12.6677 8.22833 12.6677H2.48926C0.961003 12.6677 0.102108 11.0338 1.37407 10.1866C2.515 9.42674 3.88518 8.98389 5.3588 8.98389C6.83242 8.98389 8.20261 9.42674 9.34353 10.1866Z"
                  fill="#9ca3af"
                  stroke="#fffefe"
                />
                <path
                  d="M8.00726 12.6676H11.6448C13.0547 12.6676 13.847 11.1603 12.6736 10.3787C12.3496 10.1629 12.0055 9.97485 11.6448 9.81787"
                  stroke="#fffefe"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <p className="weight-700">With my team</p>
            <p className="text-netural-500">
              Wikis, docs, tasks, & projects, all in one place.
            </p>
          </div>
        </div>
        <button className="form-button">Create Workspace</button>
      </div>
    </>
  );
};

export { EdenUse };