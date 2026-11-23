import React, { useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="버튼을 클릭하면 포커스 됨"
      />
      <button onClick={handleFocus}>포커스</button>
    </div>
  )
}

export default FocusInput

