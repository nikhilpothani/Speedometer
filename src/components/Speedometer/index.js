// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    this.setState(prevstate =>
      prevstate.speed < 200
        ? {speed: prevstate.speed + 10}
        : {speed: prevstate.speed},
    )
  }

  onDecrement = () => {
    this.setState(prevstate =>
      prevstate.speed > 0
        ? {speed: prevstate.speed - 10}
        : {speed: prevstate.speed},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="heading">
          Speed is <span className="speed">{speed}</span>mph
        </h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="break-btn"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
