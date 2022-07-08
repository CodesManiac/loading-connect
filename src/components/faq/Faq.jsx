import React from "react";
import { useState } from "react";
import Button from "../linkBtn/Button";
import { question } from "../../data";

import "./faq.scss";
import Question from "./Question";
const Faq = () => {
  const [data] = useState(question);
  return (
    <div className="faq__container" id="faq">
      <h2>Frequently Asked Questions</h2>{" "}
      <div className="sub__container">
        <div>
          <div>
            {data.map((item) => (
              <Question key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="question">
          <p>Have a Questions?</p>
          <p>
            We are Load Connect are committed to helping and answering any
            questions you might have
          </p>
          <div className="find__loan" style={{ marginTop: "2rem" }}>
            <Button url="/driverlogin">Find Loads</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
