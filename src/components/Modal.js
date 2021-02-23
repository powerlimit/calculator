import React from 'react'

export const Modal = ({children}) => {

  return (
    <div className="backdrop">
      <div className="modal-body">
        <span className="modal-close">Dismiss</span>
        {children}
      </div>
    </div>
  )
}