import React, { useRef, useState } from 'react'
import {FaFacebookF} from 'react-icons/fa'

function ModalBase({children, title, hasShare}) {

  const [showModal, setShowModal] = useState(true)
  const ref = useRef()

  const closeModal = () => setShowModal(false)
  const handleClickBackground = e => {
    console.log(e.target)
    if (e.target===ref.current) closeModal()
  }

  if (!showModal) return <></>
  return (
    <div onClick={handleClickBackground} ref={ref} className="modal-background">
      <div className="modal">
        <div>
          <h1>{title}</h1>
          {children}
          <div className="button-group">
            {hasShare && <button className="facebook-button"><FaFacebookF/></button>}
            <button className="continue-button">Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalBase
