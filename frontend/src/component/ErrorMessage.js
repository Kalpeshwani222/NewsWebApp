import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div>
        <strong>{children}</strong>
    </div>
  )
}

export default ErrorMessage