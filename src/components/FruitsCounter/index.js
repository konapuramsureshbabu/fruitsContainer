import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    count1: 0,
    count2: 0,
  }

  onIncrementMango = () => {
    this.setState(prevState => {
      return {count1: prevState.count1 + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(prevState => {
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="span"> {count1}</span>mangoes
          <span className="count"> {count2} </span> bananas
        </h1>
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
          />
          <button
            className="button"
            type="button"
            onClick={this.onIncrementMango}
          >
            Eat Mango
          </button>
        </div>

        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
          />
          <button
            className="button"
            type="button"
            onClick={this.onIncrementBanana}
          >
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
