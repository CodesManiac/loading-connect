import React, { useState } from 'react'
import Package from "../../assets/images/comp.svg"
import Negotiate from "../../assets/images/comp2.svg"
import Deliver from "../../assets/images/comp3.svg"
import Button from '../button/Button'
import './work.scss'

const works = [
  {
    image: Package,
    title: "Choose a package to deliver",
    text: "Risus ac et etiam sit sit suspendisse proin. Velit, condimentum consectetur eros adipiscing tincidunt posuere placerat.",
  },
  {
    image: Negotiate,
    title: "Negotiate price with user and pick up",
    text: "Mauris tincidunt morbi et nisl risus adipiscing amet hendrerit morbi. Lectus purus tristique morbi nisl iaculis in sit.",
  },
  {
    image: Deliver,
    title: "Deliver Package",
    text: "Magna at consectetur arcu maecenas tortor, aliquam quisque non adipiscing. Pellentesque odio purus faucibus urna cursus.",
  },
];

const Work = () => {
    const [data] = useState(works)
  return (
    <div className="work__container">
      <h1>How It works</h1>
      <p>Send packages in 3 simple steps</p>
      <div className='work__layout'>
        {data.map((item) => (
          <div key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="work__btn">
          <Button url="/">Find Loans</Button>
      </div>
    </div>
  );
}

export default Work