import { useState } from 'react'
import '../placeholder/Placeholder.css';

export const MarketDepthTable = () => {
  const [displayState, setDisplayState] = useState<'instructions' | 'design'>(
    'instructions',
  )

  const toggleDisplayState = () => {
    if (displayState === 'instructions') {
      setDisplayState('design')
    } else {
      setDisplayState('instructions')
    }
  }
  const buttonLabel =
    displayState === 'instructions' ? 'design' : 'instructions'
  return (
    <div className="Placeholder" style={{border: "1px solid red"}}>
      {displayState === 'instructions' ? (
        <div className="Placeholder-instructions" style={{border: "1px solid red"}}>
          <span>Your component will go here</span>
        </div>
      ) : (
        <div className="Placeholder-design"></div>
      )}
      <div className="Placeholder-buttonContainer" style={{border: "1px solid red"}}>
        <button type="button" onClick={toggleDisplayState}>
          Click to view {buttonLabel}
        </button>
      </div>
    </div>
  )
}
