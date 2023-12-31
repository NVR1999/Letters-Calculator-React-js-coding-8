// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: '', inputLength: 0}

  onChangeInputValue = event => {
    const typed = event.target.value
    this.setState({inputValue: typed, inputLength: typed.length})
  }

  render() {
    const {inputValue, inputLength} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputEl" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            id="inputEl"
            className="inputEle"
            placeholder="Enter the phrase"
            value={inputValue}
            onChange={this.onChangeInputValue}
          />
          <div className="letters-count">
            <p className="count-head">No.of Letters: {inputLength}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
