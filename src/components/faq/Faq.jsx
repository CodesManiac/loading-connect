import React from "react";
import ArrowOpen from "../../assets/images/arrowlef.svg";
import ArrowRight from "../../assets/images/arrowright.svg";
import Button from "../button/Button";

import "./faq.scss";
const Faq = () => {
  return (
    <div className="faq__container">
      <h2>Frequently Asked Questions</h2>{" "}
      <div className="sub__container">
        <div>
          <div className="tab__open">
            <p>What is your first memory?</p>
            <span>
              <img src={ArrowOpen} alt="arrow down" />
            </span>
          </div>
          <p className="tab__content">
            Lectus sed mattis ut turpis integer auctor ut commodo, nulla. Felis
            augue vulputate ornare praesent nunc scelerisque. Quam vitae vitae
            facilisis lacus, pulvinar gravida ultricies tempor, adipiscing.
            Vivamus ornare purus non nibh facilisis amet maecenas. Nunc erat
            pretium lobortis.
          </p>
          <div className="tab__open">
            <p>Do you like flying?</p>
            <span>
              <img src={ArrowRight} alt="arrow down" />
            </span>
          </div>
          <p className="bottom__line"></p>
          <div className="tab__open">
            <p>Which do you like better, black socks or white socks?</p>
            <span>
              <img src={ArrowRight} alt="arrow down" />
            </span>
          </div>
          <p className="bottom__line"></p>
          <div className="tab__open">
            <p>What is your favorite holiday?</p>
            <span>
              <img src={ArrowRight} alt="arrow down" />
            </span>
          </div>
          <p className="bottom__line"></p>
          <div className="tab__open">
            <p>Have you ever changed a diaper?</p>
            <span>
              <img src={ArrowRight} alt="arrow down" />
            </span>
          </div>
          <p className="bottom__line"></p>
        </div>
        <div className="question">
          <p>Have a Questions?</p>
          <p>
            We are Load Connect are committed to helping and answering any
            questions you might have
          </p>
          <div className="find__loan" style={{ marginTop: "2rem" }}>
            <Button url="/">Find Loans</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
