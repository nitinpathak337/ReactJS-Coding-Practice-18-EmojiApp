// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navbar">
      <div className="logo-name">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      <div className="score-top-score">
        {score === undefined ? null : <p className="score">Score: {score}</p>}
        {topScore === undefined ? null : (
          <p className="score">Top Score: {topScore}</p>
        )}
      </div>
    </nav>
  )
}
export default NavBar
