import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojiIds: [], result: false}

  checkResult = id => {
    const {emojiIds} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    shuffledEmojisList()
    if (emojiIds.includes(id) === false) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojiIds: [...prevState.emojiIds, id],
      }))
    } else {
      this.setState({result: true})
    }
  }

  restartGame = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({
        result: false,
        score: 0,
        topScore: score,
        emojiIds: [],
      })
    } else {
      this.setState({
        result: false,
        score: 0,

        emojiIds: [],
      })
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, result} = this.state

    return (
      <div className="bg">
        {result === true || score === 12 ? (
          <>
            <NavBar />
            <WinOrLoseCard score={score} restartGame={this.restartGame} />
          </>
        ) : (
          <>
            <NavBar score={score} topScore={topScore} />
            <ul className="emojis-list-container">
              {emojisList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  emojiDetails={eachItem}
                  checkResult={this.checkResult}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default EmojiGame
