// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  inputlettersCount = event => {
    const input = event.target.value
    this.setState({
      lettersCount: input.length,
    })
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="letters-container">
        <div className="letter-input-container">
          <h1 className="letters-heading">Calculate the Letters you enter</h1>
          <div className="label-container">
            <label className="letter-phrase" htmlFor="phrase">
              Enter the phrase
            </label>
            <input
              className="letter-input"
              placeholder="Enter the phrase"
              onChange={this.inputlettersCount}
              id="phrase"
            />
          </div>
          <div className="letter-count-container">
            <p className="letter-count-heading">
              No.of letters: {lettersCount}
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letter-count-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
