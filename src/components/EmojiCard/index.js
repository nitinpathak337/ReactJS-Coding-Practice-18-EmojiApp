// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, checkResult} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const check = () => {
    checkResult(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={check}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
