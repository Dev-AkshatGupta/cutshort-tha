import React, { useState } from "react";
import "./forms.css";
import SignUpInfo from "../signupInfo/SignUpInfo";
import { Planning } from "../planning/Planning";
import { EdenUse } from "../edenUse/EdenUse";
const Forms = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
  });
  const [page, setPage] = useState(3);
  const FormTitles = [
    {
      heading: "Welcome! First things first...",
      subHeading: "You can always change them later.",
    },
    {
      subHeading: "You can always create another workspace later",
      heading: "Let's set up a home for all your work",
    },
    {
      heading: "How are you planning to us Eden?",
      subHeading: "We'll streamline your setup experience accordingly",
    },
    {
      heading: "Congratulations,",
      subHeading: "We have completed onboarding, you can start using the Eden!",
    },
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo
          formData={formData}
          setFormData={setFormData}
          heading={FormTitles[0].heading}
          subHeading={FormTitles[0].subHeading}
        />
      );
    } else if (page === 1) {
     return  <Planning
        heading={FormTitles[1].heading}
        subHeading={FormTitles[1].subHeading}
      />;
    } else {
     return  <EdenUse heading={FormTitles[2].heading}
        subHeading={FormTitles[2].subHeading}/>

    }
  };
  return (
    <div className="form-hero__wrapper">
      <section className="form-hero__content">
        <h1 className="align-center text-3xl text-grey-800 m-1 ">Eden</h1>
      </section>
      <section className="horizontal-stepper__wrapper">
        <span className="horizontal-stepper__step">1</span>
        <span className="horizontal-stepper__step">2</span>
        <span className="horizontal-stepper__step">3</span>
        <span className="horizontal-stepper__step">4</span>
        <div className="horizontal-stepper__progress-bar"></div>
      </section>
      {/* <SignUpInfo
        heading={FormTitles[0].heading}
        subHeading={FormTitles[0].subHeading}
      /> */}
      {/* <Planning
        heading={FormTitles[1].heading}
        subHeading={FormTitles[1].subHeading}
      /> */}
      < PageDisplay />
    </div>
  );
};

export { Forms };
