import React from 'react'
import ReactSlider from 'react-slider'
import './slider.scss'

const Slider = ({weightValue, setWeightValue}) => {
  return (
    <ReactSlider
    className="horizontal-slider"
    trackClassName="slider-track"
    thumbClassName="slider-thumb"
    defaultValue={0}
    value={weightValue}
    onChange={(value)=> setWeightValue(value)}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    // minDistance={10}
    // renderTrack={(props, state) => <div {...props} />}
    />
  )
}

export default Slider