import React from 'react'

const T4 = () => {
  const dt = new Date().toLocaleDateString()
  const tm = new Date().toLocaleTimeString()

  return (
    <div>
      <p style={{ color: 'red', textAlign: 'center' }}>
        Current date: {dt}
        <br></br>
        Current time: {tm}
      </p>
    </div>
  )
}

export default T4
