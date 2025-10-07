import React from 'react'

const Rating = () => {
  return (
    <div>
      {
        Array.from({length: 5}, (_, index) => {
          const starValue = index + 1;
          return (
            <span className={``} key={index}>&#9733;</span>
          )
        })
      }
    </div>
  )
}

export default Rating
