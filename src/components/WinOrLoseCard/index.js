// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, restartGame} = props

  const playAgain = () => {
    restartGame()
  }

  return (
    <div className="card-container">
      <div className="looseCard">
        {score === 12 ? (
          <>
            <div>
              <h1 className="win-lose-text">You Won</h1>
              <p className="score-text">Best Score</p>
              <p className="final-score">{score}/12</p>
              <div className="button-container">
                <button
                  className="play-again-button"
                  type="button"
                  onClick={playAgain}
                >
                  Play Again
                </button>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              className="loose-win-image"
              alt="win or lose"
            />
          </>
        ) : (
          <>
            <div>
              <h1 className="win-lose-text">You Lose</h1>
              <p className="score-text">Score</p>
              <p className="final-score">{score}/12</p>
              <div className="button-container">
                <button
                  className="play-again-button"
                  type="button"
                  onClick={playAgain}
                >
                  Play Again
                </button>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              className="loose-win-image"
              alt="win or lose"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
